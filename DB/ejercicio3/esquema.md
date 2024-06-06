## Made with Marmaid is down the page

``` mermaid
erDiagram
    JUGADOR ||--o{ PARTIDA : jugador
    JUGADOR ||--o{ MAZO : mazo
    PARTIDA ||--|{ CARTA_EN_JUEGO : partida
    CARTA ||--|| CARTA_EN_JUEGO : carta
    MAZO ||--|{ CARTA : cartas
    CARTA {
        int idCarta PK
        string nombre
        int hp
        int ataque
        int defensa
        string tipo
        string debilidad
        string resistencia
    }
    JUGADOR {
        int idJugador PK
        string nombre
        int monedas
        int medallas
    }
    PARTIDA {
        int idPartida PK
        date fecha
        int rondas
    }
    MAZO {
        int idMazo PK
        int idJugador FK
    }
    CARTA_EN_JUEGO {
        int idCartaEnJuego PK
        int idPartida FK
        int idCarta FK
    }
```
