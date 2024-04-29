const express = require('express');
const app = express();
app.use(express.json());

// Lista de cartas
let cards = [
  { id: 1, name: "Carta 1", type: "Tipo 1", attack: 100, defense: 50 },
  { id: 2, name: "Carta 2", type: "Tipo 2", attack: 80, defense: 70 },
  { id: 3, name: "Carta 3", type: "Tipo 3", attack: 120, defense: 40 }
];

// Ruta inicial
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// Ruta para obtener todas las cartas
app.get('/cards', (req, res) => {
  if (cards.length === 0) {
    return res.status(200).json({ message: 'No hay cartas' });
  }
  return res.status(200).json(cards);
});

// Ruta para obtener una carta por ID
app.get('/cards/:id', (req, res) => {
  const card = cards.find(c => c.id === parseInt(req.params.id));
  if (!card) {
    return res.status(404).json({ message: 'Carta no encontrada' });
  }
  return res.status(200).json(card);
});

// Ruta para agregar nuevas cartas
app.post('/cards', (req, res) => {
  const newCards = Array.isArray(req.body) ? req.body : [req.body];

  // Verificar que las cartas tengan todos los atributos
  for (const card of newCards) {
    if (!card.id || !card.name || !card.type || !card.attack || !card.defense) {
      return res.status(400).json({ message: 'Datos de carta incompletos' });
    }
  }

  // Verificar que no existan las cartas en la lista
  for (const newCard of newCards) {
    if (cards.find(c => c.id === newCard.id)) {
      return res.status(409).json({ message: `La carta con ID ${newCard.id} ya existe` });
    }
  }

  // Agregar las cartas a la lista
  cards = [...cards, ...newCards];
  return res.status(201).json({ message: 'Cartas agregadas correctamente' });
});

// Ruta para borrar una carta por ID
app.delete('/cards/:id', (req, res) => {
  const cardIndex = cards.findIndex(c => c.id === parseInt(req.params.id));
  if (cardIndex === -1) {
    return res.status(404).json({ message: 'Carta no encontrada' });
  }
  cards.splice(cardIndex, 1);
  return res.status(200).json({ message: 'Carta borrada correctamente' });
});

// Ruta para actualizar una carta por ID
app.put('/cards/:id', (req, res) => {
  const cardIndex = cards.findIndex(c => c.id === parseInt(req.params.id));
  if (cardIndex === -1) {
    return res.status(404).json({ message: 'Carta no encontrada' });
  }

  // Actualizar solo los campos que vienen en el json
  const updatedCard = { ...cards[cardIndex], ...req.body };
  cards[cardIndex] = updatedCard;

  return res.status(200).json(updatedCard);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
