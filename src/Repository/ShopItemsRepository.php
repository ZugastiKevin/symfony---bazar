<?php

namespace App\Repository;

use App\Entity\ShopItems;
use App\Dto\OrderFilter;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ShopItems>
 */
class ShopItemsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ShopItems::class);
    }

    public function findByFilter(OrderFilter $filter): array
    {
        $qb = $this->createQueryBuilder('o')
            ->leftJoin('o.shop', 's')
            ->leftJoin('s.user', 'u')
            ->leftJoin('u.status', 'st')
            ->addSelect('s', 'u', 'st');

        if ($filter->getMinPrice() !== null) {
            $qb->andWhere('o.price >= :minPrice')
                ->setParameter('minPrice', $filter->getMinPrice());
        }

        if ($filter->getMaxPrice() !== null) {
            $qb->andWhere('o.price <= :maxPrice')
                ->setParameter('maxPrice', $filter->getMaxPrice());
        }

        if ($filter->getStatus() !== null) {
            $qb->andWhere('st.code = :statusCode')
                ->setParameter('statusCode', $filter->getStatus());
        }

        switch ($filter->getSort()) {
            case 'date_asc':
                $qb->orderBy('o.created_at', 'ASC');
                break;
            case 'price_asc':
                $qb->orderBy('o.price', 'ASC');
                break;
            case 'price_desc':
                $qb->orderBy('o.price', 'DESC');
                break;
            case 'date_desc':
            default:
                $qb->orderBy('o.created_at', 'DESC');
        }

        return $qb->getQuery()->getResult();
    }
}
