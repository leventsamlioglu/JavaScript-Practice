// It shows the prime numbers up to the limit

let primes = showPrimes(20);
console.log("primes", primes);

function showPrimes(limit) {
  const arr = [];
  for (let number = 1; number <= limit; number++)
    if (isPrime(number)) arr.push(number);
  return arr;
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

// Outputs: primes [ 1,  2,  3,  5, 7, 11, 13, 17, 19 ]
