// Constructor function for Person objects
function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  };
}
// Create a Person object
const myMother = new Person("Sally", "Rally", 48, "green");

// Change last name
myMother.changeName("Doe");

// Display last name
console.log("My mother's last name is " + myMother.lastName);
