const numbers = [1, 2, undefined, false, 3, NaN, "", "a", null, undefined, 0];

let filtered = numbers.filter((x) => !!x);
// let filtered = numbers.filter((x) => x);

console.log(filtered);

filtered = numbers.filter((x) => !!x || x === 0);

console.log(filtered);

// Outputs:
// [ 1, 2, 3, 'a' ]
// [ 1, 2, 3, 'a', 0 ]
