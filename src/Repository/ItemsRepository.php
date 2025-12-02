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

    //    /**
    //     * @return Items[] Returns an array of Items objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('i')
    //            ->andWhere('i.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('i.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Items
    //    {
    //        return $this->createQueryBuilder('i')
    //            ->andWhere('i.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

    /**
     * Recherche un item par comparaison avec nameEn, nameFr, uniqueName ou par inclusion dans le tableau JSON search_names.
     * Retourne le premier résultat ou null.
     */
    public function findOneBySearchNameMatching(string $searchName): ?Items
    {
        $q = mb_strtolower(trim($searchName));

        $conn = $this->getEntityManager()->getConnection();
        $platform = $conn->getDatabasePlatform()->getName();

        // Construire une requête SQL native pour pouvoir utiliser JSON_CONTAINS (MySQL) ou jsonb operators (Postgres)
        $sql = 'SELECT id FROM items WHERE LOWER(name_en) = :q OR LOWER(name_fr) = :q OR LOWER(unique_name) = :q';
        $params = ['q' => $q];

        if ($platform === 'mysql') {
            // JSON_CONTAINS(search_names, '"value"') = 1
            $sql .= ' OR JSON_CONTAINS(search_names, :jsonNeedle) = 1';
            $params['jsonNeedle'] = json_encode($q); // encodé en JSON -> "value"
        }

        $stmt = $conn->prepare($sql);
        $result = $stmt->executeQuery($params)->fetchAssociative();

        if ($result && isset($result['id'])) {
            return $this->find((int) $result['id']);
        }

        return null;
    }
}
