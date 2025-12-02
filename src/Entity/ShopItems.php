<?php

namespace App\Entity;

use App\Repository\ShopItemsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ShopItemsRepository::class)]
class ShopItems
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'shopItems')]
    private ?Shop $shop = null;

    #[ORM\Column]
    private ?int $price = null;

    #[ORM\Column]
    private ?bool $sell_or_buy = null;

    #[ORM\Column]
    private ?int $stocks = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    /**
     * @var Collection<int, Items>
     */
    #[ORM\ManyToMany(targetEntity: Items::class, mappedBy: 'shop')]
    private Collection $items;

    public function __construct()
    {
        $this->items = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getShop(): ?Shop
    {
        return $this->shop;
    }

    public function setShop(?Shop $shop): static
    {
        $this->shop = $shop;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function isSellOrBuy(): ?bool
    {
        return $this->sell_or_buy;
    }

    public function setSellOrBuy(bool $sell_or_buy): static
    {
        $this->sell_or_buy = $sell_or_buy;

        return $this;
    }

    public function getStocks(): ?int
    {
        return $this->stocks;
    }

    public function setStocks(int $stocks): static
    {
        $this->stocks = $stocks;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): static
    {
        $this->created_at = $created_at;

        return $this;
    }

    /**
     * @return Collection<int, Items>
     */
    public function getItems(): Collection
    {
        return $this->items;
    }

    public function addItem(Items $item): static
    {
        if (!$this->items->contains($item)) {
            $this->items->add($item);
            $item->addShop($this);
        }

        return $this;
    }

    public function removeItem(Items $item): static
    {
        if ($this->items->removeElement($item)) {
            $item->removeShop($this);
        }

        return $this;
    }
}
