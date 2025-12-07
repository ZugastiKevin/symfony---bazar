<?php

namespace App\Entity;

use App\Repository\ItemsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Doctrine\ORM\Mapping as ORM;

#[Vich\Uploadable]
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

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $uniqueName = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nameEN = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nameFR = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $descriptionEN = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $descriptionFR = null;

    #[ORM\Column(type: 'boolean')]
    private bool $isPrime = false;

    #[ORM\Column(nullable: true)]
    private ?string $imageName = null;

    #[Vich\UploadableField(mapping: 'items_api_image', fileNameProperty: 'imageName')]
    private ?File $imageFile = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $type = null;

    #[ORM\Column(nullable: true)]
    private ?int $fusionLimit = null;

    #[ORM\Column(nullable: true)]
    private ?int $ducats = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $wikiaUrl = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $productCategory = null;

    #[ORM\ManyToOne(inversedBy: 'items')]
    #[ORM\JoinColumn(nullable: true)]
    private ?Parts $parts = null;

    #[ORM\ManyToOne(inversedBy: 'item')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Category $category = null;

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

    public function getUniqueName(): ?string
    {
        return $this->uniqueName;
    }

    public function setUniqueName(?string $uniqueName): static
    {
        $this->uniqueName = $uniqueName;

        return $this;
    }

    public function getNameEN(): ?string
    {
        return $this->nameEN;
    }

    public function setNameEN(?string $nameEN): static
    {
        $this->nameEN = $nameEN;

        return $this;
    }

    public function getNameFR(): ?string
    {
        return $this->nameFR;
    }

    public function setNameFR(?string $nameFR): static
    {
        $this->nameFR = $nameFR;

        return $this;
    }

    public function getDescriptionEN(): ?string
    {
        return $this->descriptionEN;
    }

    public function setDescriptionEN(?string $descriptionEN): static
    {
        $this->descriptionEN = $descriptionEN;

        return $this;
    }

    public function getDescriptionFR(): ?string
    {
        return $this->descriptionFR;
    }

    public function setDescriptionFR(?string $descriptionFR): static
    {
        $this->descriptionFR = $descriptionFR;

        return $this;
    }

    public function isPrime(): bool
    {
        return (bool) $this->isPrime;
    }

    public function setIsPrime(bool $prime): static
    {
        $this->isPrime = $prime;

        return $this;
    }

    public function setImageFile(?File $imageFile = null): void
    {
        $this->imageFile = $imageFile;

        if ($imageFile) {
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImageName(?string $imageName): void
    {
        $this->imageName = $imageName;
    }

    public function getImageName(): ?string
    {
        return $this->imageName;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;
        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function getFusionLimit(): ?int
    {
        return $this->fusionLimit;
    }

    public function setFusionLimit(?int $fusionLimit): static
    {
        $this->fusionLimit = $fusionLimit;
        return $this;
    }

    public function getDucats(): ?int
    {
        return $this->ducats;
    }

    public function setDucats(?int $ducats): static
    {
        $this->ducats = $ducats;
        return $this;
    }

    public function getWikiaUrl(): ?string
    {
        return $this->wikiaUrl;
    }

    public function setWikiaUrl(?string $wikiaUrl): static
    {
        $this->wikiaUrl = $wikiaUrl;

        return $this;
    }

    public function getProductCategory(): ?string
    {
        return $this->productCategory;
    }

    public function setProductCategory(?string $productCategory): static
    {
        $this->productCategory = $productCategory;

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

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;

        return $this;
    }
}
