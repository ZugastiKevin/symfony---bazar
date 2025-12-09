<?php

namespace App\Controller;

use App\Service\SearchService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Response;

class SearchController extends AbstractController
{
    private SearchService $searchService;

    public function __construct(SearchService $searchService)
    {
        $this->searchService = $searchService;
    }

    #[Route('/search', name: 'search', methods: ['GET'])]
    public function search(Request $request): Response
    {
        $rawQuery = $request->query->get('q', $request->query->get('term', ''));
        $query = preg_replace('/\s+/u', ' ', trim((string)$rawQuery));

        if ($query === '') {
            return $this->json(['results' => [], 'error' => 'empty_query'], Response::HTTP_BAD_REQUEST);
        }

        try {
            $language = $request->getLocale() ?? 'fr';
            $results = $this->searchService->search($query, $request, 100, $language);

            return $this->render('partials/_search_results.html.twig', [
                'results' => $results,
            ]);
        } catch (\Throwable $e) {
            return $this->json(['results' => [], 'error' => 'internal_error'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
