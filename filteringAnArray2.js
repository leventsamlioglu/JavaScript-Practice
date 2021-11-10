function filterArray(array) {
  return array.filter((x) => !!x || x === 0);
}

console.log(
  filterArray([1, 2, undefined, false, 3, NaN, "", "a", null, undefined, 0])
);

// Outputs: [ 1, 2, 3, 'a', 0 ]
