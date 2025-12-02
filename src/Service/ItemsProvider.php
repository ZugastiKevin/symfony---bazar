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

        // 2. Check en BDD
        $item = $this->repository->findOneBy(['searchName' => $searchName]);
        if ($item) {
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

        // Sélection plus robuste : on essaie de trouver la meilleure correspondance
        $en = null;
        $fr = null;

        $searchLower = mb_strtolower($searchName);

        // 1) correspondance par uniqueName exacte
        foreach ($dataEn as $candidate) {
            if (isset($candidate['uniqueName']) && mb_strtolower($candidate['uniqueName']) === $searchLower) {
                $en = $candidate;
                break;
            }
        }

        // 2) sinon, privilégier les Warframes (si on cherche une warframe)
        if ($en === null) {
            foreach ($dataEn as $candidate) {
                if (isset($candidate['category']) && mb_strtolower($candidate['category']) === 'warframes') {
                    $en = $candidate;
                    break;
                }
            }
        }

        // 3) sinon, correspondance par nom exact (insensible à la casse)
        if ($en === null) {
            foreach ($dataEn as $candidate) {
                if (isset($candidate['name']) && mb_strtolower($candidate['name']) === $searchLower) {
                    $en = $candidate;
                    break;
                }
            }
        }

        // 4) fallback sur le premier élément
        if ($en === null) {
            $en = $dataEn[0];
        }

        // Extraire uniqueName pour une comparaison sûre
        $enUnique = $en['uniqueName'] ?? null;

        // Pour le FR : si possible on prend l'élément FR ayant le même uniqueName
        if (!empty($dataFr)) {
            foreach ($dataFr as $candidateFr) {
                if ($enUnique !== null && isset($candidateFr['uniqueName']) && $candidateFr['uniqueName'] === $enUnique) {
                    $fr = $candidateFr;
                    break;
                }
            }
            if ($fr === null) {
                $fr = $dataFr[0];
            }
        }

        $item = new Items();
        $item->setSearchName($searchName);
        $item->setUniqueName($en['uniqueName'] ?? null);
        $item->setNameEn($en['name'] ?? null);
        $item->setDescriptionEn($en['description'] ?? null);
        $item->setNameFr($fr['name'] ?? null);
        $item->setDescriptionFr($fr['description'] ?? null);

        // Champs supplémentaires sûrs à mapper (existant dans l'entité)
        $item->setType($en['type'] ?? null);
        $item->setTradable($en['tradable'] ?? false);
        $item->setCategory($en['category'] ?? null);
        $item->setProductCategory($en['productCategory'] ?? null);

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

                    // Détecter le mime type si possible
                    $mime = null;
                    if (function_exists('mime_content_type')) {
                        $mime = @mime_content_type($tmpPath) ?: null;
                    }

                    // Création d'un UploadedFile en mode test pour contourner les vérifs PHP upload
                    $uploaded = new UploadedFile(
                        $tmpPath,
                        basename($imageName),
                        $mime,
                        null,
                        null,
                        true
                    );

                    $item->setImageFile($uploaded);
                }
            } catch (\Throwable $e) {
                // ne pas bloquer si le téléchargement échoue
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
