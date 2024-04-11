//Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.


function potenciaDeDos(numero) {
  let potencia = 1
  while (potencia < numero) {
    potencia *= 2
  }
  return potencia === numero
}

console.log(potenciaDeDos(1))
console.log(potenciaDeDos(2))
console.log(potenciaDeDos(4))
console.log(potenciaDeDos(7))
