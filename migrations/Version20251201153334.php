<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251201153334 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categorys (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE items (id INT AUTO_INCREMENT NOT NULL, parts_id INT NOT NULL, categorys_id INT NOT NULL, name VARCHAR(255) NOT NULL, img_item VARCHAR(255) DEFAULT NULL, describe_item VARCHAR(255) NOT NULL, INDEX IDX_E11EE94D4E81F03D (parts_id), INDEX IDX_E11EE94DA96778EC (categorys_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE items_shop_items (items_id INT NOT NULL, shop_items_id INT NOT NULL, INDEX IDX_B8108D286BB0AE84 (items_id), INDEX IDX_B8108D28B0085412 (shop_items_id), PRIMARY KEY(items_id, shop_items_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE parts (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE shop (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, UNIQUE INDEX UNIQ_AC6A4CA2A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE shop_items (id INT AUTO_INCREMENT NOT NULL, shop_id INT DEFAULT NULL, price INT NOT NULL, sell_or_buy TINYINT(1) NOT NULL, stocks INT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_2608B31F4D16C4DD (shop_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE items ADD CONSTRAINT FK_E11EE94D4E81F03D FOREIGN KEY (parts_id) REFERENCES parts (id)');
        $this->addSql('ALTER TABLE items ADD CONSTRAINT FK_E11EE94DA96778EC FOREIGN KEY (categorys_id) REFERENCES categorys (id)');
        $this->addSql('ALTER TABLE items_shop_items ADD CONSTRAINT FK_B8108D286BB0AE84 FOREIGN KEY (items_id) REFERENCES items (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE items_shop_items ADD CONSTRAINT FK_B8108D28B0085412 FOREIGN KEY (shop_items_id) REFERENCES shop_items (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE shop ADD CONSTRAINT FK_AC6A4CA2A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE shop_items ADD CONSTRAINT FK_2608B31F4D16C4DD FOREIGN KEY (shop_id) REFERENCES shop (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE items DROP FOREIGN KEY FK_E11EE94D4E81F03D');
        $this->addSql('ALTER TABLE items DROP FOREIGN KEY FK_E11EE94DA96778EC');
        $this->addSql('ALTER TABLE items_shop_items DROP FOREIGN KEY FK_B8108D286BB0AE84');
        $this->addSql('ALTER TABLE items_shop_items DROP FOREIGN KEY FK_B8108D28B0085412');
        $this->addSql('ALTER TABLE shop DROP FOREIGN KEY FK_AC6A4CA2A76ED395');
        $this->addSql('ALTER TABLE shop_items DROP FOREIGN KEY FK_2608B31F4D16C4DD');
        $this->addSql('DROP TABLE categorys');
        $this->addSql('DROP TABLE items');
        $this->addSql('DROP TABLE items_shop_items');
        $this->addSql('DROP TABLE parts');
        $this->addSql('DROP TABLE shop');
        $this->addSql('DROP TABLE shop_items');
    }
}
