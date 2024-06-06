-- Crear la base de datos
CREATE DATABASE juego_cartas;
USE juego_cartas;

-- Crear la tabla USUARIO
CREATE TABLE USUARIO (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    puntaje_maximo INT,
    usr_rank VARCHAR(50),
    average_dishes_per_event FLOAT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

-- Crear la tabla PARTIDA
CREATE TABLE PARTIDA (
    id_partida INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE,
    puntaje INT,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES USUARIO(id_usuario)
);

-- Crear la tabla SESION
CREATE TABLE SESION (
    id_sesion INT AUTO_INCREMENT PRIMARY KEY,
    token VARCHAR(100) UNIQUE,
    fecha_inicio DATE,
    fecha_expiracion DATE,
    ultima_actividad DATE,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES USUARIO(id_usuario)
);

-- Crear la tabla CARTAS
CREATE TABLE CARTAS (
    id_carta INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    valor_nutrimental INT,
    tipo VARCHAR(50)
);

-- Crear la tabla CARTAS_EN_PARTIDA
CREATE TABLE CARTAS_EN_PARTIDA (
    id_carta_en_partida INT AUTO_INCREMENT PRIMARY KEY,
    id_partida INT,
    id_carta INT,
    id_receta INT,
    FOREIGN KEY (id_partida) REFERENCES PARTIDA(id_partida),
    FOREIGN KEY (id_carta) REFERENCES CARTAS(id_carta),
    FOREIGN KEY (id_receta) REFERENCES RECETA(id_receta)
);

-- Crear la tabla NIVEL
CREATE TABLE NIVEL (
    id_nivel INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100)
);

-- Crear la tabla RECETA
CREATE TABLE RECETA (
    id_receta INT AUTO_INCREMENT PRIMARY KEY,
    es_principal BOOLEAN DEFAULT false,
    belongs_to_level INT,
    ingredientes JSON DEFAULT '{"side": {}, "verduras": {}, "protein": {}, "utils": {}}',
    FOREIGN KEY (belongs_to_level) REFERENCES NIVEL(id_nivel)
);


-- Vista para obtener los usuarios con su puntaje máximo y nivel
CREATE VIEW v_usuarios_puntaje_nivel AS
SELECT u.username, u.puntaje_maximo, u.usr_rank
FROM USUARIO u;

-- Vista para obtener las partidas con los detalles de las cartas jugadas
CREATE VIEW v_partidas_cartas AS
SELECT p.id_partida, p.fecha, c.nombre, c.tipo, c.valor_nutrimental
FROM PARTIDA p
JOIN CARTAS_EN_PARTIDA cp ON p.id_partida = cp.id_partida
JOIN CARTAS c ON cp.id_carta = c.id_carta;

-- Vista para obtener las recetas principales de cada nivel
CREATE VIEW v_recetas_principales AS
SELECT n.titulo, r.id_receta, r.ingredientes
FROM RECETA r
JOIN NIVEL n ON r.belongs_to_level = n.id_nivel
WHERE r.es_principal = true;

