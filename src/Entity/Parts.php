<?php

namespace App\Entity;

use App\Repository\PartsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PartsRepository::class)]
class Parts
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, unique: true)]
    private ?string $uniqueName = null;

    // Propriétaire : la Warframe / arme qui possède cette part
    #[ORM\ManyToOne(targetEntity: Items::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?Items $owner = null;

    /**
     * @var Collection<int, Items>
     */
    #[ORM\OneToMany(targetEntity: Items::class, mappedBy: 'parts')]
    private Collection $items;

    public function __construct()
    {
        $this->items = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUniqueName(): ?string
    {
        return $this->uniqueName;
    }

    public function setUniqueName(string $uniqueName): static
    {
        $this->uniqueName = $uniqueName;
        return $this;
    }

    public function getOwner(): ?Items
    {
        return $this->owner;
    }

    public function setOwner(?Items $owner): static
    {
        $this->owner = $owner;
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
            $item->setParts($this);
        }

        return $this;
    }

    public function removeItem(Items $item): static
    {
        if ($this->items->removeElement($item)) {
            if ($item->getParts() === $this) {
                $item->setParts(null);
            }
        }

        return $this;
    }
}
