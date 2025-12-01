<?php

namespace App\Entity;

use App\Repository\ItemsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ItemsRepository::class)]
class Items
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    /**
     * @var Collection<int, ShopItems>
     */
    #[ORM\ManyToMany(targetEntity: ShopItems::class, inversedBy: 'items')]
    private Collection $shop;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $img_item = null;

    #[ORM\Column(length: 255)]
    private ?string $describe_item = null;

    #[ORM\ManyToOne(inversedBy: 'item')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Parts $parts = null;

    #[ORM\ManyToOne(inversedBy: 'item')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Categorys $categorys = null;

    public function __construct()
    {
        $this->shop = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, ShopItems>
     */
    public function getShop(): Collection
    {
        return $this->shop;
    }

    public function addShop(ShopItems $shop): static
    {
        if (!$this->shop->contains($shop)) {
            $this->shop->add($shop);
        }

        return $this;
    }

    public function removeShop(ShopItems $shop): static
    {
        $this->shop->removeElement($shop);

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getImgItem(): ?string
    {
        return $this->img_item;
    }

    public function setImgItem(?string $img_item): static
    {
        $this->img_item = $img_item;

        return $this;
    }

    public function getDescribeItem(): ?string
    {
        return $this->describe_item;
    }

    public function setDescribeItem(string $describe_item): static
    {
        $this->describe_item = $describe_item;

        return $this;
    }

    public function getParts(): ?Parts
    {
        return $this->parts;
    }

    public function setParts(?Parts $parts): static
    {
        $this->parts = $parts;

        return $this;
    }

    public function getCategorys(): ?Categorys
    {
        return $this->categorys;
    }

    public function setCategorys(?Categorys $categorys): static
    {
        $this->categorys = $categorys;

        return $this;
    }
}
