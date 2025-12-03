<?php

namespace App\Service;

use App\Entity\Items;
use App\Repository\ItemsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ItemsProvider
{
    /** @var Items[] */
    private array $cache = [];

    public function __construct(
        private ItemsRepository $repository,
        private EntityManagerInterface $em,
        private WarframeApiClient $apiClient,
    ) {}

    public function getByName(string $name): ?Items
    {
        $searchName = $this->normalizeName($name);

        // 1. Check dans l’array du service (cache de la requête)
        if (isset($this->cache[$searchName])) {
            return $this->cache[$searchName];
        }

        // 2. Check en BDD en comparant nameEn/nameFr/uniqueName ou le JSON search_names
        $item = $this->repository->findOneBySearchNameMatching($searchName);
        if ($item) {
            // si l'enregistrement existe mais ne contient pas le searchName dans le JSON, on l'ajoute
            if (!in_array($searchName, $item->getSearchNames(), true)) {
                $item->addSearchName($searchName);
                $this->em->persist($item);
                $this->em->flush();
            }

            $this->cache[$searchName] = $item;
            return $item;
        }

        // 3. Sinon, fetch via l’API (EN + FR)
        $dataEn = $this->apiClient->searchItem($name, 'en');
        $dataFr = $this->apiClient->searchItem($name, 'fr');

        if (empty($dataEn)) {
            // rien trouvé du tout → tu peux retourner null
            // ou lever une exception selon ton choix
            return null;
        }

        // on prend le premier résultat EN comme base
        $en = $dataEn[0];
        $fr = !empty($dataFr) ? $dataFr[0] : null;

        $item = new Items();
        $item->setUniqueName($en['uniqueName'] ?? null);
        $item->setNameEn($en['name'] ?? null);
        $item->setDescriptionEn($en['description'] ?? null);
        $item->setNameFr($fr['name'] ?? null);
        $item->setDescriptionFr($fr['description'] ?? null);

        $imageName = $en['imageName'] ?? null;

        if ($imageName) {
            $imageUrl = 'https://cdn.warframestat.us/img/' . $imageName;
            $item->setImageUrl($imageUrl);

            try {
                $contents = @file_get_contents($imageUrl);
                if ($contents !== false) {
                    $ext = pathinfo($imageName, PATHINFO_EXTENSION) ?: 'jpg';
                    $tmpPath = sys_get_temp_dir() . '/' . uniqid('wf_', true) . '.' . $ext;
                    file_put_contents($tmpPath, $contents);

                    // Déduire un mime simple depuis l'extension pour éviter l'appel à ext-fileinfo
                    $extLower = strtolower($ext);
                    $mime = match ($extLower) {
                        'png' => 'image/png',
                        'jpg', 'jpeg' => 'image/jpeg',
                        'gif' => 'image/gif',
                        'webp' => 'image/webp',
                        default => null,
                    };

                    // Création d'un UploadedFile en mode test pour contourner les vérifs PHP upload
                    $uploaded = new UploadedFile(
                        $tmpPath,
                        basename($imageName),
                        $mime,
                        null,
                        true
                    );

                    $item->setImageFile($uploaded);
                }
            } catch (\Throwable $e) {

            }
        }

        $item->setCategory($en['category'] ?? null);
        $item->setProductCategory($en['productCategory'] ?? null);

        // Si l'API renvoie des components, tenter de récupérer/créer chacun d'eux
        if (!empty($en['components']) && is_array($en['components'])) {
            foreach ($en['components'] as $component) {
                $compName = $component['name'] ?? ($component['uniqueName'] ?? null);
                if (!$compName) {
                    continue;
                }

                $compSearch = $this->normalizeName($compName);

                // éviter les références circulaires vers soi-même
                if ($compSearch === $searchName) {
                    continue;
                }

                try {
                    // si déjà en cache, pas besoin de rappeler l'API
                    if (!isset($this->cache[$compSearch])) {
                        // appel récursif : créera/enregistrera l'Items composant et téléchargera son image
                        $this->getByName($compName);
                    }
                } catch (\Throwable $e) {
                    // ne pas bloquer la création de l'item principal si un composant échoue
                }
            }
        }

        // 4. Sauvegarde en BDD
        $this->em->persist($item);
        $this->em->flush();

        // 5. Ajout dans l’array cache
        $this->cache[$searchName] = $item;

        return $item;
    }

    private function normalizeName(string $name): string
    {
        return mb_strtolower(trim($name));
    }
}
