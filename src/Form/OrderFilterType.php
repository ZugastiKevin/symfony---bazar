<?php

namespace App\Form;

use App\Dto\OrderFilter;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OrderFilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('sort', ChoiceType::class, [
                'choices' => [
                    'filters.sort.newest'   => 'date_desc',
                    'filters.sort.oldest'   => 'date_asc',
                    'filters.sort.lowprice' => 'price_asc',
                    'filters.sort.highprice'=> 'price_desc',
                ],
                'choice_translation_domain' => 'messages',
                'required' => false,
                'label'    => false,
            ])

            ->add('minPrice', IntegerType::class, [
                'required' => false,
                'label'    => 'filters.price.min',
                'translation_domain' => 'messages',
            ])

            ->add('maxPrice', IntegerType::class, [
                'required' => false,
                'label'    => 'filters.price.max',
                'translation_domain' => 'messages',
            ])

            ->add('status', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'filters.status.all',
                'choices' => [
                    'status.hidden'   => 0,
                    'status.online_site'   => 1,
                    'status.connected_ingame'   => 2,
                ],
                'choice_translation_domain' => 'messages',
                'label' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'      => OrderFilter::class,
            'method'          => 'GET',
            'csrf_protection' => false,
            'translation_domain' => 'messages',
        ]);
    }
}
