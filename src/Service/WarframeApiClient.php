<?php

namespace App\Service;

use Psr\Log\LoggerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

class WarframeApiClient
{
    public function __construct(
        private HttpClientInterface $client,
        private LoggerInterface     $logger,
    ) {}

    /**
     * Recherche d'items via l'API WarframeStat.
     *
     * @param string $name
     * @param string $language
     * @return array
     */
    public function searchItem(string $name, string $language = "en"): array
    {
        $url = 'https://api.warframestat.us/items/search/' . rawurlencode($name);

        $query = [
            'language' => $language,
        ];

        try {
            $response = $this->client->request(
                'GET',
                $url,
                [
                    'query' => $query,
                ]
            );

            $data = $response->toArray();

            if (!is_array($data)) {
                return [];
            }

            return $data;

        } catch (\Throwable $e) {
            $this->logger->error('Warframe API error', ['url' => $url, 'exception' => $e->getMessage()]);
            return [];
        }
    }
}
