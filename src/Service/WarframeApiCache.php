<?php

namespace App\Service;

use Psr\Log\LoggerInterface;
use Symfony\Contracts\Cache\CacheInterface;
use Symfony\Contracts\Cache\ItemInterface;

class WarframeApiCache
{
    public function __construct(
        private WarframeApiClient $client,
        private CacheInterface $cache,
        private LoggerInterface $logger
    ) {}

    /**
     * Récupère les résultats depuis le cache ou appelle l'API si absent.
     * @param string $name
     * @param string $language
     * @param int $ttl en secondes
     * @return array
     */
    public function searchItem(string $name, string $language = 'en', int $ttl = 300): array
    {
        $cacheKey = 'wf_search_' . md5($name . '|' . $language);

        try {
            return $this->cache->get($cacheKey, function (ItemInterface $item) use ($ttl, $name, $language) {
                $item->expiresAfter(max(0, $ttl));

                try {
                    return $this->client->searchItem($name, $language);
                } catch (\Throwable $e) {
                    // En cas d'erreur dans l'appel API, on renvoie un tableau vide pour ne pas planter le cache
                    return [];
                }
            });
        } catch (\Throwable $e) {
            $this->logger->error('WarframeApiCache get error', ['name' => $name, 'language' => $language, 'exception' => $e->getMessage()]);
            return [];
        }
    }

    /**
     * Tente de récupérer la valeur en cache sans appeler l'API.
     * Retourne null si absent ou si l'adaptateur ne supporte pas l'accès direct.
     * @param string $name
     * @param string $language
     * @return array|null
     */
    public function getFromCache(string $name, string $language = 'en'): ?array
    {
        $cacheKey = 'wf_search_' . md5($name . '|' . $language);

        try {
            // Si l'adaptateur expose getItem (PSR-6 AdapterInterface), utilisons-le pour vérifier sans exécuter la closure
            if (method_exists($this->cache, 'getItem')) {
                $item = $this->cache->getItem($cacheKey);
                if ($item->isHit()) {
                    return $item->get();
                }
                return null;
            }

            // Sinon, essayer une lecture sécurisée via get mais en forçant une closure qui ne contacte pas l'API
            // ATTENTION: certains adaptateurs exécuteront la closure et la stockeront — évitons de faire cela.
            return null;
        } catch (\Throwable $e) {
            $this->logger->warning('WarframeApiCache getFromCache error', ['name' => $name, 'language' => $language, 'exception' => $e->getMessage()]);
            return null;
        }
    }
}