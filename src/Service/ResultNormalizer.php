<?php

namespace App\Service;

class ResultNormalizer
{
    public function normalizeCollection(array $items): array
    {
        $normalized = array_map(function (array $item) {

            $unique = $item['uniqueName'] ?? $item['urlName'] ?? null;
            $forPath = $unique !== null ? str_replace('/', '-', $unique) : null;
            $displayName = $item['nameFR'] ?? $item['nameEN'] ?? $item['name'] ?? 'Nom inconnu';
            $imageName = $item['imageName'] ?? null;
            $category = $item['category'] ?? null;
            $fusionLimit = $item['fusionLimit'] ?? null;

            return [
                'forPath' => $forPath,
                'name' => $displayName,
                'uniqueName' => $unique,
                'imageName' => $imageName,
                'category'   => $category,
                'fusionLimit'  => $fusionLimit,
            ];
        }, $items);

        return array_slice(array_values($normalized), 0, 6);
    }
}