<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251203190154 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE items DROP name_en, DROP name_fr, DROP description_en, DROP description_fr');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE items ADD name_en VARCHAR(255) DEFAULT NULL, ADD name_fr VARCHAR(255) DEFAULT NULL, ADD description_en LONGTEXT DEFAULT NULL, ADD description_fr LONGTEXT DEFAULT NULL');
    }
}
