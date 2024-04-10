//buubble sor for an array

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] > array[j + 1]) { //if the number is bigger than the next one, then swap
      let aux = array[j] //auxiliar variable
      array[j] = array[j + 1]
      array[j + 1] = aux
    }
  }
}
