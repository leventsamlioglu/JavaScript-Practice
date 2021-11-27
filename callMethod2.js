const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

// This will return John Doe,Oslo,Norway
console.log(person.fullName.call(person1, "Oslo", "Norway"));

//-------------------------------------------------------------------------------

const calc = {
  multiply: function (a, b) {
    return a * b;
  },
  multiplyMany: function (...args) {
    return [].reduce.call(args, this.multiply);
  },
};

const multiplyManyBySix = calc.multiplyMany.bind(calc, 1, 2, 3);

console.log(multiplyManyBySix(4, 5, 10, 10)); // returns 12000
