function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
// it
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8

//----------------------------------------------------------------------------------------------

function addSquares(a, b) {
  function square(q) {
    return q * q;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41

//----------------------------------------------------------------------------------------------

function A(xx) {
  function B(yy) {
    function C(zz) {
      console.log(xx + yy + zz);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)
