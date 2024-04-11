//Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.

function hackerSpeak(str) {
  let hackerStr = str.replace(/a/g, '4').replace(/e/g, '3').replace(/i/g, '1').replace(/o/g, '0').replace(/s/g, '5');
  return hackerStr;
}

console.log(hackerSpeak('Javascript es divertido')); // J4v45cr1pt 35 d1v3rt1d0
console.log(hackerSpeak('Hola, soy un hacker')); // H0l4, 50y un h4ck3r
console.log(hackerSpeak('Esto es un hacker')); // 3st0 35 un h4ck3r
