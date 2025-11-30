<?php

namespace App\Controller\Admin;

use App\Entity\SupportTicket;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;

class SupportTicketCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return SupportTicket::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Ticket de support')
            ->setEntityLabelInPlural('Tickets de support')
            ->setDefaultSort(['createdAt' => 'DESC'])
            ->showEntityActionsInlined();
    }

    public function configureActions(Actions $actions): Actions
    {
        // si tu veux empêcher la création manuelle depuis le BO
        return $actions
            ->disable(Action::NEW)
            ->add(Crud::PAGE_INDEX, Action::DETAIL);
    }

    public function configureFields(string $pageName): iterable
    {
        $id         = IdField::new('id')->onlyOnIndex();
        $user       = AssociationField::new('user', 'Utilisateur')->onlyOnDetail();
        $name       = TextField::new('name', 'Pseudo');
        $email      = EmailField::new('email', 'Email');
        $category   = ChoiceField::new('category', 'Catégorie')
            ->setChoices([
                'Support technique'  => 'support',
                'Bug'                => 'bug',
                'Question générale'  => 'question',
                'Suggestion'         => 'suggestion',
                'Autre'              => 'other',
            ]);
        $message    = TextareaField::new('message', 'Message');
        $status     = ChoiceField::new('status', 'Statut')
            ->setChoices([
                'Ouvert'    => 'open',
                'En cours'  => 'in_progress',
                'Résolu'    => 'closed',
            ]);
        $createdAt  = DateTimeField::new('createdAt', 'Créé le');
        $updatedAt  = DateTimeField::new('updatedAt', 'Mis à jour')->onlyOnDetail();

        // ⚠️ adapte le basePath à ton mapping Vich (dossier public)
        $image      = ImageField::new('imageName', 'Pièce jointe')
            ->setBasePath('/assets/images/uploads')
            ->onlyOnDetail();

        if (Crud::PAGE_INDEX === $pageName) {
            return [
                $id,
                $name,
                $email,
                $category,
                $status,
                $createdAt,
            ];
        }

        if (Crud::PAGE_DETAIL === $pageName) {
            return [
                $id,
                $user,
                $name,
                $email,
                $category,
                $status,
                $message,
                $image,
                $createdAt,
                $updatedAt,
            ];
        }

        // PAGE EDIT (changer le statut, par ex.)
        if (Crud::PAGE_EDIT === $pageName) {
            return [
                $name,
                $email,
                $category,
                $message,
                $status,
            ];
        }

        // PAGE NEW (normalement désactivée, mais on laisse propre)
        return [
            $name,
            $email,
            $category,
            $message,
            $status,
        ];
    }
}
