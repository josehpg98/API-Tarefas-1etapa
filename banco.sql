create table pessoa (
	codigo serial not null primary key,
	nome varchar(50) not null,
    cidade varchar(50) not null,
    uf varchar(2) not null
);
create table tarefa (
	codigo serial not null primary key,
	titulo varchar(50) not null,
	descricao varchar(150) not null,
	codigo_pessoa serial not null,
	foreign key (codigo_pessoa) REFERENCES pessoa (codigo)
);

insert into tarefa(codigo, titulo, descricao,codigo_pessoa) values (1, 'mercado','comprar feijao',1)
insert into pessoa(codigo, nome, cidade, uf) values (1, 'jose da silva', 'passo fundo', 'RS')
