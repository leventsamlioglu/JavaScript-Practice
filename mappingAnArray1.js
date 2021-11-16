let arr = [2, 3, 5, 7];

arr.map(function (element, index, array) {
  console.log(element);
  console.log(index);
  console.log(array);
  return element;
}, 80);

// arr.map(x);

// function x(element, index, array) {
//   console.log(element);
//   console.log(index);
//   console.log(array);
//   return element;
// }
