//Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].

function factoriza(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      factors.push(i);
    }
  }
  return factors;
}

console.log(factoriza(12))
console.log(factoriza(15))
console.log(factoriza(20))
