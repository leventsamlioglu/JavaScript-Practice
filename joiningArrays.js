const numbers = [1, 2, 3, 4];
const joined = numbers.join(",");
console.log(typeof joined, joined);
// string 1,2,3,4

const message = "This is my first message";
const parts = message.split(" ");
console.log(typeof parts, parts);
// object [ 'This', 'is', 'my', 'first', 'message' ]

const combined = parts.join("-");
console.log(combined);
// This-is-my-first-message
