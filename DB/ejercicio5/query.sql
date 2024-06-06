-- Crear la base de datos
CREATE DATABASE pokemon_tcg;
USE pokemon_tcg;

-- Crear la tabla JUGADOR
CREATE TABLE JUGADOR (
    idJugador INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    edad INT NOT NULL
);

-- Crear la tabla PARTIDA
CREATE TABLE PARTIDA (
    idPartida INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL
);

-- Crear la tabla CARTA
CREATE TABLE CARTA (
    idCarta INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    tipo VARCHAR(20) NOT NULL,
    ataque INT NOT NULL,
    defensa INT NOT NULL
);

-- Crear la tabla CARTA_EN_JUEGO
CREATE TABLE CARTA_EN_JUEGO (
    idCartaEnJuego INT AUTO_INCREMENT PRIMARY KEY,
    idPartida INT NOT NULL,
    idCarta INT NOT NULL,
    FOREIGN KEY (idPartida) REFERENCES PARTIDA(idPartida),
    FOREIGN KEY (idCarta) REFERENCES CARTA(idCarta)
);
-- Insertar datos en la tabla JUGADOR
INSERT INTO JUGADOR (nombre, edad) VALUES
    ('Juan', 12), ('María', 15), ('Pedro', 10), ('Ana', 14), ('Luis', 13),
    ('Sofía', 11), ('Carlos', 16), ('Lucía', 12), ('Diego', 14), ('Valentina', 13);

-- Insertar datos en la tabla PARTIDA
INSERT INTO PARTIDA (fecha) VALUES
    ('2023-05-01'), ('2023-05-03'), ('2023-05-05'), ('2023-05-07'), ('2023-05-10'),
    ('2023-05-12'), ('2023-05-15'), ('2023-05-18'), ('2023-05-20'), ('2023-05-22');

-- Insertar datos en la tabla CARTA
INSERT INTO CARTA (nombre, tipo, ataque, defensa) VALUES
    ('Pikachu', 'Eléctrico', 60, 40), ('Charizard', 'Fuego', 90, 70), ('Blastoise', 'Agua', 80, 90),
    ('Venusaur', 'Planta', 75, 85), ('Mewtwo', 'Psíquico', 100, 80), ('Dragonite', 'Dragón', 85, 95),
    ('Gengar', 'Fantasma', 70, 60), ('Snorlax', 'Normal', 90, 100), ('Scizor', 'Acero', 80, 75),
    ('Tyranitar', 'Roca', 95, 80), ('Blaziken', 'Fuego', 85, 70), ('Gardevoir', 'Psíquico', 75, 80),
    ('Swampert', 'Agua', 90, 85), ('Sceptile', 'Planta', 80, 75), ('Rayquaza', 'Dragón', 105, 90);

-- Insertar datos en la tabla CARTA_EN_JUEGO
INSERT INTO CARTA_EN_JUEGO (idPartida, idCarta) VALUES
    (1, 1), (1, 2), (1, 3), (2, 4), (2, 5), (3, 6), (3, 7), (4, 8), (4, 9), (5, 10),
    (5, 11), (6, 12), (6, 13), (7, 14), (7, 15), (8, 1), (8, 4), (9, 7), (9, 10), (10, 13);
