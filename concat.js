const arr = [1, [2, 3], 4, [5, 6], 7];
const flat = [].concat(...arr);
console.log(flat);

// Outputs:[1, 2, 3, 4, 5, 6, 7]
