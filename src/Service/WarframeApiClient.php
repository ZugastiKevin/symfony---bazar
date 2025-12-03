<?php

namespace App\Service;

use Psr\Log\LoggerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

class WarframeApiClient
{
    public function __construct(
        private HttpClientInterface $client,
        private LoggerInterface     $logger
    )
    {
    }

    /**
     * Recherche d'items via l'API WarframeStat.
     *
     * @param string $name Terme recherché
     * @param string $language Langue (par défaut 'en')
     * @return array
     */
    public function searchItem(string $name, string $language = "fr"): array
    {
        $url = 'https://api.warframestat.us/items/search/' . urlencode($name);

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

            $status = $response->getStatusCode();
            $content = $response->getContent(false);
            $contentPreview = substr($content, 0, 1000);
            $responseHeaders = $response->getHeaders(false);

            // Log minimal info for debugging
            $this->logger->debug('Warframe API request', [
                'url' => $url,
                'query' => $query,
                'status' => $status,
                'content_snippet' => $contentPreview,
                'response_headers' => $responseHeaders,
            ]);

            $data = $response->toArray();

            if (!is_array($data)) {
                return [];
            }

            return $data;
        } catch (TransportExceptionInterface $e) {
            $this->logger->warning('Warframe API transport error', ['url' => $url, 'exception' => $e->getMessage()]);
            return [];
        } catch (\Throwable $e) {
            $this->logger->error('Warframe API error', ['url' => $url, 'exception' => $e->getMessage()]);
            return [];
        }
    }
}
