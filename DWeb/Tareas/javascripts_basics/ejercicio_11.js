//Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.

function ordenAlfabetico(arr) {
  return arr.sort();
}


console.log(ordenAlfabetico(["hola", "adios", "hola", "adios", "hola", "adios"]))
console.log(ordenAlfabetico(["lo mismo", "lo mismo", "lo mismo", "lo mismo", "lo mismo", "lo mismo"]))
console.log(ordenAlfabetico(["hola", "adios", "hola", "adios", "hola", "adios", "lo mismo", "lo  emismo", "lo mismo", "lo mismo", "lo mismo", "lo mismo"])) 
