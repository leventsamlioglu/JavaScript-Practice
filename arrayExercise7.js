let myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
let myArrayWithNoDuplicates = myArray.reduce(function (
  previousValue,
  currentValue
) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue);
  }
  return previousValue;
},
[]);

console.log(myArrayWithNoDuplicates.sort());
// [ 'a', 'b', 'c', 'd', 'e' ]
