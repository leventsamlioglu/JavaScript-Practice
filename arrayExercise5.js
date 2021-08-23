const max = getMax([1, 2, 4, -2, 88]);
console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;
  return array.reduce((accumulator, current) =>
    accumulator >= current ? accumulator : current
  );
}
