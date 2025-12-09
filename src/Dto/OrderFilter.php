<?php

namespace App\Dto;

class OrderFilter
{
private ?int $minPrice = null;
private ?int $maxPrice = null;
private ?int $status   = null;
private string $sort   = 'date_desc';

public function getMinPrice(): ?int { return $this->minPrice; }
public function setMinPrice(?int $minPrice): void { $this->minPrice = $minPrice; }

public function getMaxPrice(): ?int { return $this->maxPrice; }
public function setMaxPrice(?int $maxPrice): void { $this->maxPrice = $maxPrice; }

public function getStatus(): ?int { return $this->status; }
public function setStatus(?int $status): void { $this->status = $status; }

public function getSort(): string { return $this->sort; }
public function setSort(string $sort): void { $this->sort = $sort; }
}
