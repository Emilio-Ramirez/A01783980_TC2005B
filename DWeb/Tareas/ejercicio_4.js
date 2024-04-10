//Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.
function mayuscula(str) {
  let newStr = str.split(' ')
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1)// Cambiamos la primera letra en mayusvcula y le sumamos el restante desuesd de la primera letra
  }
  return newStr.join(' ')
}

console.log(mayuscula('hola mundo'))
console.log(mayuscula('hola como estas'))
console.log(mayuscula('hola como Estas bien y tu')) 
