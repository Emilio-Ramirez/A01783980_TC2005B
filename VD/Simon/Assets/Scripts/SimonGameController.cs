using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SimonGameController : MonoBehaviour
{
    public List<int> sequence; //Para almacenar la secuencia de colores.
    public int currentLevel; //Para llevar el registro del nivel actual.
    public int highestLevel; //Para almacenar el nivel más alto alcanzado.
    public int score; //Para llevar el puntaje del jugador.
    public GameObject[] colorButtons; //Para hacer referencia a los botones de colores en la escena.// Start is called before the first frame update
    void Start()
    {
            // Inicializar variables
            sequence = new List<int>();
            currentLevel = 1;
            highestLevel = 0;
            score = 0;

            // Iniciar el juego
            StartGame();
    }
    private void StartGame()
    {
        // Limpiar la secuencia de colores
        sequence.Clear();

        // Agregar un nuevo color aleatorio a la secuencia
        AddRandomColorToSequence();

        // Mostrar la secuencia de colores al jugador
        ShowSequence();

        // Esperar la respuesta del jugador
        GetPlayerInput();
    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
