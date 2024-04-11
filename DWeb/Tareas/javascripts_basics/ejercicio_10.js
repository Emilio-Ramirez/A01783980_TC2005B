//Escribe una función que revise si una cadena de texto es un palíndromo o no.

function palindromo(str) {
  // Eliminar espacios en blanco y convertir a minúsculas
  let cleanStr = str.replace(/\s/g, '').toLowerCase();

  // Invertir y comparar
  let reversedStr = cleanStr.split('').reverse().join('');

  if (cleanStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromo('oso')); // true
console.log(palindromo('hola')); // false
console.log(palindromo('anita lava la tina')); // true
