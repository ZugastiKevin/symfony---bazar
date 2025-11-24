<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    // user by id
    #[Route('/user/{id}', name: 'user')]
    public function user(User $user): Response
    {
        return $this->render('security/user.html.twig', [
            'user' => $user,
        ]);
    }

    // create or update user
    #[Route('/update_user/{id}', name: 'update_user')]
    #[Route('/create_user', name: 'create_user')]
    public function createUser(?User $user, Request $request, UserRepository $repository, MailerInterface $mailer, EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordEncoder): Response
    {
        $currentUser = $this->getUser();

        if ($user && $user !== $currentUser) {
            return $this->redirectToRoute('home');
        }

        if (!$user) {
            $user = new User;
        }

        $form = $this->createForm(UserType::class, $user, [
            'is_edit' => $user->getId() !== null,
        ]);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $plainPassword = $form->get('plainPassword')->getData();
            if (!$user->getId()) {
                $exist = $repository->findOneBy(['email' => $user->getEmail()]);
                if ($exist) {
                    $this->addFlash('error', 'Un compte avec cet email existe déjà.');
                    return $this->redirectToRoute('create_user');
                }

                $user->setStatus('Offline');
                $user->setRoles(['ROLE_USER']);
                $user->setCreatedAt(new \DateTimeImmutable());
                $user->setPassword(
                    $passwordEncoder->hashPassword($user, $plainPassword)
                );

                $email = (new Email())
                    ->from('support@bazar-de-cetus.octohub.fr')
                    ->to($user->getEmail()) // Email de l'utilisateur
                    ->subject('Bienvenue sur Bazar de Cetus !')
                    ->html(
                        "<h2>Bienvenue " . htmlspecialchars($user->getPseudo()) . " !</h2>" .
                        "<p>Votre compte a été créé avec succès.</p>" .
                        "<p><strong>Pseudo :</strong> " . htmlspecialchars($user->getPseudo()) . "</p>" .
                        "<p><strong>Email :</strong> " . htmlspecialchars($user->getEmail()) . "</p>" .
                        "<p>Vous pouvez maintenant vous connecter et profiter de nos services.</p>" .
                        "<p>À bientôt sur Bazar de Cetus !</p>"
                    );

                try {
                    $mailer->send($email);
                    $this->addFlash('success', 'Votre compte a été créé avec succès ! Un email de confirmation vous a été envoyé.');
                } catch (\Exception $e) {
                    // Le compte est créé même si l'email échoue
                    $this->addFlash('warning', 'Votre compte a été créé, mais l\'email de confirmation n\'a pas pu être envoyé.');
                }

            }

            if ($plainPassword) {
                $user->setPassword(
                    $passwordEncoder->hashPassword($user, $plainPassword)
                );
            }

            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('home');
        }

        return $this->render('security/createUpdateUser.html.twig', [
            'userCreateForm' => $form->createView(),
            'userUpdateForm' => $user->getId() !== null,
        ]);
    }

    // delete user
    #[Route('/delete_user/{id}', name: 'delete_user')]
    public function deleteUser(User $user, Request $request, EntityManagerInterface $entityManager)
    {
        if($this->isCsrfTokenValid("SUP". $user->getId(),$request->get('_token'))){
            $entityManager->remove($user);
            $entityManager->flush();
            return $this->redirectToRoute('home');
        }
    }

    // login
    #[Route(path: '/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();

        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    // logout
    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
