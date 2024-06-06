# Made with Marmaid

``` mermaid
classDiagram
    class JUGADOR {
        -idJugador: int
        -nombre: string
        -edad: int
    }
    class PARTIDA {
        -idPartida: int
        -fecha: date
    }
    class CARTA {
        -idCarta: int
        -nombre: string
        -tipo: string
        -ataque: int
        -defensa: int
    }
    class CARTA_EN_JUEGO {
        -idCartaEnJuego: int
        -idPartida: int
        -idCarta: int
    }
    JUGADOR "1" --o "*" PARTIDA
    PARTIDA "1" --o "*" CARTA_EN_JUEGO
    CARTA "1" --o "*" CARTA_EN_JUEGO
```
