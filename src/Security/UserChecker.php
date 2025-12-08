<?php

namespace App\Security;

use App\Entity\User;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;

class UserChecker implements UserCheckerInterface
{
public function checkPreAuth(UserInterface $user): void
{
    if (!$user instanceof User) {
        return;
    }

    // Si le compte n'est pas vérifié, on empêche la connexion
    if (!$user->isVerified()) {
        throw new CustomUserMessageAuthenticationException('Account not verified.');
    }
}

public function checkPostAuth(UserInterface $user): void
    {

    }
}