<?php

namespace App\Controller;

use App\Entity\Items;
use App\Entity\Shop;
use App\Entity\ShopItems;
use App\Form\ShopItemsType;
use App\Repository\ItemsRepository;
use App\Repository\ShopRepository;
use App\Service\UserStatusService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

final class ShopItemsController extends AbstractController
{
    public function __construct(
        private TranslatorInterface $translator
    ) {}

    #[Route('/_fragment/place-order-panel', name: 'place_order_panel', methods: ['GET'])]
    public function panel(Security $security): Response
    {
        if (!$security->getUser()) {
            return new Response('', 204);
        }

        $user = $security->getUser();
        $shopItem = new ShopItems();

        $currentStatusCode = $user->getStatus()?->getCode() ?? 0;

        $form = $this->createForm(ShopItemsType::class, $shopItem, [
            'user_status_code' => $currentStatusCode,
            'fusion_limit'     => 0,
        ]);

        return $this->render('partials/_place_order.html.twig', [
            'formOrder' => $form->createView(),
        ]);
    }

    #[Route('/shop/place-order', name: 'shop_place_order', methods: ['POST'])]
    public function placeOrder(
        Request $request,
        Security $security,
        ShopRepository $shopRepository,
        ItemsRepository $itemsRepository,
        EntityManagerInterface $em,
        UserStatusService $userStatusService,
    ): Response {
        $user = $security->getUser();

        if (!$user) {
            throw $this->createAccessDeniedException(
                $this->translator->trans('shop.place_order.must_be_logged_in')
            );
        }

        $uniqueName = $request->request->get('uniqueName');
        if (!$uniqueName) {
            $this->addFlash(
                'error',
                $this->translator->trans('shop.place_order.no_item_selected')
            );
            return $this->redirectToRoute('home');
        }

        $item = $itemsRepository->findOneBy(['uniqueName' => $uniqueName]);
        if (!$item) {
            $this->addFlash(
                'error',
                $this->translator->trans('shop.place_order.item_not_found')
            );
            return $this->redirectToRoute('home');
        }

        // Récupère ou crée le Shop de l'utilisateur
        $shop = $shopRepository->findOneBy(['user' => $user]);
        if (!$shop) {
            $shop = new Shop();
            $shop->setUser($user);
            $em->persist($shop);
        }

        $shopItem = new ShopItems();
        $shopItem->setShop($shop);
        $shopItem->setCreatedAt(new \DateTimeImmutable());

        $currentStatusCode = $user->getStatus()?->getCode() ?? 0;

        $isMod = false;
        $fusionLimit = 0;

        if ($item->getCategory() && strtolower($item->getCategory()->getName()) === 'mods') {
            $isMod = true;
            $fusionLimit = $item->getFusionLimit() ?? 0;
        }

        $form = $this->createForm(ShopItemsType::class, $shopItem, [
            'user_status_code' => $currentStatusCode,
            'fusion_limit'     => $fusionLimit,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $selectedCode = (int) $form->get('initialVisibility')->getData();

            if ($selectedCode !== $currentStatusCode) {
                $userStatusService->setUserStatusByCode($user, $selectedCode, false);
            }

            if (!$isMod) {
                $shopItem->setRank(0);
            }

            $shopItem->setStatus($user->getStatus());
            $shopItem->addItem($item);

            $em->persist($shopItem);
            $em->flush();

            $this->addFlash(
                'success',
                $this->translator->trans('shop.place_order.saved_success')
            );

            return $this->redirectToRoute('home');
        }

        return $this->render('partials/_place_order.html.twig', [
            'formOrder' => $form->createView(),
        ]);
    }
}
