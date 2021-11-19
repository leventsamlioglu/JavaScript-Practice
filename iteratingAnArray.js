const numbers = ["x", "y", "z"];

for (let number of numbers) console.log(number); // x y z

numbers.forEach((number, index, array) => console.log(index, number, array));

// 0 x [ 'x', 'y', 'z' ]
// 1 y [ 'x', 'y', 'z' ]
// 2 z [ 'x', 'y', 'z' ]
