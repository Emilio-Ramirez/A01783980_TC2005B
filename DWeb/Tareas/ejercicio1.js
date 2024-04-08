// Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'
// indexOf busca el primer dato de la ocurrencia y el lastIndexOf busca lo mismo pero al revez tons si concuerda la misma ubicacion lo guarda
function primero(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
}

console.log(primero('abcda'))
console.log(primero('holacomoestas bien y tu, hol'))
console.log(primero('holacomoestas bien y tu, hola'))
