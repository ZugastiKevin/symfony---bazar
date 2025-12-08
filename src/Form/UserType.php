<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class UserType extends AbstractType
{
    public function __construct(private TranslatorInterface $translator) {}

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $isEdit = $options['is_edit'];

        $builder
            ->add('pseudo', TextType::class, [
                'label' => 'form.label.pseudo',
            ])
            ->add('email', EmailType::class, [
                'label' => 'email',
                'invalid_message' => 'form.error.error_email',
            ])
            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'mapped' => false,
                'required' => !$isEdit,
                'invalid_message' => 'form.error.error_mismatch',
                'error_mapping' => [
                    '.' => 'second',
                ],
                'first_options'  => [
                    'label' => 'password',
                    'attr' => [
                        'minlength' => 8,
                        'maxlength' => 4096,
                        'pattern' => '^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$',
                        'title' => 'form.error.error_ref',
                    ],
                    'constraints' => [
                        ...(!$isEdit ? [new Assert\NotBlank(['message' => 'form.error_obligatory'])] : []),
                        new Assert\Length(min: 8, minMessage: 'form.error.error_password_length'),
                        new Assert\Regex('/[A-Z]/', 'form.error.error_upper'),
                        new Assert\Regex('/\d/',   'form.error.error_number'),
                        new Assert\Regex('/[\W_]/','form.error.error_special'),
                        new Assert\NotCompromisedPassword(message: "form.error.error_vulnerability"),
                    ],
                ],
                'second_options' => [
                    'label_html' => true,
                    'label' => '<span>' . $this->translator->trans('confirm_password') . '</span>',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'is_edit' => false,
        ]);
    }
}
