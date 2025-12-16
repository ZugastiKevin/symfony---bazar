<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\Request;

class CategoryFilter
{
    /**
     * Extrait et normalise la liste des catégories à exclure depuis la requête HTTP.
     * @param Request $request
     * @param string $paramName
     * @param string $default
     * @return string[]
     */
    public function getExcludedCategoriesFromRequest(Request $request, string $paramName = 'exclude', string $default = 'Skins,Glyphs,Resources,Misc,Node,Sigils,Enemy,Arch-Gun,Fish,Gear,Relics'): array
    {
        $excludeParam = (string) $request->query->get($paramName, $default);
        $excludedCategories = array_filter(array_map(function ($c) {
            return mb_strtolower(trim($c));
        }, explode(',', $excludeParam)));

        return array_values($excludedCategories);
    }

    /**
     * Vérifie si un item appartient à une des catégories à exclure.
     * @param array $item
     * @param string[] $excludedCategories (en minuscules)
     * @return bool
     */
    public function isExcluded(array $item, array $excludedCategories): bool
    {
        $type = $item['type'] ?? null;
        $categoryField = $item['category'] ?? null;

        if ($categoryField === null) {
            return false;
        }

        $categories = [];
        if (is_array($categoryField)) {
            foreach ($categoryField as $c) {
                if (is_string($c)) {
                    $categories[] = mb_strtolower(trim($c));
                }
            }
        } elseif (is_string($categoryField)) {
            $categories[] = mb_strtolower(trim($categoryField));
        }

        if (empty($categories)) {
            return false;
        }

        $modsExcluded = array_map('mb_strtolower', ['focus way', 'Mod Set Mod']);

        // Règle demandée : si catégorie 'mods' et type dans $modsExcluded -> exclure
        if (in_array('mods', $categories, true)) {
            if ($type !== null) {
                if (is_string($type)) {
                    if (in_array(mb_strtolower(trim($type)), $modsExcluded, true)) {
                        return true;
                    }
                } elseif (is_array($type)) {
                    foreach ($type as $t) {
                        if (is_string($t) && in_array(mb_strtolower(trim($t)), $modsExcluded, true)) {
                            return true;
                        }
                    }
                }
            }
        }

        // Règles spécifiques : pour certaines catégories (Warframes, Primary, Secondary, Melee),
        // ne garder que les items qui sont des primes (isPrime true). Les autres sont exclus.
        $primeRequiredCategories = ['warframes', 'primary', 'secondary', 'melee'];
        foreach ($primeRequiredCategories as $primeCat) {
            if (in_array($primeCat, $categories, true)) {
                // Interpréter proprement la valeur isPrime (peut être bool, int, string)
                $isPrime = true;
                if (array_key_exists('isPrime', $item)) {
                    // filter_var gère "true"/"false"/"1"/"0" etc.
                    $isPrime = (bool) filter_var($item['isPrime'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
                }

                // Si ce n'est pas une prime, on l'exclut (on garde uniquement les isPrime true)
                if (!$isPrime) {
                    return true;
                }

                // Si c'est une prime, on ne l'exclut pas pour cette règle — on continue les autres vérifications
                break;
            }
        }

        foreach ($categories as $cat) {
            if (in_array($cat, $excludedCategories, true)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Filtre un tableau d'items pour exclure ceux dont la catégorie est dans la liste.
     * @param array $items
     * @param string[] $excludedCategories
     * @return array
     */
    public function filter(array $items, array $excludedCategories): array
    {
        return array_values(array_filter($items, function ($item) use ($excludedCategories) {
            if (!is_array($item)) {
                return false;
            }

            return !$this->isExcluded($item, $excludedCategories);
        }));
    }
}
