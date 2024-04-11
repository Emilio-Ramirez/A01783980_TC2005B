//Escribe una función que calcule el máximo común divisor de dos números.
function maximoComunDivisor(num1, num2) {
  let max = 0
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) { //Si los dos numeros no generan dividendos se guardan como maximo
      max = i
    }
  }
  return max
}

console.log(maximoComunDivisor(10, 20))
console.log(maximoComunDivisor(9, 33))
console.log(maximoComunDivisor(9, 90))
