const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];

const combined = ["a", ...first, "b", ...second];
const copy = [...combined];

console.log(combined); // [ 'a', 1, 2, 3, 4, 'b', 5, 6, 7, 8 ]
console.log(copy === combined); // false
