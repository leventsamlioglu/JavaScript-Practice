console.log(Array.from("foo"));
// [ "f", "o", "o" ]

const set = new Set(["foo", "bar", "baz", "foo"]);
console.log(Array.from(set));
// [ "foo", "bar", "baz" ]

const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
console.log(Array.from(map));
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
console.log(Array.from(mapper.values()));
// ['a', 'b'];

console.log(Array.from(mapper.keys()));
// ['1', '2'];

function f() {
  return console.log(Array.from(arguments));
}

f(1, 2, 3);

// [ 1, 2, 3 ]

// Using an arrow function as the map function to
// manipulate the elements
console.log(Array.from([1, 2, 3], (x) => x + x));
// [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
console.log(Array.from({ length: 5 }, (v, i) => i));
// [0, 1, 2, 3, 4]

// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
const range = (start, stop, step) =>
  console.log(
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    )
  );

// Generate numbers range 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
// let x= range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
//   String.fromCharCode(x)
// );
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
