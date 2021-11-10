const numbers = [1, 2, undefined, false, 3, NaN, "", "a", null, undefined, 0];

for (number of numbers) {
  if (!number) {
    delete numbers[numbers.indexOf(number)];
  }
}

console.log(numbers);

// Outputs: [ 1, 2, <2 empty items>, 3, NaN, <1 empty item>, 'a', <3 empty items> ]
