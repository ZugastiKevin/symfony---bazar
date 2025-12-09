<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Shop;
use App\Form\UserType;
use App\Repository\ShopItemsRepository;
use App\Repository\StatusRepository;
use App\Repository\UserRepository;
use App\Form\ForgotPasswordRequestFormType;
use App\Form\ResetPasswordFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class SecurityController extends AbstractController
{
    public function __construct(
        private ShopItemsRepository $shopItemsRepository,
        private TranslatorInterface $translator
    ) {}

    // user by id
    #[Route('/user/{id}', name: 'user')]
    #[IsGranted('ROLE_USER')]
    public function user(User $user, Request $request): Response
    {
        $language = $request->getLocale() ?? 'fr';

        $orders = $this->shopItemsRepository->findAll();

        $sellOrders = [];
        $buyOrders  = [];

        foreach ($orders as $order) {
            if ($order->isSellOrBuy() === true) {
                $sellOrders[] = $order;
            } else {
                $buyOrders[]  = $order;
            }
        }
        return $this->render('security/user.html.twig', [
            'user'       => $user,
            'sellOrders' => $sellOrders,
            'buyOrders'  => $buyOrders,
        ]);
    }

    // create or update user
    #[Route('/update_user/{id}', name: 'update_user')]
    #[Route('/create_user', name: 'create_user')]
    public function createUser(?User $user, Request $request, UserRepository $repository, MailerInterface $mailer, EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordEncoder, StatusRepository $statusRepository): Response
    {
        $currentUser = $this->getUser();

        if ($user && $user->getId() !== null) {
            if (!$currentUser) {
                return $this->redirectToRoute('app_login');
            }

            if ($user !== $currentUser) {
                return $this->redirectToRoute('home');
            }
        } else {
            $user = new User();

            if ($currentUser) {
                return $this->redirectToRoute('home');
            }
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
                    $this->addFlash('error', $this->translator->trans('flash.account_email_exists'));
                    return $this->redirectToRoute('create_user');
                }

                $invisibleStatus = $statusRepository->findByCode(0);
                $user->setStatus($invisibleStatus);

                $user->setRoles(['ROLE_USER']);
                $user->setCreatedAt(new \DateTimeImmutable());

                $shop = new Shop();
                $user->setShop($shop);

                // Génération du token de vérification
                $token = bin2hex(random_bytes(32));
                $user->setVerificationToken($token);
                $user->setVerificationTokenExpiresAt(
                    (new \DateTimeImmutable())->modify('+24 hours')
                );
                $user->setIsVerified(false);

                // Génération du lien absolu
                $verificationLink = $this->generateUrl(
                    'verify_account',
                    ['token' => $token],
                    UrlGeneratorInterface::ABSOLUTE_URL
                );

                $email = (new Email())
                    ->from('support@bazar-de-cetus.octohub.fr')
                    ->to($user->getEmail())
                    ->subject('Bienvenue sur Bazar de Cetus !')
                    ->html(
                        "<h2>Bienvenue " . htmlspecialchars($user->getPseudo()) . " !</h2>" .
                        "<p>Votre compte a été créé avec succès.</p>" .
                        "<p><strong>Pseudo :</strong> " . htmlspecialchars($user->getPseudo()) . "</p>" .
                        "<p><strong>Email :</strong> " . htmlspecialchars($user->getEmail()) . "</p>" .
                        "<p>Avant de pouvoir vous connecter, merci de confirmer votre adresse email en cliquant sur le lien ci-dessous :</p>" .
                        "<p><a href=\"" . htmlspecialchars($verificationLink) . "\">Activer mon compte</a></p>" .
                        "<p>Ce lien est valable pendant 24 heures.</p>" .
                        "<p>À bientôt sur Bazar de Cetus !</p>"
                    );

                try {
                    $mailer->send($email);
                    $this->addFlash('success', $this->translator->trans('flash.account_created'));
                } catch (\Exception $e) {
                    // Le compte est créé même si l'email échoue
                    $this->addFlash('warning', $this->translator->trans('flash.account_created_but_email_failed'));
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

    // verify account
    #[Route('/verify_account/{token}', name: 'verify_account')]
    public function verifyAccount(
        string $token,
        UserRepository $userRepository,
        EntityManagerInterface $entityManager
    ): Response {
        $user = $userRepository->findOneBy(['verificationToken' => $token]);

        if (!$user) {
            $this->addFlash('error', $this->translator->trans('flash.verify_invalid'));
            return $this->redirectToRoute('home');
        }

        if ($user->getVerificationTokenExpiresAt() !== null &&
            $user->getVerificationTokenExpiresAt() < new \DateTimeImmutable()
        ) {
            $this->addFlash('error', $this->translator->trans('flash.verify_expired'));
            $user->setVerificationToken(null);
            $user->setVerificationTokenExpiresAt(null);
            $entityManager->flush();

            return $this->redirectToRoute('home');
        }

        $user->setIsVerified(true);
        $user->setVerificationToken(null);
        $user->setVerificationTokenExpiresAt(null);

        $entityManager->flush();

        $this->addFlash('success', $this->translator->trans('flash.verify_success'));

        return $this->redirectToRoute('app_login');
    }

    // delete user
    #[IsGranted('ROLE_USER')]
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

    // forgot password
    #[Route('/forgot_password', name: 'forgot_password')]
    public function request(
        Request $request,
        UserRepository $userRepository,
        EntityManagerInterface $em,
        MailerInterface $mailer
    ): Response {
        $form = $this->createForm(ForgotPasswordRequestFormType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $email = $form->get('email')->getData();

            /** @var User|null $user */
            $user = $userRepository->findOneBy(['email' => $email]);

            // Par sécurité : on ne révèle pas si l'email existe ou pas
            if ($user) {
                $token = bin2hex(random_bytes(32));
                $user->setResetPasswordToken($token);
                $user->setResetPasswordExpiresAt(
                    new \DateTimeImmutable('+1 hour')
                );

                $em->persist($user);
                $em->flush();

                // Lien de reset (adapte le host ou utilise UrlGeneratorInterface)
                $resetUrl = $this->generateUrl(
                    'app_reset_password',
                    ['token' => $token],
                    \Symfony\Component\Routing\Generator\UrlGeneratorInterface::ABSOLUTE_URL
                );

                $mail = (new Email())
                    ->from('support@bazar-de-cetus.octohub.fr')
                    ->to($user->getEmail())
                    ->subject('Réinitialisation de votre mot de passe')
                    ->text(
                        "Bonjour,\n\n".
                        "Vous avez demandé une réinitialisation de votre mot de passe.\n".
                        "Veuillez cliquer sur le lien ci-dessous pour en définir un nouveau :\n".
                        $resetUrl."\n\n".
                        "Si vous n’êtes pas à l’origine de cette demande, vous pouvez ignorer cet e-mail."
                    );

                $mailer->send($mail);
            }

            $this->addFlash('success', $this->translator->trans('flash.forgot_password_sent'));
            return $this->redirectToRoute('forgot_password');
        }

        return $this->render('security/forgot_password_request.html.twig', [
            'requestForm' => $form->createView(),
        ]);
    }

    // reset password
    #[Route('/reset-password/{token}', name: 'app_reset_password')]
    public function reset(
        string $token,
        Request $request,
        UserRepository $userRepository,
        EntityManagerInterface $em,
        UserPasswordHasherInterface $passwordHasher
    ): Response {
        /** @var User|null $user */
        $user = $userRepository->findOneBy(['resetPasswordToken' => $token]);

        if (!$user || !$user->isResetPasswordTokenValid()) {
            $this->addFlash('error', $this->translator->trans('flash.reset_invalid'));
            return $this->redirectToRoute('app_forgot_password_request');
        }

        $form = $this->createForm(ResetPasswordFormType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $plainPassword = $form->get('plainPassword')->getData();

            $user->setPassword(
                $passwordHasher->hashPassword($user, $plainPassword)
            );
            $user->setResetPasswordToken(null);
            $user->setResetPasswordExpiresAt(null);

            $em->persist($user);
            $em->flush();

            $this->addFlash('success', $this->translator->trans('flash.reset_success'));
            return $this->redirectToRoute('app_login');
        }

        return $this->render('security/reset_password.html.twig', [
            'resetForm' => $form->createView(),
        ]);
    }

    // logout
    #[IsGranted('ROLE_USER')]
    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
