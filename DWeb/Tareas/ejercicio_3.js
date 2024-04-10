// Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.

//function that changes the array
function reverseArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let aux = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = aux
  }
  return arr
}

//function that returns a new reverseArray
function newReverseArray(arr) {
  let newArray = [arr]
  for (let i = 0; i < newArray.lenght / 2; i++) {
    let aux = newArray[i]
    newArray[i] = newArray[newArray.length - 1 - i]
    newArray[newArray.length - 1 - i] = aux
  }
  return newArray
}

console.log('reverse array sin cambio de array', reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log('reverse array con nuevo array', newReverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
