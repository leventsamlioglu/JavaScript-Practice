function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
console.log("fn_inside", fn_inside);
// it
result = fn_inside(5); // returns 8
console.log("result", result);

result1 = outside(3)(5); // returns 8
console.log("result1", result1);

//------------------------------------------------------------------------------------------------

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41
