// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.name = function () {
    return this.firstName + " " + this.lastName;
  };
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");

// Display full name
console.log("My father is " + myFather.name());
