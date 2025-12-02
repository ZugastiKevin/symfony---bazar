<?php

namespace App\Controller;

use App\Service\ItemsProvider;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ItemsController extends AbstractController
{
    #[Route('/item/{name}', name: 'item_show')]
    public function show(string $name, ItemsProvider $provider): Response
    {
        $item = $provider->getByName($name);

        if (!$item) {
            throw $this->createNotFoundException(sprintf('Aucun item trouvé pour "%s".', $name));
        }

        return $this->render('warframe/item_show.html.twig', [
            'item' => $item,
        ]);
    }
}
