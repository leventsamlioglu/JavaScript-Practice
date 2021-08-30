const names = ["Alice", "Bob", "Charlie"];
const reversed = names.reverse();

console.log("names", names);
console.log("reversed", reversed);

const names2 = ["Alice", "Bob", "Charlie"];
const reversed2 = [...names2].reverse();

console.log("names2", names2);
// ["Alice", "Bob", "Charlie"]
console.log("reversed2", reversed2);
// ["Charlie", "Bob", "Alice"]
