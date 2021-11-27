// ----------------------
// Traditional Example
// ----------------------
// A simplistic object with its very own "this".
var obj = {
  num: 100,
};

// Setting "num" on window to show how it is NOT used.
globalThis.num = 2020; // yikes!

// A simple traditional function to operate on "this"
var add = function (a, b, c) {
  return this.num + a + b + c;
};

// call
var result = add.call(obj, 1, 2, 3); // establishing the scope as "obj"
console.log(result); // result 106

// apply
const arr = [1, 2, 3];
var result = add.apply(obj, arr); // establishing the scope as "obj"
console.log(result); // result 106

// bind
var result = add.bind(obj); // establishing the scope as "obj"
console.log(result(1, 2, 3)); // result 106

// ----------------------
// Arrow Example ***OPEN IN BROWSER***
// ----------------------

// Arrow Function
var add = (a, b, c) => this.num + a + b + c;

// call
console.log(add.call(obj, 1, 2, 3)); // result 2026

// apply
const arr1 = [1, 2, 3];
console.log(add.apply(obj, arr1)); // result 2026

// bind
const bound = add.bind(obj);
console.log(bound(1, 2, 3)); // result 2026
