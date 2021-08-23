const numbers = [1, -1, 2, 3];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);
