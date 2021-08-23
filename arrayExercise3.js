const numbers = [1, 2, 3, 4, 5];

const output = move(numbers, 1, 2);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid offset.");
    return;
  }
  const output = [...array];
  const spliced = output.splice(index, 1)[0];
  output.splice(index + offset, 0, spliced);
  return output;
}
