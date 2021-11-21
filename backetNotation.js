const userChosenKeyName = "level";

let person = {
  "first name": "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  [userChosenKeyName]: "...",
  greet: function () {
    alert("Hi there!");
  },
  1.5: "hello",
};

delete person.age;
person.isAdmin = true;

const keyName = "first name";

console.log(person[keyName]); // Max
console.log(person[1.5]); // hello
console.log(person);
// {
//   'first name': 'Max',
//   hobbies: [ 'Sports', 'Cooking' ],
//   level: '...',
//   greet: [Function: greet],
//   '1.5': 'hello',
//   isAdmin: true
// }
