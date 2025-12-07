<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251207152051 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Ajout des colonnes code et translation_key sur status + insertion des 3 statuts par défaut';
    }

    public function up(Schema $schema): void
    {
        $this->addSql("INSERT INTO status (code, translation_key) VALUES (0, 'status.hidden')");
        $this->addSql("INSERT INTO status (code, translation_key) VALUES (1, 'status.online_site')");
        $this->addSql("INSERT INTO status (code, translation_key) VALUES (2, 'status.connected_ingame')");
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DELETE FROM status WHERE code IN (0, 1, 2)');

        $this->addSql('ALTER TABLE status DROP code, DROP translation_key');
    }
}
