//Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.

function cadenaCorta(arr) {
  let min = arr[0].length;
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i.lenght] < min) {
      min = arr[i].length;
    }
  }
  return min;
}


console.log(cadenaCorta(["hola", "adios", "hola", "adios", "hola", "adios"]))
console.log(cadenaCorta(["lo mismo", "lo mismo", "lo mismo", "lo mismo", "lo mismo", "lo mismo"]))
console.log(cadenaCorta(["hola", "adios", "hola", "adios", "hola", "adios", "lo mismo", "lo mismo", "lo mismo", "lo mismo", "lo mismo", "lo mismo"]))
