CREATE DATABASE CCB;
USE CCB;

CREATE TABLE musico(
	idMusico INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    comumIgreja VARCHAR(45),
    idade TINYINT,
    dtNasc DATE,
    fkEncarregado INT,
    CONSTRAINT fkMusicoEncarregado FOREIGN KEY (fkEncarregado)
		REFERENCES musico (idMusico)
);


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

SELECT *FROM usuario;
TRUNCATE usuario;

ALTER TABLE musico DROP CONSTRAINT fkMusicoEncarregado;
DROP TABLE musico;

CREATE TABLE instrumento(
	idInstrumento INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    preco FLOAT,
    fkMusico INT,
    CONSTRAINT fkMusicoInstrumento FOREIGN KEY (fkMusico)
		REFERENCES musico (idMusico)
);
ALTER TABLE instrumento DROP CONSTRAINT fkMusicoInstrumento;


INSERT INTO musico (nome, comumIgreja, idade, dtNasc, fkEncarregado) VALUES 
	('Josué Bernardo da Silva', 'Cidade Ademar', 56, '1965-03-25', NULL),
    ('Phelipe Bruione da Silva', 'Cidade Ademar', 19, '2005-01-22', 1),
    ('Daniel Oliveira', 'Cidade Ademar', 22, '2002-10-21', 1),
    ('Arthur Souza', 'Cidade Ademar', 15, '2009-01-09', 1),
    ('Pietro Mariote', 'Cidade Ademar', 12, '2011-08-06', 1),
    ('Sergio Gabriel', 'Cidade Ademar', 45, '1979-12-03', 1);
    
SELECT *FROM musico;
    
INSERT INTO instrumento (nome) VALUES
	('Violino'),
    ('Viola'),
    ('Violoncelo'),
    ('Flauta Transversal'),
    ('Oboé'),
    ('Oboé D''Amoré'),
    ('Corne Inglês'),
    ('Fagote'),
    ('Clariente'),
    ('Clarinete Alto'),
    ('Clarinete Baixo'),
    ('Saxofone Soprano'),
    ('Saxofone Contralto'),
    ('Saxofone Tenor'),
    ('Saxofone Barítono'),
    ('Trompete'),
    ('Cornet'),
    ('Flugelhorn'),
    ('Trompa'),
    ('Trombone'),
    ('Trombonito'),
    ('Barítono'),
    ('Eufônio'),
    ('Tuba');
SELECT *FROM instrumento;
UPDATE instrumento SET fkMusico = 1 WHERE idInstrumento = 1;
UPDATE instrumento SET fkMusico = 3 WHERE idInstrumento = 2;

SELECT musico.nome AS Musico,
	   instrumento.nome AS Instrumento,
       comumIgreja AS Comum
       FROM musico
       JOIN instrumento
       ON instrumento.fkMusico = musico.idMusico;
	
SELECT musico.nome AS Musico,
	   instrumento.nome AS Instrumento,
       musico.comumIgreja AS Comum,
       encarregado.nome AS Encarregado
       FROM musico
       JOIN instrumento
       ON instrumento.fkMusico = musico.idMusico
       JOIN musico AS encarregado
       ON encarregado.idMusico = musico.fkEncarregado;
       
