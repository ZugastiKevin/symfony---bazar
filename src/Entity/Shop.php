<?php

namespace App\Entity;

use App\Repository\ShopRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ShopRepository::class)]
class Shop
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToOne(inversedBy: 'shop', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    /**
     * @var Collection<int, ShopItems>
     */
    #[ORM\OneToMany(targetEntity: ShopItems::class, mappedBy: 'shop')]
    private Collection $shopItems;

    public function __construct()
    {
        $this->shopItems = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): static
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection<int, ShopItems>
     */
    public function getShopItems(): Collection
    {
        return $this->shopItems;
    }

    public function addShopItem(ShopItems $shopItem): static
    {
        if (!$this->shopItems->contains($shopItem)) {
            $this->shopItems->add($shopItem);
            $shopItem->setShop($this);
        }

        return $this;
    }

    public function removeShopItem(ShopItems $shopItem): static
    {
        if ($this->shopItems->removeElement($shopItem)) {
            // set the owning side to null (unless already changed)
            if ($shopItem->getShop() === $this) {
                $shopItem->setShop(null);
            }
        }

        return $this;
    }
}
