//Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.

function ordenDescendente(arr) {
  let newArray = [...arr]
  newArray.sort((a, b) => b - a)
  return newArray
}


console.log(ordenDescendente([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(ordenDescendente([4, 3, 2, 1, 7, 82, 9]))
console.log(ordenDescendente([1, 2, 3, -4, 5, 6, 7, 8, 9, 10, 11])) 
