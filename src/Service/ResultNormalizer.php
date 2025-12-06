<?php

namespace App\Service;

class ResultNormalizer
{
    public function normalizeCollection(array $items, int $maxResults = 100000): array
    {
        $normalized = array_map(function (array $item) {
            $unique = $item['uniqueName'] ?? $item['urlName'] ?? null;
            $forPath = $unique !== null ? str_replace('/', '-', $unique) : null;
            $displayName = $item['nameFR'] ?? $item['nameEN'] ?? $item['name'] ?? 'Nom inconnu';

            return [
                'forPath' => $forPath,
                'name' => $displayName,
                'category' => $item['category'] ?? null,
                'wikiaUrl' => $item['wikiaUrl'] ?? null,
                'uniqueName' => $unique,
            ];
        }, $items);

        return array_slice(array_values($normalized), 0, $maxResults);
    }
}