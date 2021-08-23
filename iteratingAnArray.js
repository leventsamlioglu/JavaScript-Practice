const numbers = ["x", "y", "z"];

for (let number of numbers) console.log(number);

numbers.forEach(function (number, index, array) {
  console.log(index, number, array);
});

numbers.forEach((number, index, array) => console.log(index, number, array));
