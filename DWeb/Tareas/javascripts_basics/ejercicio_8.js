//Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]

function duplicados(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i])
  }
  return set
}

console.log(duplicados([1, 0, 1, 1, 0, 0]))
console.log(duplicados([1, 1, 1, 1, 1, 1]))
console.log(duplicados([1, 2, 3, 4, 5, 6, 6, 6, 3]))
