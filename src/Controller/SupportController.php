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

        // Créer le ticket avec pré-remplissage si utilisateur connecté
        $ticket = new SupportTicket();

        if ($user) {
            // Utilisateur connecté : on lie le ticket et on pré-remplit
            $ticket->setUser($user);
            $ticket->setName($user->getPseudo());
            $ticket->setEmail($user->getEmail());
        }

        $form = $this->createForm(SupportType::class, $ticket);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var SupportTicket $ticket */
            $ticket = $form->getData();

            // Si l'utilisateur est connecté, on s'assure que le lien est bien maintenu
            // (au cas où quelqu'un modifierait les valeurs du formulaire)
            if ($user) {
                $ticket->setUser($user);
            }

            // Gérer l'upload du fichier
            $imageFile = $form->get('imageFile')->getData();
            if ($imageFile) {
                $ticket->setImageFile($imageFile);
            }

            $em->persist($ticket);
            $em->flush();

            // Envoi de l'email
            $email = (new Email())
                ->from('support@bazar-de-cetus.octohub.fr')
                ->to('support@bazar-de-cetus.octohub.fr')
                ->replyTo($ticket->getEmail())
                ->subject('Nouveau message de support')
                ->text(
                    "Pseudo : " . $ticket->getName() . "\n" .
                    "Email : " . $ticket->getEmail() . "\n" .
                    "Catégorie : " . $ticket->getCategory() . "\n" .
                    ($user ? "Utilisateur ID : " . $user->getId() . "\n" : "Utilisateur : Non connecté\n") .
                    "\nMessage :\n" . $ticket->getMessage()
                );

            $mailer->send($email);

            $this->addFlash('success', 'Votre message a bien été envoyé. Nous avons enregistré votre demande.');

            return $this->redirectToRoute('support');
        }

        return $this->render('support/support.html.twig', [
            'supportForm' => $form->createView(),
        ]);
    }
}
