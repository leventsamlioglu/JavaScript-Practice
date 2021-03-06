// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create 2 Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// Add nationality property to first object
myFather.nationality = "English";

// Display nationality
console.log("My father is " + myFather.nationality);

// Outputs: My father is English
