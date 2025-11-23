<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SupportType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Votre pseudo',
                'attr' => [
                    'placeholder' => 'Pseudo',
                ],
            ])
            ->add('email', EmailType::class, [
                'label' => 'Votre email',
                'attr' => [
                    'placeholder' => 'exemple@mail.com',
                ],
            ])
            ->add('category', ChoiceType::class, [
                'label' => 'Catégorie',
                'placeholder' => 'Choisissez une catégorie',
                'choices' => [
                    'Support technique'    => 'support',
                    'Bug'                  => 'bug',
                    'Question générale'    => 'question',
                    'Suggestion'           => 'suggestion',
                    'Autre'                => 'other',
                ],
            ])
            ->add('message', TextareaType::class, [
                'label' => 'Votre message',
                'attr' => [
                    'rows' => 6,
                    'placeholder' => 'Décrivez votre problème, question ou suggestion…',
                ],
            ])
            ->add('imageFile', FileType::class,[
                'mapped' => true,
                'required' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '2M',
                        'maxSizeMessage' => 'L\'image ne doit pas dépasser 2 Mo.',
                        'mimeTypes' => [
                            'image/jpeg',
                            'image/jpg',
                            'image/png',
                            'image/webp',
                        ],
                        'mimeTypesMessage' => 'Veuillez envoyer une image valide (formats autorisés : JPEG, JPG, PNG, WEBP).'
                    ])
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([]);
    }
}
