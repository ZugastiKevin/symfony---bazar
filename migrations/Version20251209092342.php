<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251209092342 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE items DROP FOREIGN KEY FK_E11EE94DA96778EC');
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, UNIQUE INDEX uniq_category_name (name), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE status (id INT AUTO_INCREMENT NOT NULL, code INT NOT NULL, translation_key VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('DROP TABLE categorys');
        $this->addSql('DROP INDEX IDX_E11EE94DA96778EC ON items');
        $this->addSql('ALTER TABLE items ADD fusion_limit INT DEFAULT NULL, ADD ducats INT DEFAULT NULL, ADD wikia_url VARCHAR(255) DEFAULT NULL, DROP search_names, DROP image_url, DROP category, CHANGE parts_id parts_id INT DEFAULT NULL, CHANGE categorys_id category_id INT NOT NULL, CHANGE tradable is_prime TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE items ADD CONSTRAINT FK_E11EE94D12469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('CREATE INDEX IDX_E11EE94D12469DE2 ON items (category_id)');
        $this->addSql('ALTER TABLE parts ADD owner_id INT NOT NULL, CHANGE name unique_name VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE parts ADD CONSTRAINT FK_6940A7FE7E3C61F9 FOREIGN KEY (owner_id) REFERENCES items (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_6940A7FE98AB450A ON parts (unique_name)');
        $this->addSql('CREATE INDEX IDX_6940A7FE7E3C61F9 ON parts (owner_id)');
        $this->addSql('ALTER TABLE shop_items ADD status_id INT DEFAULT NULL, ADD mod_rank INT DEFAULT NULL');
        $this->addSql('ALTER TABLE shop_items ADD CONSTRAINT FK_2608B31F6BF700BD FOREIGN KEY (status_id) REFERENCES status (id)');
        $this->addSql('CREATE INDEX IDX_2608B31F6BF700BD ON shop_items (status_id)');
        $this->addSql('ALTER TABLE user ADD status_id INT DEFAULT NULL, DROP status');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6496BF700BD FOREIGN KEY (status_id) REFERENCES status (id)');
        $this->addSql('CREATE INDEX IDX_8D93D6496BF700BD ON user (status_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE items DROP FOREIGN KEY FK_E11EE94D12469DE2');
        $this->addSql('ALTER TABLE shop_items DROP FOREIGN KEY FK_2608B31F6BF700BD');
        $this->addSql('ALTER TABLE `user` DROP FOREIGN KEY FK_8D93D6496BF700BD');
        $this->addSql('CREATE TABLE categorys (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE status');
        $this->addSql('DROP INDEX IDX_E11EE94D12469DE2 ON items');
        $this->addSql('ALTER TABLE items ADD search_names JSON DEFAULT NULL, ADD category VARCHAR(255) DEFAULT NULL, DROP fusion_limit, DROP ducats, CHANGE parts_id parts_id INT NOT NULL, CHANGE category_id categorys_id INT NOT NULL, CHANGE wikia_url image_url VARCHAR(255) DEFAULT NULL, CHANGE is_prime tradable TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE items ADD CONSTRAINT FK_E11EE94DA96778EC FOREIGN KEY (categorys_id) REFERENCES categorys (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_E11EE94DA96778EC ON items (categorys_id)');
        $this->addSql('ALTER TABLE parts DROP FOREIGN KEY FK_6940A7FE7E3C61F9');
        $this->addSql('DROP INDEX UNIQ_6940A7FE98AB450A ON parts');
        $this->addSql('DROP INDEX IDX_6940A7FE7E3C61F9 ON parts');
        $this->addSql('ALTER TABLE parts DROP owner_id, CHANGE unique_name name VARCHAR(255) NOT NULL');
        $this->addSql('DROP INDEX IDX_2608B31F6BF700BD ON shop_items');
        $this->addSql('ALTER TABLE shop_items DROP status_id, DROP mod_rank');
        $this->addSql('DROP INDEX IDX_8D93D6496BF700BD ON `user`');
        $this->addSql('ALTER TABLE `user` ADD status VARCHAR(255) NOT NULL, DROP status_id');
    }
}
