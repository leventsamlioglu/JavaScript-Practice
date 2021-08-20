// If the number is divisible by 3, we get fizz.
// If the number is divisible by 5, we get Buzz.
// If the number is divisible by 3 and 5, we get fizzBuzz.

const output = fizzBuzz(11);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";

  return input;
}
