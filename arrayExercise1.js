const numbers = arrayFromRange(1, 5);

console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}
// Outputs: [1,2,3,4,5]
