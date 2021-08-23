const first = [1, 2, 3, 4];
// const second = [{ id: 1 }];   // copying reference
const second = [5, 6, 7, 8]; // copying value

const combined = first.concat(second);
// first[0].id = 10;
first[3] = "a";

const slice = combined.slice(2, 4);

console.log(combined);
console.log(slice);
console.log(first);
