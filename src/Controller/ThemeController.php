<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ThemeController extends AbstractController
{
    #[Route('/theme/{theme}', name: 'switch_theme', requirements: ['_locale' => 'fr|en'])]
    public function switchTheme(string $theme, Request $request): RedirectResponse
    {
        // Thèmes autorisés
        $allowedThemes = ['cetus', 'deimos'];

        $theme = strtolower($theme);
        if (!in_array($theme, $allowedThemes, true)) {
            throw $this->createNotFoundException('Unknown theme');
        }

        // On enregistre le thème en session
        $request->getSession()->set('theme', $theme);

        // On essaie de revenir sur la page précédente
        $referer = $request->headers->get('referer');
        if ($referer) {
            return new RedirectResponse($referer);
        }

        // fallback : retour à la home dans la bonne locale
        return $this->redirectToRoute('home', [
            '_locale' => $request->getLocale(),
        ]);
    }
}