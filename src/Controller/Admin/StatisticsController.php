<?php

namespace App\Controller\Admin;

use App\Repository\SupportTicketRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\HttpFoundation\Response;

#[IsGranted('ROLE_ADMIN')]
class StatisticsController extends AbstractController
{
    #[Route('/admin/tickets/statistics', name: 'admin_tickets_statistics')]
    public function tickets(SupportTicketRepository $ticketRepository): Response
    {
        // Totaux par statut
        $total       = $ticketRepository->count([]);
        $open        = $ticketRepository->count(['status' => 'open']);
        $inProgress  = $ticketRepository->count(['status' => 'in_progress']);
        $closed      = $ticketRepository->count(['status' => 'closed']);

        // Répartition par catégorie
        $categories = $ticketRepository->createQueryBuilder('t')
            ->select('t.category AS category, COUNT(t.id) AS total')
            ->groupBy('t.category')
            ->getQuery()
            ->getResult();

        // Tickets créés sur les 7 derniers jours
        $date7Days = new \DateTimeImmutable('-7 days');

        $last7Days = $ticketRepository->createQueryBuilder('t')
            ->select('COUNT(t.id)')
            ->where('t.createdAt >= :date')
            ->setParameter('date', $date7Days)
            ->getQuery()
            ->getSingleScalarResult();

        return $this->render('admin/statistics/tickets.html.twig', [
            'total'      => $total,
            'open'       => $open,
            'inProgress' => $inProgress,
            'closed'     => $closed,
            'categories' => $categories,
            'last7Days'  => $last7Days,
            'date7Days'  => $date7Days,
        ]);
    }

    #[Route('/admin/users/statistics', name: 'admin_users_statistics')]
    public function users(UserRepository $userRepository): Response
    {
        $totalUsers = $userRepository->count([]);

        // Utilisateurs créés sur les 7 derniers jours
        $date7Days = new \DateTimeImmutable('-7 days');

        $newLast7Days = $userRepository->createQueryBuilder('u')
            ->select('COUNT(u.id)')
            ->where('u.created_at >= :date')
            ->setParameter('date', $date7Days)
            ->getQuery()
            ->getSingleScalarResult();

        // Répartition simple admin / non-admin
        $adminCount = $userRepository->createQueryBuilder('u')
            ->select('COUNT(u.id)')
            ->where('u.roles LIKE :role')
            ->setParameter('role', '%"ROLE_ADMIN"%')
            ->getQuery()
            ->getSingleScalarResult();

        $userCount = $totalUsers - $adminCount;

        return $this->render('admin/statistics/users.html.twig', [
            'totalUsers'    => $totalUsers,
            'newLast7Days'  => $newLast7Days,
            'date7Days'     => $date7Days,
            'adminCount'    => $adminCount,
            'userCount'     => $userCount,
        ]);
    }
}