<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\SupportTicket;
use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminDashboard;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;

#[IsGranted('ROLE_ADMIN')]
#[AdminDashboard(routePath: '/admin', routeName: 'admin')]
class DashboardController extends AbstractDashboardController
{
    public function index(): Response
    {
        return $this->render('admin/index.html.twig', [
            'user' => $this->getUser(),
        ]);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
        ->setTitle(
            '<a href="' . $this->generateUrl('home') . '">Symfony Bazar</a>'
        );
    }

    public function configureMenuItems(): iterable
    {
        // Dashboard principal
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');

        // User
        yield MenuItem::linkToCrud('User', 'fa fa-users', user::class);

        // Tickets support
        yield MenuItem::linkToCrud('Tickets support', 'fa fa-life-ring', SupportTicket::class);

        // Sous-menu « Statistiques »
        yield MenuItem::subMenu('Statistiques', 'fa fa-chart-bar')->setSubItems([
            MenuItem::linkToRoute('Tickets', 'fa fa-life-ring', 'admin_tickets_statistics'),
            MenuItem::linkToRoute('Utilisateurs', 'fa fa-users', 'admin_users_statistics'),
        ]);
    }
}