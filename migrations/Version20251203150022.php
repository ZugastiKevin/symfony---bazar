<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251203150022 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE items ADD search_names JSON DEFAULT NULL, ADD name_en VARCHAR(255) DEFAULT NULL, ADD name_fr VARCHAR(255) DEFAULT NULL, ADD description_en LONGTEXT DEFAULT NULL, ADD description_fr LONGTEXT DEFAULT NULL, ADD image_url VARCHAR(255) DEFAULT NULL, ADD image_name VARCHAR(255) DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', ADD type VARCHAR(100) DEFAULT NULL, ADD tradable TINYINT(1) NOT NULL, ADD category VARCHAR(255) DEFAULT NULL, ADD product_category VARCHAR(255) DEFAULT NULL, DROP name, DROP describe_item, CHANGE img_item unique_name VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE items ADD name VARCHAR(255) NOT NULL, ADD img_item VARCHAR(255) DEFAULT NULL, ADD describe_item VARCHAR(255) NOT NULL, DROP search_names, DROP unique_name, DROP name_en, DROP name_fr, DROP description_en, DROP description_fr, DROP image_url, DROP image_name, DROP updated_at, DROP type, DROP tradable, DROP category, DROP product_category');
    }
}
