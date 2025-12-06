<?php

namespace App\Controller;

use App\Entity\Items;
use App\Repository\ItemsRepository;
use App\Service\WarframeApiClient;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ItemsController extends AbstractController
{
    public function __construct(
        private ItemsRepository $itemsRepository,
        private WarframeApiClient $warframeApiClient,
        private LoggerInterface $logger
    ) {}

    #[Route('/item/{name}', name: 'item_show')]
    public function show(Request $request, string $name): Response
    {
        $name = trim((string) $name);
        $language = $request->getLocale() ?? 'fr';

        if ($name === '') {
            throw $this->createNotFoundException(sprintf('Aucun item trouvé pour "%s".', $name));
        }

        // 1) Cherche en base (utilise findBySearchTerm pour support partial / insensible)
        $entities = $this->itemsRepository->findBySearchTerm($name, 1);

        if (!empty($entities) && $entities[0] instanceof Items) {
            $entity = $entities[0];

            $label = null;
            if ($language === 'fr') {
                $label = $entity->getNameFR();
            } else {
                $label = $entity->getNameEN();
            }

            $item = [
                'name' => $label,
                'entity' => $entity,
            ];

            return $this->render('warframe/item_show.html.twig', [
                'item' => $item,
            ]);
        }

        // 2) Sinon, tenter via l'API
        try {
            $results = $this->warframeApiClient->searchItem($name, $language);
        } catch (\Throwable $e) {
            $this->logger->error('Erreur récupération API pour item', ['name' => $name, 'exception' => $e->getMessage()]);
            $results = [];
        }

        if (!empty($results) && is_array($results)) {
            $remoteItem = $results[0];
            return $this->render('warframe/item_show.html.twig', [
                'item' => $remoteItem,
            ]);
        }

        throw $this->createNotFoundException(sprintf('Aucun item trouvé pour "%s".', $name));
    }
}
