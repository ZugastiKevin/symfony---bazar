<?php

namespace App\Controller;

use App\Dto\OrderFilter;
use App\Form\OrderFilterType;
use App\Entity\Items;
use App\Repository\ItemsRepository;
use App\Repository\PartsRepository;
use App\Repository\ShopItemsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class ItemsController extends AbstractController
{
    public function __construct(
        private ItemsRepository $itemsRepository,
        private TranslatorInterface $translator,
        private ShopItemsRepository $shopItemsRepository,
        private PartsRepository $partsRepository,
    ) {}

    #[Route('/', name: 'home')]
    public function index(Request $request): Response
    {
        // 1) On crée le DTO
        $filter = new OrderFilter();

        // 2) On crée le formulaire lié au DTO
        $form = $this->createForm(OrderFilterType::class, $filter);

        // 3) On bind la requête au formulaire
        $form->handleRequest($request);

        // 🔍 DEBUG : voir ce qui arrive dans la query
        // dd($request->query->all(), $filter);

        // 4) On passe le DTO au repo
        $orders = $this->shopItemsRepository->findByFilter($filter);

        $sellOrders = [];
        $buyOrders  = [];

        foreach ($orders as $order) {
            if ($order->isSellOrBuy() === true) {
                $sellOrders[] = $order;
            } else {
                $buyOrders[]  = $order;
            }
        }

        // 5) Requête HTMX ? On renvoie juste la liste
        if ($request->headers->get('HX-Request')) {
            return $this->render('home/_orders_list.html.twig', [
                'sellOrders' => $sellOrders,
                'buyOrders'  => $buyOrders,
            ]);
        }

        // 6) Sinon, page complète
        return $this->render('home/home.html.twig', [
            'filterForm' => $form->createView(),
            'sellOrders' => $sellOrders,
            'buyOrders'  => $buyOrders,
        ]);
    }

    #[Route('/item/{name}', name: 'item_show')]
    public function show(Request $request, string $name): Response
    {
        $language = $request->getLocale() ?? 'fr';

        $name = str_replace('-', '/', trim((string) $name));

        if ($name === '') {
            throw $this->createNotFoundException(
                $this->translator->trans('item.not_found', ['%name%' => $name])
            );
        }

        $candidates = array_unique([
            $name,
            '/'.$name,
            ltrim($name, '/'),
        ]);

        $entity = null;
        foreach ($candidates as $candidate) {
            $entity = $this->itemsRepository->findOneBy(['uniqueName' => $candidate]);
            if ($entity instanceof Items) {
                $name = $candidate;
                break;
            }
        }

        if (!$entity) {
            throw $this->createNotFoundException(
                $this->translator->trans('item.not_found', ['%name%' => $name])
            );
        }

        $label = $language === 'fr'
            ? $entity->getNameFR()
            : $entity->getNameEN();

        $description = $language === 'fr'
            ? $entity->getDescriptionFR()
            : $entity->getDescriptionEN();

        $children = [];
        $partsList = $this->partsRepository->findBy(['owner' => $entity]);

        foreach ($partsList as $parts) {
            foreach ($parts->getItems() as $child) {
                $children[$child->getId()] = $child;
            }
        }

        $children = array_values($children);

        $orders = $entity->getShop();

        $sellOrders = [];
        $buyOrders = [];

        foreach ($orders as $order) {
            if ($order->isSellOrBuy() === true) {
                $sellOrders[] = $order;
            } else {
                $buyOrders[] = $order;
            }
        }

        $item = [
            'name' => $label,
            'description' => $description,
            'entity' => $entity,
        ];

        return $this->render('warframe/item_show.html.twig', [
            'item' => $item,
            'children' => $children,
            'sellOrders'  => $sellOrders,
            'buyOrders'   => $buyOrders,
        ]);
    }
}
