<?php

namespace App\Service;

use App\Entity\User;
use App\Entity\ShopItems;
use App\Repository\StatusRepository;
use Doctrine\ORM\EntityManagerInterface;

class UserStatusService
{
    public const CODE_HIDDEN = 0;
    public const CODE_ON_SITE = 1;
    public const CODE_IN_GAME = 2;

    public function __construct(
        private StatusRepository $statusRepository,
        private EntityManagerInterface $entityManager,
    ) {}

    /**
     * Met à jour :
     *  - le status du user
     *  - le status de tous ses ShopItems
     */
    public function setUserStatusByCode(User $user, int $code, bool $flush = true): void
    {
        $status = $this->statusRepository->findOneBy(['code' => $code]);

        if (!$status) {
            throw new \RuntimeException(sprintf('Status avec code %d introuvable.', $code));
        }

        // 1️ User
        $user->setStatus($status);

        // 2️ Items du shop de ce user (si il a un shop)
        $shop = $user->getShop();
        if ($shop) {
            foreach ($shop->getShopItems() as $shopItem) {
                /** @var ShopItems $shopItem */
                $shopItem->setStatus($status);
            }
        }

        if ($flush) {
            $this->entityManager->flush();
        }
    }

    public function setHidden(User $user, bool $flush = true): void
    {
        $this->setUserStatusByCode($user, self::CODE_HIDDEN, $flush);
    }

    public function setOnSite(User $user, bool $flush = true): void
    {
        $this->setUserStatusByCode($user, self::CODE_ON_SITE, $flush);
    }

    public function setInGame(User $user, bool $flush = true): void
    {
        $this->setUserStatusByCode($user, self::CODE_IN_GAME, $flush);
    }
}
