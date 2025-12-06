<?php

namespace App\Service;

use App\Repository\ItemsRepository;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Request;

class SearchService
{
    private WarframeApiClient $api;
    private ItemsRepository $repo;
    private CategoryFilter $categoryFilter;
    private ResultNormalizer $normalizer;
    private LoggerInterface $logger;

    public function __construct(WarframeApiClient $api, ItemsRepository $repo, CategoryFilter $categoryFilter, ResultNormalizer $normalizer, LoggerInterface $logger)
    {
        $this->api = $api;
        $this->repo = $repo;
        $this->categoryFilter = $categoryFilter;
        $this->normalizer = $normalizer;
        $this->logger = $logger;
    }

    /**
     * Retourne les résultats normalisés prêts pour le rendu.
     *
     * @return array
     */
    public function search(string $query, Request $request, int $maxResults = 100000, string $language = 'fr'): array
    {
        $rawResults = [];
        $fromApi = false;
        $len = mb_strlen($query, 'UTF-8');

        // On garde une référence aux entités DB si on en a besoin plus tard
        $entities = [];

        // 1-2 chars -> uniquement BDD -> sinon out of memory
        if ($len <= 2) {
            $entities = $this->repo->findBySearchTerm($query, $maxResults);
            $rawResults = $this->entitiesToArrays($entities, $language);
            $fromApi = false;
        } else {
            // Tentative BDD
            $entities = $this->repo->findBySearchTerm($query, $maxResults);
            if (!empty($entities)) {
                $rawResults = $this->entitiesToArrays($entities, $language);
                $fromApi = false;
            } else {
                // si rien BDD on appel l'API Warframe
                try {
                    $rawResults = $this->api->searchItem($query, $language);
                    $fromApi = true;
                } catch (\Throwable $e) {
                    $this->logger->error('WarframeApiClient error', [
                        'q' => $query,
                        'exception' => $e->getMessage(),
                    ]);
                    $fromApi = false;
                }
            }
        }

        if (!is_array($rawResults)) {
            $rawResults = [];
        }

        // === FILTRAGE DES CATEGORIES (toujours après avoir obtenu rawResults) ===
        $excluded = $this->categoryFilter->getExcludedCategoriesFromRequest($request);
        $filtered = $this->categoryFilter->filter($rawResults, $excluded);

        // === CAS 1 : on vient de l'API "classique" (DB vide au début) ===
        // => on upsert seulement le subset filtré (comme dans ta première version)
        if (is_array($filtered) && !empty($filtered) && $fromApi) {
            try {
                $this->repo->upsertItemsFromApi($filtered, $language);
            } catch (\Throwable $e) {
                $this->logger->error('upsertItemsFromApi error', [
                    'q' => $query,
                    'exception' => $e->getMessage(),
                ]);
            }
        }

        // === CAS 2 : on vient de la BDD, mais il manque la langue demandée ===
        // -> ça, on le gère APRES filtrage, et uniquement pour les résultats filtrés
        if (!$fromApi && $len > 2 && !empty($filtered)) {
            // Récupère les uniqueName des résultats filtrés
            $uniqueNames = array_column($filtered, 'uniqueName');
            $uniqueNames = array_filter($uniqueNames);

            if (!empty($uniqueNames)) {
                // On récupère les entités correspondantes
                $entitiesForFiltered = $this->repo->findBy(['uniqueName' => $uniqueNames]);

                $needsApiForLang = false;
                foreach ($entitiesForFiltered as $it) {
                    if ($language === 'fr') {
                        if (method_exists($it, 'getNameFR') && $it->getNameFR() === null) {
                            $needsApiForLang = true;
                            break;
                        }
                    } else { // 'en'
                        if (method_exists($it, 'getNameEN') && $it->getNameEN() === null) {
                            $needsApiForLang = true;
                            break;
                        }
                    }
                }

                if ($needsApiForLang) {
                    try {
                        // On récupère la version de l'API dans la bonne langue
                        $apiResults = $this->api->searchItem($query, $language);

                        if (is_array($apiResults)) {
                            // ⚠️ on filtre AVANT d'upsert, comme tu le veux
                            $apiFiltered = $this->categoryFilter->filter($apiResults, $excluded);
                            if (!empty($apiFiltered)) {
                                $this->repo->upsertItemsFromApi($apiFiltered, $language);
                            }
                        }

                        // On recharge la BDD et on reconstruit les résultats propres
                        $entities = $this->repo->findBySearchTerm($query, $maxResults);
                        $rawResults = $this->entitiesToArrays($entities, $language);
                        $filtered = $this->categoryFilter->filter($rawResults, $excluded);

                    } catch (\Throwable $e) {
                        $this->logger->error('WarframeApiClient error (lang update)', [
                            'q' => $query,
                            'exception' => $e->getMessage(),
                        ]);
                    }
                }
            }
        }

        return $this->normalizer->normalizeCollection($filtered, $maxResults);
    }

    private function entitiesToArrays(array $entities, string $language): array
    {
        return array_map(function ($it) use ($language) {

            $name = $language === 'fr'
                ? ($it->getNameFR() ?? $it->getNameEN())
                : ($it->getNameEN() ?? $it->getNameFR());

            $description = $language === 'fr'
                ? ($it->getDescriptionFR() ?? $it->getDescriptionEN())
                : ($it->getDescriptionEN() ?? $it->getDescriptionFR());

            return [
                'name'        => $name,
                'description' => $description,
                'uniqueName'  => $it->getUniqueName(),
                'category'    => $it->getCategory()?->getName(),
                'isPrime'     => $it->isPrime(),
                'imageName'   => $it->getImageName(),
                'wikiaUrl'    => $it->getWikiaUrl(),
                'type'        => $it->getType(),
                'ducats'        => $it->getDucats(),
            ];
        }, $entities);
    }
}