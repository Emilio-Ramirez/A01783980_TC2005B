//Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.

function frecuente(arr) {
  let frecuente = arr[0]
  let frecuencia = 1
  let frecuenciaActual = 1
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        frecuenciaActual++
      }
    }
    if (frecuenciaActual > frecuencia) {
      frecuencia = frecuenciaActual
      frecuente = arr[i]
    }
    frecuenciaActual = 1
  }
  return frecuente
}

console.log(frecuente(["hola", "hola", "hola", "chau", "chau", "hola"]))
console.log(frecuente(["hola", "chau", "hola", "chau", "chau", "hola"]))
console.log(frecuente(["hola", "chau", "hola", "chau", "chau", "hola", "chau"]))
