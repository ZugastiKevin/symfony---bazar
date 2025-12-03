<?php

namespace App\Dto;

class WarframeItemDto
{
    private ?string $name;
    private ?string $uniqueName;
    private ?string $description;
    private ?string $category;
    private ?string $productCategory;
    private ?bool $isPrime;
    private ?string $imageName;
    private ?string $wikiaUrl;
    private ?string $type;

    public function __construct(
        ?string $name = null,
        ?string $uniqueName = null,
        ?string $description = null,
        ?string $category = null,
        ?string $productCategory = null,
        ?bool $isPrime = null,
        ?string $imageName = null,
        ?string $wikiaUrl = null,
        ?string $type = null
    ) {
        $this->name = $name;
        $this->uniqueName = $uniqueName;
        $this->description = $description;
        $this->category = $category;
        $this->productCategory = $productCategory;
        $this->isPrime = $isPrime;
        $this->imageName = $imageName;
        $this->wikiaUrl = $wikiaUrl;
        $this->type = $type;
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['name'] ?? $data['title'] ?? null,
            $data['uniqueName'] ?? null,
            $data['description'] ?? $data['shortDescription'] ?? null,
            $data['category'] ?? null,
            $data['productCategory'] ?? null,
            isset($data['isPrime']) ? (bool) $data['isPrime'] : null,
            $data['imageName'] ?? null,
            $data['wikiaUrl'] ?? $data['wikia_url'] ?? $data['url'] ?? null,
            $data['type'] ?? null
        );
    }

    public function toArray(): array
    {
        return [
            'name' => $this->name,
            'uniqueName' => $this->uniqueName,
            'description' => $this->description,
            'category' => $this->category,
            'productCategory' => $this->productCategory,
            'isPrime' => $this->isPrime,
            'imageName' => $this->imageName,
            'wikiaUrl' => $this->wikiaUrl,
            'type' => $this->type,
        ];
    }

    // Getters (utile si besoin dans le code)
    public function getName(): ?string { return $this->name; }
    public function getUniqueName(): ?string { return $this->uniqueName; }
    public function getDescription(): ?string { return $this->description; }
    public function getCategory(): ?string { return $this->category; }
    public function getProductCategory(): ?string { return $this->productCategory; }
    public function isPrime(): ?bool { return $this->isPrime; }
    public function getImageName(): ?string { return $this->imageName; }
    public function getWikiaUrl(): ?string { return $this->wikiaUrl; }
    public function getType(): ?string { return $this->type; }
}

