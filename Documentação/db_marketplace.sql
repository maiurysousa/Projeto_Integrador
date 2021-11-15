CREATE TABLE `tb_usuario` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome_completo` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	`descricao` varchar(500) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_categoria` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`categoria` varchar(255) NOT NULL,
	`descricao` varchar(255) NOT NULL,
	`palavra_chave` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_produto` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`tamanho` varchar(255) NOT NULL,
	`cor` varchar(255) NOT NULL,
	`descricao` varchar(255) NOT NULL,
	`preco` DECIMAL(5,2) NOT NULL,
	`foto` varchar(255) NOT NULL,
	`usuario_id` bigint NOT NULL,
	`categoria_id` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `tb_produto` ADD CONSTRAINT `tb_produto_fk0` FOREIGN KEY (`usuario_id`) REFERENCES `tb_usuario`(`id`);

ALTER TABLE `tb_produto` ADD CONSTRAINT `tb_produto_fk1` FOREIGN KEY (`categoria_id`) REFERENCES `tb_categoria`(`id`);




