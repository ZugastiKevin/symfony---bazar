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

        $entities = [];

        // 1-2 chars -> uniquement BDD -> sinon out of memory
        if ($len <= 2) {
            $entities = $this->repo->findBySearchTerm($query, $maxResults);
            $rawResults = $this->entitiesToArrays($entities, $language);
            $fromApi = false;
        } else {
            // +3 chars on test en BDD
            $entities = $this->repo->findBySearchTerm($query, $maxResults);
            if (!empty($entities)) {
                $rawResults = $this->entitiesToArrays($entities, $language);
                $fromApi = false;
            } else {
                // si rien BDD API Warframe
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

        $excluded = $this->categoryFilter->getExcludedCategoriesFromRequest($request);
        $filtered = $this->categoryFilter->filter($rawResults, $excluded);

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

        if (!$fromApi && $len > 2 && !empty($filtered)) {
            $uniqueNames = array_column($filtered, 'uniqueName');
            $uniqueNames = array_filter($uniqueNames);

            if (!empty($uniqueNames)) {
                $entitiesForFiltered = $this->repo->findBy(['uniqueName' => $uniqueNames]);

                $needsApiForLang = false;
                foreach ($entitiesForFiltered as $it) {
                    if ($language === 'fr') {
                        if (method_exists($it, 'getNameFR') && $it->getNameFR() === null) {
                            $needsApiForLang = true;
                            break;
                        }
                    } else {
                        if (method_exists($it, 'getNameEN') && $it->getNameEN() === null) {
                            $needsApiForLang = true;
                            break;
                        }
                    }
                }

                if ($needsApiForLang) {
                    try {
                        $apiResults = $this->api->searchItem($query, $language);

                        if (is_array($apiResults)) {
                            $apiFiltered = $this->categoryFilter->filter($apiResults, $excluded);
                            if (!empty($apiFiltered)) {
                                $this->repo->upsertItemsFromApi($apiFiltered, $language);
                            }
                        }

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
                'fusionLimit' => $it->getFusionLimit(),
                'ducats'      => $it->getDucats(),
            ];
        }, $entities);
    }
}