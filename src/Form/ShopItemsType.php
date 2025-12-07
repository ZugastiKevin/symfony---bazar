<?php

namespace App\Form;

use App\Entity\ShopItems;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ShopItemsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $currentStatusCode = $options['user_status_code'];
        $fusionLimit = $options['fusion_limit'];

        $builder
            ->add('price', IntegerType::class, [
                'label' => 'price-per-unit',
                'attr' => [
                    'min' => 1,
                    'max' => 10000,
                ],
                'empty_data' => 1,
            ])
            ->add('stocks', IntegerType::class, [
                'label' => 'quantity',
                'attr' => [
                    'min' => 1,
                    'max' => 1000,
                ],
                'empty_data' => 1,
            ])
            ->add('sellOrBuy', ChoiceType::class, [
                'label'   => 'order-type',
                'attr' => ['class' => 'select-dropdown'],
                'row_attr' => ['class' => 'select-wrapper'],
                'choices' => [
                    'Vendre'   => true,
                    'Acheter'  => false,
                ],
                'expanded' => false,
                'multiple' => false,
            ])
            ->add('initialVisibility', ChoiceType::class, [
                'label' => 'initial-visibility',
                'mapped' => false,
                'attr' => ['class' => 'select-dropdown'],
                'row_attr' => ['class' => 'select-wrapper'],
                'choices' => [
                    'status.hidden'           => 0,
                    'status.online_site'      => 1,
                    'status.connected_ingame' => 2,
                ],
                'expanded' => false,
                'multiple' => false,
                'data' => $currentStatusCode,
                'choice_translation_domain' => 'messages',
            ])
            ->add('rank', IntegerType::class, [
                'label' => 'rank',
                'attr' => [
                    'min' => 0,
                    'max' => 10,
                ],
                'empty_data' => 0,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ShopItems::class,
            'user_status_code' => null,
            'fusion_limit' => 0,
        ]);
    }
}
