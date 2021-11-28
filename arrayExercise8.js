const words = "Hello world and Hello everyone";
counts = {};
words.split(" ").forEach((v) => (counts[v] = counts[v] ? ++counts[v] : 1));
console.log(counts);
// { Hello: 2, world: 1, and: 1, everyone: 1 }

//-----------------------------------------------------------------

const arr = words.split(" ");
var map = {};

arr
  .join("")
  .split("")
  .forEach((e) => (map[e] = (map[e] || 0) + 1));
console.log(map);

// { H: 2, e: 5, l: 5, o: 4, w: 1, r: 2, d: 2, a: 1, n: 2, v: 1, y: 1 }

//-----------------------------------------------------------------

function findLongestWord(str) {
  const arr = str
    .split(" ")
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
  const words = str.split(" ").filter((x) => x.length === arr.length);
  return console.log(arr, arr.length, words); // function 8 [ 'function', 'sentence' ]
}
findLongestWord(
  "Create a function that takes the longest word from a sentence"
);
