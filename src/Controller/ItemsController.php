<?php

namespace App\Controller;

use App\Entity\Items;
use App\Repository\ItemsRepository;
use App\Repository\PartsRepository;
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
        private PartsRepository $partsRepository,
    ) {}

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

        $item = [
            'name' => $label,
            'description' => $description,
            'entity' => $entity,
        ];

        return $this->render('warframe/item_show.html.twig', [
            'item' => $item,
            'children' => $children,
            'orders'   => $orders,
        ]);
    }
}
