<?php
// language: php
namespace App\Controller;

use App\Service\WarframeApiClient;
use App\Service\WarframeApiCache;
use App\Service\CategoryFilter;
use App\Repository\ItemsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Psr\Log\LoggerInterface;
use App\Entity\Items;
use Symfony\Component\HttpFoundation\JsonResponse;

class SearchController extends AbstractController
{
    private WarframeApiCache $warframeApiCache;
    private CategoryFilter $categoryFilter;
    private ItemsRepository $itemsRepository;
    private LoggerInterface $logger;

    public function __construct(WarframeApiCache $warframeApiCache, CategoryFilter $categoryFilter, ItemsRepository $itemsRepository, LoggerInterface $logger)
    {
        $this->warframeApiCache = $warframeApiCache;
        $this->categoryFilter = $categoryFilter;
        $this->itemsRepository = $itemsRepository;
        $this->logger = $logger;
    }

    #[Route('/search', name: 'search', methods: ['GET'])]
    public function search(Request $request): Response
    {
        $rawQuery = $request->query->get('q', $request->query->get('term', ''));
        $query = preg_replace('/\s+/u', ' ', trim($rawQuery));

        if ($query === '') {
            return new JsonResponse(['results' => [], 'error' => 'empty_query'], Response::HTTP_BAD_REQUEST);
        }

        // Limite maximale de résultats
        $maxResults = 1000;

        // Détermine la langue locale de la requête
        $language = $request->getLocale() ?? 'fr';

        // TTL du cache en secondes
        $cacheTtl = $request->query->get('cache_ttl', 300);

        try {
            $rawResults = [];

            // Si le query est court (1 ou 2 caractères) -> seulement BDD si non out of memory
            $len = mb_strlen($query, 'UTF-8');

            if ($len <= 2) {
                $entities = $this->itemsRepository->findBySearchTerm($query, $maxResults);

                if (!empty($entities)) {
                    $rawResults = array_map(function (Items $it) use ($language) {
                        $name = null;
                        if ($language === 'fr') {
                            $name = $it->getNameFR();
                        } else {
                            $name = $it->getNameEN();
                        }
                        return [
                            'name' => $name,
                        ];
                    }, $entities);
                } else {
                    $rawResults = [];
                }
            } else {
                // 1) tenter lire depuis le cache (sans déclencher la récupération API)
                $cached = $this->warframeApiCache->getFromCache($query, $language);

                if ($cached !== null) {
                    $rawResults = $cached;
                } else {
                    // 2) rechercher en base (on passe la limite)
                    $entities = $this->itemsRepository->findBySearchTerm($query, $maxResults);

                    if (!empty($entities)) {
                        // Convertir les entités Items en tableaux au format attendu (similaire à l'API Warframe)
                        $rawResults = array_map(function (Items $it) use ($language) {
                            $name = null;

                            if ($language === 'fr') {
                                $name = $it->getNameFR();
                            } else {
                                $name = $it->getNameEN();
                            }

                            return [
                                'name' => $name,
                            ];
                        }, $entities);
                    } else {
                        // 3) si rien en BDD, appeler l'API (qui mettra en cache via WarframeApiCache)
                        $rawResults = $this->warframeApiCache->searchItem($query, $language, $cacheTtl);
                    }
                }
            }

            // Appliquer la limite globale aux résultats bruts (cache/API)
            if (is_array($rawResults)) {
                $rawResults = array_slice(array_values($rawResults), 0, $maxResults);
            } else {
                $rawResults = [];
            }

            // Définir les catégories à exclure (paramètre GET 'exclude' séparé par des virgules)
            $excludedCategories = $this->categoryFilter->getExcludedCategoriesFromRequest($request);

            // Filtrer les résultats via le service CategoryFilter
            $filtered = $this->categoryFilter->filter(is_array($rawResults) ? $rawResults : [], $excludedCategories);

            // Normalise les résultats filtrés pour ne renvoyer que les champs utiles au frontend
            $normalized = array_map(function ($item) {
                return [
                    'name' => $item['name'] ?? null,
                ];
            }, $filtered);

            // S'assurer de ne renvoyer que jusqu'à $maxResults après filtrage (au cas où)
            $normalized = array_slice(array_values($normalized), 0, $maxResults);

            return $this->render('home/_search_results.html.twig', [
                'results' => array_values($normalized),
            ]);

        } catch (\Throwable $e) {
            $this->logger->error('SearchController error', ['query' => $query, 'exception' => $e->getMessage()]);
            return new JsonResponse(['results' => [], 'error' => 'internal_error'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
