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

    /**
     * Recherche simple par terme sur les champs name, uniqueName et searchNames (JSON).
     * Retourne un tableau d'entités Items.
     * @param string $term
     * @param int|null $limit
     * @return Items[]
     */
    public function findBySearchTerm(string $term, ?int $limit = 50): array
    {
        $qb = $this->createQueryBuilder('i');

        $term = trim($term);
        if ($term === '') {
            return [];
        }

        // Normaliser les espaces internes (collapse multiple espaces en un seul)
        $normalized = preg_replace('/\s+/u', ' ', $term);
        $paramValue = '%' . mb_strtolower($normalized) . '%';

        $orX = $qb->expr()->orX();
        $orX->add($qb->expr()->like('LOWER(i.nameEN)', ':q'));
        $orX->add($qb->expr()->like('LOWER(i.nameFR)', ':q'));

        $qb->where($orX)
            ->setParameter('q', $paramValue);

        if ($limit !== null) {
            $qb->setMaxResults($limit);
        }

        return $qb->getQuery()->getResult();
    }
}