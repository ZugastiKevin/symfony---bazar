<?php

namespace App\Entity;

use App\Repository\StatusRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StatusRepository::class)]
class Status
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'integer')]
    private int $code;

    #[ORM\Column(length: 255)]
    private string $translationKey;

    /**
     * @var Collection<int, User>
     */
    #[ORM\OneToMany(targetEntity: User::class, mappedBy: 'status')]
    private Collection $user;

    /**
     * @var Collection<int, ShopItems>
     */
    #[ORM\OneToMany(targetEntity: ShopItems::class, mappedBy: 'status')]
    private Collection $shopsItems;

    public function __construct()
    {
        $this->user = new ArrayCollection();
        $this->shopsItems = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): int
    {
        return $this->code;
    }

    public function setCode(int $code): static
    {
        $this->code = $code;

        return $this;
    }

    public function getTranslationKey(): string
    {
        return $this->translationKey;
    }

    public function setTranslationKey(string $translationKey): static
    {
        $this->translationKey = $translationKey;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUser(): Collection
    {
        return $this->user;
    }

    public function addUser(User $user): static
    {
        if (!$this->user->contains($user)) {
            $this->user->add($user);
            $user->setStatus($this);
        }

        return $this;
    }

    public function removeUser(User $user): static
    {
        if ($this->user->removeElement($user)) {
            // set the owning side to null (unless already changed)
            if ($user->getStatus() === $this) {
                $user->setStatus(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ShopItems>
     */
    public function getShopsItems(): Collection
    {
        return $this->shopsItems;
    }

    public function addShopsItem(ShopItems $shopsItem): static
    {
        if (!$this->shopsItems->contains($shopsItem)) {
            $this->shopsItems->add($shopsItem);
            $shopsItem->setStatus($this);
        }

        return $this;
    }

    public function removeShopsItem(ShopItems $shopsItem): static
    {
        if ($this->shopsItems->removeElement($shopsItem)) {
            // set the owning side to null (unless already changed)
            if ($shopsItem->getStatus() === $this) {
                $shopsItem->setStatus(null);
            }
        }

        return $this;
    }

    public function __toString(): string
    {
        return $this->translationKey;
    }
}
