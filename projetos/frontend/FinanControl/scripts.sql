CREATE TABLE usuarios(
id_usuario SERIAL PRIMARY KEY NOT NULL,
email VARCHAR(150),
senha VARCHAR(255) NOT NULL,
tipo_acesso INTEGER
);

CREATE TABLE categorias(
id_categoria SERIAL PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
tipo VARCHAR(300) NOT NULL,
descricao VARCHAR(300),
cor VARCHAR(100),
icone VARCHAR(255),
ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE subcategorias(
id_subcategoria SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
ativo BOOLEAN DEFAULT TRUE,
id_categoria INT,
FOREIGN KEY(id_categoria) REFERENCES categorias(id_categoria)
);


CREATE TABLE transacoes(
id_transacao SERIAL PRIMARY KEY,
valor NUMERIC(12,2) NOT NULL,
descricao TEXT,
data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
data_pagamento DATE,
data_vencimento DATE,
tipo CHAR(1),
id_categoria INT,
id_subcategoria INT,
FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria),
FOREIGN KEY (id_subcategoria) REFERENCES subcategorias(id_subcategoria)
);