<?php

namespace App\Controller;

use App\Entity\Items;
use App\Entity\Shop;
use App\Entity\ShopItems;
use App\Form\ShopItemsType;
use App\Repository\ShopRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ShopItemsController extends AbstractController
{
    #[Route('/_fragment/place-order-panel', name: 'place_order_panel', methods: ['GET'])]
    public function panel(Security $security): Response
    {
        // Si pas connecté → on ne rend rien (évite les erreurs)
        if (!$security->getUser()) {
            return new Response('', 204); // No Content
        }

        $shopItem = new ShopItems();
        $form = $this->createForm(ShopItemsType::class, $shopItem);

        return $this->render('partials/_place_order.html.twig', [
            'formOrder' => $form->createView(),
        ]);
    }

    #[Route('/shop/place-order', name: 'shop_place_order', methods: ['POST'])]
    public function placeOrder(
        Request $request,
        Items $item,
        Security $security,
        ShopRepository $shopRepository,
        EntityManagerInterface $em
    ): Response {
        $user = $security->getUser();

        if (!$user) {
            throw $this->createAccessDeniedException('Vous devez être connecté pour placer un ordre.');
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

        $form = $this->createForm(ShopItemsType::class, $shopItem);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Lien ManyToMany Items <-> ShopItems
            $shopItem->addItem($item);

            $em->persist($shopItem);
            $em->flush();

            // Si tu veux gérer en HTMX/AJAX, tu peux retourner juste un fragment
            // ici je fais simple : redirection vers la page courante ou une page "shop"
            $this->addFlash('success', 'Ordre enregistré avec succès.');

            return $this->redirectToRoute('home');
        }

        // Si tu veux rendre le formulaire dans un template (fallback ou popup)
        return $this->render('partials/_place_order.html.twig', [
            'formOrder' => $form->createView(),
        ]);
    }
}
