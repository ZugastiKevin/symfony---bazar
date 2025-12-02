<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Filter\BooleanFilter;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Utilisateur')
            ->setEntityLabelInPlural('Utilisateurs')
            ->setPageTitle(Crud::PAGE_INDEX, 'Gestion des utilisateurs')
            ->setDefaultSort(['created_at' => 'DESC'])
            ->setSearchFields(['email', 'pseudo']);
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            // ⚠️ si ton champ s’appelle autrement (ex: verified, isVerifiedAt, etc.)
            // adapte ici le nom du champ :
            ->add(BooleanFilter::new('isVerified', 'Compte vérifié'));
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            // on évite de créer / supprimer des users via l’admin (plus safe)
            ->disable(Action::NEW, Action::DELETE)
            ->update(Crud::PAGE_INDEX, Action::EDIT, function (Action $action) {
                return $action->setLabel('Modifier le pseudo');
            });
    }

    public function configureFields(string $pageName): iterable
    {
        // Liste + détail
        yield IdField::new('id')
            ->onlyOnIndex();

        yield EmailField::new('email', 'Email')
            // visible partout, mais non modifiable dans le form
            ->setFormTypeOption('disabled', true);

        yield TextField::new('pseudo', 'Pseudo');
        // <- c’est le seul champ vraiment modifiable dans le formulaire

        yield ArrayField::new('roles', 'Rôles')
            ->onlyOnIndex();

        // Champ de vérification (visible mais pas éditable)
        yield BooleanField::new('isVerified', 'Vérifié')
            ->hideOnForm(); // on l’affiche en liste, mais pas dans le form

        yield DateTimeField::new('created_at', 'Créé le')
            ->hideOnForm();
    }
}
