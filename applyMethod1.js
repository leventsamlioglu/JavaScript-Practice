const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));

// Outputs: John Doe,Oslo,Norway

//----------------------------------------------------------------------------------------------

const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

//----------------------------------------------------------------------------------------------

const numbers = [5, 6, 2, 3, 7];

let max = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)
let min = Math.min.apply(null, numbers);
