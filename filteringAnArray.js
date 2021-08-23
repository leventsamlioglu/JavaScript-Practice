const numbers = [1, -1, 2, 3];

const filteredValue = numbers.filter((value) => value >= 0);
const filteredIndex = numbers.filter((_, index) => index > 1);

console.log(filteredValue);
console.log(filteredIndex);
