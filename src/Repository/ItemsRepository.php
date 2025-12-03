<?php

namespace App\Repository;

use App\Entity\Items;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Items>
 */
class ItemsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Items::class);
    }

    public function findOneBySearchNameMatchingz(string $searchName): ?Items
    {
        $querry = mb_strtolower(trim($searchName));

        $conn = $this->getEntityManager()->getConnection();
        $platform = $conn->getDatabasePlatform()->getName();

        // Construire une requête SQL native pour pouvoir utiliser JSON_CONTAINS (MySQL) ou jsonb operators (Postgres)
        $sql = 'SELECT id FROM items WHERE LOWER(name) = :querry OR LOWER(unique_name) = :querry';
        $params = ['querry' => $querry];

        if ($platform === 'mysql') {
            // JSON_CONTAINS(search_names, '"value"') = 1
            $sql .= ' OR JSON_CONTAINS(search_names, :jsonNeedle) = 1';
            $params['jsonNeedle'] = json_encode($querry); // encodé en JSON -> "value"
        }

        $stmt = $conn->prepare($sql);
        $result = $stmt->executeQuery($params)->fetchAssociative();

        if ($result && isset($result['id'])) {
            return $this->find((int) $result['id']);
        }

        return null;
    }

    public function findOneBySearchNameMatching(string $term): array
    {
        $searchTerm = trim($term);
        if ($searchTerm === '') {
            return [];
        }

        $normalizedTerm = '%' . mb_strtolower($searchTerm) . '%';

        $queryBuilder = $this->createQueryBuilder('input')
            ->andWhere('LOWER(input.name) LIKE :term OR LOWER(input.description) LIKE :term')
            ->setParameter('term', $normalizedTerm)
            ->setMaxResults(50);

        $query = $queryBuilder->getQuery();
        $itemEntities = $query->getResult();

        $results = [];
        foreach ($itemEntities as $itemEntity) {
            $results[] = [
                'name' => $itemEntity->getNameEn(),
                'description' => $itemEntity->getDescription(),
                'url' => null,
            ];
        }

        return $results;
    }
}
