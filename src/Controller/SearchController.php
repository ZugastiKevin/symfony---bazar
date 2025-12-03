<?php
// language: php
namespace App\Controller;

use App\Service\WarframeApiClient;
use App\Service\WarframeItemFilter;
use App\Dto\WarframeItemDto;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\ItemsRepository;
use Psr\Log\LoggerInterface;
use Symfony\Component\Routing\Annotation\Route;

class SearchController extends AbstractController
{
    private WarframeApiClient $warframeApi;
    private ItemsRepository $itemsRepository;
    private LoggerInterface $logger;
    private WarframeItemFilter $itemFilter;

    private EntityManagerInterface $entityManager;

    public function __construct(WarframeApiClient $warframeApi, ItemsRepository $itemsRepository, LoggerInterface $logger, WarframeItemFilter $itemFilter)
    {
        $this->warframeApi = $warframeApi;
        $this->itemsRepository = $itemsRepository;
        $this->logger = $logger;
        $this->itemFilter = $itemFilter;
    }

    #[Route('/search', name: 'search', methods: ['GET'])]
    public function search(Request $request): Response
    {
        $searchQuery = (string) $request->query->get('query', '');
        $language = (string) $request->query->get('lang', 'fr');
        $filterCategory = $request->query->get('category');
        $filterOnlyPrime = $request->query->get('isPrime');

        if (trim($searchQuery) === '') {
            return $this->render('home/_search_results.html.twig', ['results' => []]);
        }

        $finalResults = [];

//        if (isset($this->cache[$searchQuery])) {
//            return $this->cache[$searchQuery];
//        }
        try {
            $rawItems = $this->warframeApi->searchItem($searchQuery, $language);

            if (!is_array($rawItems) || empty($rawItems)) {
                $this->logger->info('Warframe API returned empty result', ['searchQuery' => $searchQuery, 'language' => $language]);
                $rawItems = [];
            }

            // Transformer en DTO
            $dtoItems = [];
            foreach ($rawItems as $rawItem) {
                $dtoItems[] = WarframeItemDto::fromArray((array) $rawItem);
            }

            // Interpréter le param tradable (peut venir en string '1' ou 'true')
            $onlyPrime = null;
            if ($filterOnlyPrime !== null) {
                $onlyPrime = in_array(strtolower((string) $filterOnlyPrime), ['true'], true);
            }

            // Filtrer par catégorie et prime
            $filteredDtoItems = $this->itemFilter->filterByCategoryAndPrime($dtoItems, $filterCategory ?? null, $onlyPrime);

            // Convertir en tableau simple pour le template
            foreach ($filteredDtoItems as $dtoItem) {
                $finalResults[] = $dtoItem->toArray();
            }

        } catch (\Throwable $caughtError) {
            $this->logger->error('Erreur lors de l\'appel à l\'API Warframe', [
                'searchQuery' => $searchQuery,
                'language' => $language,
                'message' => $caughtError->getMessage(),
            ]);
        }

        return $this->render('home/_search_results.html.twig', [
            'results' => $finalResults,
        ]);
    }
}
