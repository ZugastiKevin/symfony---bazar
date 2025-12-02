<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class WarframeApiClient
{
    public function __construct(
        private HttpClientInterface $client
    ) {}

    public function searchItem(string $name, string $language = 'en'): array
    {
        $response = $this->client->request(
            'GET',
            'https://api.warframestat.us/items/search/' . urlencode($name),
            [
                'query' => ['language' => $language],
            ]
    );

    return $response->toArray();
    }
}
