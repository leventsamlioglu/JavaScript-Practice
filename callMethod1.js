const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "Mary Doe"
console.log(person.fullName.call(person2));

//----------------------------------------------------------------------------------------------

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = "toy";
}

const cheese = new Food("feta", 5);
const fun = new Toy("robot", 40);

//----------------------------------------------------------------------------------------------

const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Fail" },
];

for (let i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      console.log(
        "#" +
          i +
          " " +
          this.species + // #0 Lion: King
          ": " +
          this.name
      ); // #1 Whale: Fail
    };
    this.print();
  }.call(animals[i], i));
}

//----------------------------------------------------------------------------------------------

function greet() {
  const reply = [
    this.animal,
    "typically sleep between",
    this.sleepDuration,
  ].join(" ");
  console.log(reply);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj); // cats typically sleep between 12 and 16 hours
