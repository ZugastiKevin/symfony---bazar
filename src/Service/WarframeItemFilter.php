<?php

namespace App\Service;

use App\Dto\WarframeItemDto;

class WarframeItemFilter
{
    public function filterByCategoryAndPrime(array $items, ?string $category = null, ?bool $onlyPrime = null): array
    {
        $out = [];

        foreach ($items as $item) {
            if (!($item instanceof WarframeItemDto)) {
                continue;
            }

            if ($category !== null && $item->getCategory() !== null) {
                if (strtolower($item->getCategory()) !== strtolower($category)) {
                    continue;
                }
            }

            if ($onlyPrime === true) {
                if ($item->isPrime() !== true) {
                    continue;
                }
            }

            $out[] = $item;
        }

        return $out;
    }
}

