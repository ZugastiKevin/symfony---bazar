<?php

namespace App\Repository;

use App\Entity\Parts;
use App\Entity\Category;
use App\Entity\Items;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Filesystem\Filesystem;

/**
 * @extends ServiceEntityRepository<Items>
 */
class ItemsRepository extends ServiceEntityRepository
{
    private mixed $httpClient;
    private string $projectDir;

    public function __construct(ManagerRegistry $registry, HttpClientInterface $httpClient, string $projectDir,)
    {
        parent::__construct($registry, Items::class);
        $this->httpClient = $httpClient;
        $this->projectDir = rtrim($projectDir, '/');
    }

    /**
     * Upsert des items retournés par l'API en résolvant les relations Category.
     *
     * @param array $items
     * @param string $language
     * @return Items[]
     */
    public function upsertItemsFromApi(array $items, string $language = 'fr'): array
    {
        $em = $this->getEntityManager();
        $persisted = [];
        $categoryRepo = $em->getRepository(Category::class);
        $fs = new Filesystem();
        $tmpDir = $this->projectDir . '/var/tmp/uploads';
        $categoryCache = [];

        foreach ($items as $raw) {
            if (!is_array($raw)) {
                continue;
            }

            $rawName = $this->normalizeApiStringField($raw, 'name');
            if ($rawName !== null) {
                $normalized = mb_strtolower(trim($rawName));
                if (in_array($normalized, ['orokin cell', 'cellule orokin'], true)) {
                    continue;
                }
            }

            $unique = $raw['uniqueName'] ?? null;
            if ($unique === null) {
                continue;
            }

            $entity = $this->findOneBy(['uniqueName' => $unique]) ?? new Items();
            if (!$entity->getId() && method_exists($entity, 'setUniqueName')) {
                $entity->setUniqueName($unique);
            }

            // Nom EN / FR
            $name = $this->normalizeApiStringField($raw, 'name');
            if ($name !== null) {
                if ($language === 'fr') {
                    $entity->setNameFR($name);
                } else {
                    $entity->setNameEN($name);
                }
            }

            // Description EN / FR
            $description = $this->normalizeApiStringField($raw, 'description');
            if ($description !== null) {
                if ($language === 'fr') {
                    $entity->setDescriptionFR($description);
                } else {
                    $entity->setDescriptionEN($description);
                }
            }

            // Gestion des categories (relation)
            if (array_key_exists('category', $raw) && $raw['category'] !== null) {
                $cats = is_array($raw['category']) ? $raw['category'] : [$raw['category']];
                $resolvedCategories = [];

                foreach ($cats as $c) {
                    if (!is_string($c)) {
                        continue;
                    }

                    $name = trim($c);
                    if ($name === '') {
                        continue;
                    }

                    // Clé de cache, normalisée (on peut lower pour être sûr)
                    $cacheKey = mb_strtolower($name);

                    // 1) Si déjà en cache : on réutilise
                    if (isset($categoryCache[$cacheKey])) {
                        $catEntity = $categoryCache[$cacheKey];
                    } else {
                        // 2) Sinon, on cherche en DB
                        $catEntity = $categoryRepo->findOneBy(['name' => $name]);

                        // 3) Si pas trouvé → on crée
                        if ($catEntity === null) {
                            $catEntity = new Category();
                            $catEntity->setName($name);
                            $em->persist($catEntity);
                        }

                        // 4) On le met dans le cache
                        $categoryCache[$cacheKey] = $catEntity;
                    }

                    $resolvedCategories[] = $catEntity;
                }

                if (!empty($resolvedCategories)) {
                    $entity->setCategory($resolvedCategories[0]);
                }
            }

            // Gestion des components pour Warframes / armes
            $warframeCategories = ['warframes', 'primary', 'secondary', 'melee'];

            // On regarde la/les catégories brutes de l'API (en minuscule)
            $rawCategories = [];
            if (array_key_exists('category', $raw) && $raw['category'] !== null) {
                $rawCategories = is_array($raw['category']) ? $raw['category'] : [$raw['category']];
            }

            $hasWarframeLikeCategory = false;
            foreach ($rawCategories as $catRaw) {
                if (!is_string($catRaw)) {
                    continue;
                }
                if (in_array(mb_strtolower(trim($catRaw)), $warframeCategories, true)) {
                    $hasWarframeLikeCategory = true;
                    break;
                }
            }

            // Si c'est une Warframe / Primary / Secondary / Melee et que l'API fournit des "components"
            if ($hasWarframeLikeCategory && !empty($raw['components']) && is_array($raw['components'])) {
                $this->upsertComponentsForItem($entity, $raw['components'], $language);
            }

            // -- Gestion de l'image via Vich --
            if (!empty($raw['imageName'])) {
                $this->handleImageFromApi($entity, $raw['imageName'], $fs, $tmpDir);
            }

            if (array_key_exists('isPrime', $raw)) {
                $isPrime = (bool) filter_var($raw['isPrime'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
                $entity->setIsPrime($isPrime);
            }

            if (!empty($raw['wikiaUrl'])) {
                $entity->setWikiaUrl($raw['wikiaUrl']);
            }

            if (array_key_exists('ducats', $raw)) {
                $entity->setDucats((int) $raw['ducats']);
            }

            $em->persist($entity);
            $persisted[] = $entity;
        }

        if (!empty($persisted)) {
            $em->flush();
        }

        return $persisted;
    }

    /**
     * Recherche simple par terme sur les champs name, uniqueName et searchNames (JSON).
     * Retourne un tableau d'entités Items.
     * @param string $term
     * @param int|null $limit
     * @return Items[]
     */
    public function findBySearchTerm(string $term, ?int $limit = 50): array
    {
        $qb = $this->createQueryBuilder('i');

        $term = trim($term);
        if ($term === '') {
            return [];
        }

        // Normaliser les espaces internes (collapse multiple espaces en un seul)
        $normalized = preg_replace('/\s+/u', ' ', $term);
        $paramValue = '%' . mb_strtolower($normalized) . '%';

        $qb->where('LOWER(i.nameEN) LIKE :q')
            ->orWhere('LOWER(i.nameFR) LIKE :q')
            ->setParameter('q', $paramValue);

        if ($limit !== null) {
            $qb->setMaxResults($limit);
        }

        return $qb->getQuery()->getResult();
    }

    private function normalizeApiStringField(array $raw, string $key): ?string
    {
        if (!array_key_exists($key, $raw) || $raw[$key] === null) {
            return null;
        }

        $value = $raw[$key];

        // Si c'est déjà une string → OK
        if (is_string($value)) {
            return $value;
        }

        // Si c'est un array → on concatène les éléments en string
        if (is_array($value)) {
            // On convertit chaque élément en string puis on les colle avec un espace
            $flat = array_map(static fn($v) => is_scalar($v) ? (string) $v : '', $value);
            $flat = array_filter($flat, fn($s) => $s !== '');
            return $flat ? implode(' ', $flat) : null;
        }

        return null;
    }

    /**
     * Crée / met à jour les components pour un item "parent" (warframe / arme)
     * et les lie via l'entité Parts.
     *
     * @param Items  $parentItem    L'item principal (Warframe / Primary / Secondary / Melee)
     * @param array  $rawComponents Les données 'components' provenant de l'API
     * @param string $language      'fr' ou 'en' pour les noms / descriptions
     */
    private function upsertComponentsForItem(Items $parentItem, array $rawComponents, string $language = 'fr'): void
    {
        $em = $this->getEntityManager();
        $partsRepo = $em->getRepository(Parts::class);

        // Nom du parent dans la bonne langue
        $parentName = null;
        if ($language === 'fr') {
            $parentName = $parentItem->getNameFR() ?? $parentItem->getNameEN();
        } else {
            $parentName = $parentItem->getNameEN() ?? $parentItem->getNameFR();
        }
        if ($parentName === null) {
            $parentName = $parentItem->getUniqueName() ?? 'Item';
        }

        foreach ($rawComponents as $componentRaw) {
            if (!is_array($componentRaw)) {
                continue;
            }

            // Nom brut du component tel que renvoyé par l'API (Blueprint, Chassis, Neuroptics, etc.)
            $rawPartName = $this->normalizeApiStringField($componentRaw, 'name');

            // Filtre anti Orokin Cell
            if ($rawPartName !== null) {
                $normalized = mb_strtolower(trim($rawPartName));
                if (in_array($normalized, ['orokin cell', 'cellule orokin'], true)) {
                    continue;
                }
            }

            $componentUnique = $componentRaw['uniqueName'] ?? null;
            if ($componentUnique === null) {
                continue;
            }

            // ----- Construction du NOM FINAL de la part -----
            // Cas 1 : le component s'appelle "Blueprint" (ou "Schéma")
            $isBlueprintOnly = false;
            if ($rawPartName !== null) {
                $n = mb_strtolower(trim($rawPartName));
                if (in_array($n, ['blueprint', 'schéma', 'schema'], true)) {
                    $isBlueprintOnly = true;
                }
            }

            if ($language === 'fr') {
                // suffixe FR
                $suffix = 'Schéma';

                if ($isBlueprintOnly) {
                    // juste "Chroma Prime Schéma"
                    $finalName = sprintf('%s %s', $parentName, $suffix);
                } else {
                    // "Chroma Prime Neuroptics Schéma"
                    $finalName = sprintf('%s %s %s', $parentName, $rawPartName ?? '', $suffix);
                }
            } else {
                // EN
                $suffix = 'Blueprint';

                if ($isBlueprintOnly) {
                    $finalName = sprintf('%s %s', $parentName, $suffix);
                } else {
                    $finalName = sprintf('%s %s %s', $parentName, $rawPartName ?? '', $suffix);
                }
            }

            $finalName = trim(preg_replace('/\s+/', ' ', $finalName)); // nettoyage espaces multiples

            // 1) On récupère ou crée le Parts correspondant à CE component
            /** @var Parts|null $parts */
            $parts = $partsRepo->findOneBy(['uniqueName' => $componentUnique]);

            if ($parts === null) {
                $parts = new Parts();
                $parts->setUniqueName($componentUnique);
                $em->persist($parts);
            }

            $parts->setOwner($parentItem);

            // 2) On crée / met à jour l'Items pour ce component
            /** @var Items|null $componentEntity */
            $componentEntity = $this->findOneBy(['uniqueName' => $componentUnique]) ?? new Items();

            if (!$componentEntity->getId() && method_exists($componentEntity, 'setUniqueName')) {
                $componentEntity->setUniqueName($componentUnique);
            }

            // Nom de l'item component = même finalName
            if ($language === 'fr') {
                if (method_exists($componentEntity, 'setNameFR')) {
                    $componentEntity->setNameFR($finalName);
                }
            } else {
                if (method_exists($componentEntity, 'setNameEN')) {
                    $componentEntity->setNameEN($finalName);
                }
            }

            // Description du component (on garde celle de l'API)
            $description = $this->normalizeApiStringField($componentRaw, 'description');
            if ($description !== null) {
                if ($language === 'fr' && method_exists($componentEntity, 'setDescriptionFR')) {
                    $componentEntity->setDescriptionFR($description);
                } elseif ($language === 'en' && method_exists($componentEntity, 'setDescriptionEN')) {
                    $componentEntity->setDescriptionEN($description);
                }
            }

            // Ducats
            if (array_key_exists('ducats', $componentRaw) && method_exists($componentEntity, 'setDucats')) {
                $componentEntity->setDucats((int) $componentRaw['ducats']);
            }

            // Image du component
            if (!empty($componentRaw['imageName'])) {
                $this->handleImageFromApi($componentEntity, $componentRaw['imageName'], new Filesystem(), $this->projectDir . '/var/tmp/uploads');
            }

            // Catégorie : on peut copier celle du parent
            if (method_exists($componentEntity, 'setCategory') && $parentItem->getCategory() !== null) {
                $componentEntity->setCategory($parentItem->getCategory());
            }

            // Lien Items -> Parts
            $componentEntity->setParts($parts);

            $em->persist($componentEntity);
        }
    }

    private function handleImageFromApi(Items $entity, string $imageName, Filesystem $fs, string $tmpDir): void
    {
        if (!method_exists($entity, 'setImageFile')) {
            return;
        }

        if (method_exists($entity, 'setImageName')) {
            $entity->setImageName($imageName);
        }

        // Dossier final où Vich enregistre les fichiers de items_api_image
        $finalDir  = $this->projectDir . '/public/assets/images/uploads/api';
        $finalPath = $finalDir . '/' . $imageName;

        // Si le fichier existe déjà en destination finale,
        // on ne refait PAS d'upload : on réutilise le même fichier.
        if ($fs->exists($finalPath)) {
            return;
        }

        $imageUrl = 'https://cdn.warframestat.us/img/' . $imageName;

        try {
            $response = $this->httpClient->request('GET', $imageUrl, [
                'headers' => ['User-Agent' => 'app-importer/1.0']
            ]);

            if ($response->getStatusCode() === 200) {
                $content = $response->getContent();

                if (!$fs->exists($tmpDir)) {
                    $fs->mkdir($tmpDir, 0755);
                }

                $safeName = basename($imageName);
                $tmpPath  = $tmpDir . '/' . $safeName;
                file_put_contents($tmpPath, $content);

                $ext  = strtolower(pathinfo($safeName, PATHINFO_EXTENSION));
                $mime = match ($ext) {
                    'png' => 'image/png',
                    'jpg', 'jpeg' => 'image/jpeg',
                    'webp' => 'image/webp',
                    default => 'application/octet-stream',
                };

                $uploaded = new UploadedFile(
                    $tmpPath,
                    $safeName,
                    $mime,
                    null,
                    true
                );

                $entity->setImageFile($uploaded);
            }
        } catch (\Throwable $e) {
            // on ignore si ça plante
        }
    }
}