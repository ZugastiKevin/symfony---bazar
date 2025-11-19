<?php

namespace App\Controller;

use App\Entity\SupportTicket;
use App\Form\SupportType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Attribute\Route;

final class SupportController extends AbstractController
{
    #[Route('/support', name: 'support')]
    public function index(
        Request $request,
        MailerInterface $mailer,
        EntityManagerInterface $em
    ): Response {
        $user = $this->getUser();

        $prefill = [
            'name'  => $user ? $user->getPseudo() : '',
            'email' => $user ? $user->getEmail() : '',
        ];

        $form = $this->createForm(SupportType::class, $prefill);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $data = $form->getData();

            $ticket = new SupportTicket();
            if ($user) {
                $ticket->setUser($user);
            }
            $ticket
                ->setName($data['name'])
                ->setEmail($data['email'])
                ->setCategory($data['category'])
                ->setMessage($data['message']);

            $em->persist($ticket);
            $em->flush();

            $email = (new Email())
                ->from('support@bazar-de-cetus.octohub.fr')
                ->to('support@bazar-de-cetus.octohub.fr')
                ->replyTo($data['email'])
                ->subject('Nouveau message de support')
                ->text(
                    "Pseudo : " . $data['name'] . "\n" .
                    "Email : " . $data['email'] . "\n" .
                    "Catégorie : " . $data['category'] . "\n\n" .
                    "Message :\n" . $data['message']
                );

            $mailer->send($email);

            $this->addFlash('success', 'Votre message a bien été envoyé. Nous avons enregistré votre demande.');

            return $this->redirectToRoute('support');
        }

        return $this->render('support/support.html.twig', [
            'supportForm' => $form->createView(),
        ]);
    }

    #[Route('/test-mail', name: 'test_mail')]
    public function testMail(MailerInterface $mailer): Response
    {
        try {
            $email = (new Email())
                ->from('support@bazar-de-cetus.octohub.fr')
                ->to('support@bazar-de-cetus.octohub.fr')
                ->subject('Test Symfony Mailer')
                ->text('Si tu lis ceci, ton mailer est bien configuré.');

            $mailer->send($email);

            return new Response('Email envoyé sans exception PHP.');
        } catch (\Throwable $e) {
            // Affiche clairement l’erreur côté navigateur
            return new Response('Erreur mailer : ' . $e->getMessage());
        }
    }
}
