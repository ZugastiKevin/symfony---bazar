<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251206111125 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE items ADD ducats INT DEFAULT NULL');
        $this->addSql('ALTER TABLE parts ADD owner_id INT NOT NULL, ADD unique_name VARCHAR(255) NOT NULL, DROP parent_unique_name');
        $this->addSql('ALTER TABLE parts ADD CONSTRAINT FK_6940A7FE7E3C61F9 FOREIGN KEY (owner_id) REFERENCES items (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_6940A7FE98AB450A ON parts (unique_name)');
        $this->addSql('CREATE INDEX IDX_6940A7FE7E3C61F9 ON parts (owner_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE items DROP ducats');
        $this->addSql('ALTER TABLE parts DROP FOREIGN KEY FK_6940A7FE7E3C61F9');
        $this->addSql('DROP INDEX UNIQ_6940A7FE98AB450A ON parts');
        $this->addSql('DROP INDEX IDX_6940A7FE7E3C61F9 ON parts');
        $this->addSql('ALTER TABLE parts ADD parent_unique_name VARCHAR(255) DEFAULT NULL, DROP owner_id, DROP unique_name');
    }
}
