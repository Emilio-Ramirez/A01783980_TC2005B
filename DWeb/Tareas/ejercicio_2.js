//buubble sor for an array
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) { //if the number is bigger than the next one, then swap
        let aux = array[j] //auxiliar variable
        array[j] = array[j + 1]
        array[j + 1] = aux
      }
    }
  }
  return array
}

console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(bubbleSort([4, 3, 2, 1, 7, 82, 9]))
console.log(bubbleSort([1, 2, 3, -4, 5, 6, 7, 8, 9, 10, 11])) 
