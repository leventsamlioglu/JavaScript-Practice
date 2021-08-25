// function sum() {
//   let total = 0;
//   for (let value of arguments) total += value;
//   return total;
// }

function sum(...args) {
  return args.reduce((a, b) => a + b);
}

console.log("sum", sum(1, 2, 3, 4, 5));
