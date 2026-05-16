CREATE DATABASE starlight;
USE starlight;

CREATE TABLE usuario (
 idUsuario INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(45),
 email VARCHAR(100),
 senha VARCHAR(45),
 bias VARCHAR(45)
);

CREATE TABLE quiz (
 idQuiz INT PRIMARY KEY AUTO_INCREMENT,
 nomeQuiz VARCHAR(50),
 descricao VARCHAR(100)
);

CREATE TABLE resultado_quiz (
idquiz_resultados INT PRIMARY KEY AUTO_INCREMENT,
acertos INT,
membros INT,
historia INT,
musicas INT,
categoria VARCHAR(50),
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
fkQuiz INT,
FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz)
);

INSERT INTO quiz (nomeQuiz, descricao) VALUES
('Quiz BTS', 'Perguntas gerais sobre o BTS');

INSERT INTO usuario (nome, email, senha, bias) VALUES
('Isabella', 'bella@gmail.com', 'Abella@123', 'Jimin');

INSERT INTO resultado_quiz (acertos, membros, historia, musicas, categoria, fkUsuario, fkQuiz)VALUES
(8, 3, 2, 3, 'Músicas', 1, 1);

SELECT * FROM usuario;
SELECT * FROM quiz;
SELECT * FROM resultado_quiz;

