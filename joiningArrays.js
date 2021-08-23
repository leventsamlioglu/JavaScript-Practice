const numbers = [1, 2, 3, 4];
const joined = numbers.join(",");
console.log(typeof joined, joined);

const message = "This is my first message";
const parts = message.split(" ");
console.log(typeof parts, parts);

const combined = parts.join("-");
console.log(combined);
