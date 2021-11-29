class Hero {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.fullName = function () {
      console.log(`${this.name} ${this.lastName}`);
    };
  }
  greet() {
    return console.log(`${this.name} says hello.`);
  }
}

class Mage extends Hero {
  constructor(name, lastName, age) {
    super(name, lastName);
    this.age = age;
  }
}

const hero1 = new Mage("Vice", "Verca", 33);
const hero2 = new Mage("Leo", "Marvel", 22);
hero1.age = 11;
hero1.fullName();
hero2.greet();
console.log("hero1", hero1);
console.log("hero2", hero2);

// function Hero(name, lastName) {
//   this.name = name;
//   this.lastName = lastName;
//   this.fullname = function () {
//     console.log(`${this.name} ${this.lastName} `);
//   };
// }

// // Adding a method to the constructor of Hero
// Hero.prototype.greet = function () {
//   return console.log(`${this.name} says hello.`);
// };

// function Mage(name, lastName, age) {
//   // Chain constructor with call
//   Hero.call(this, name, lastName);

//   this.age = age;
// }
// Mage.prototype = Object.create(Hero.prototype);

// const hero1 = new Mage("Vice", "Verca", 33);
// const hero2 = new Mage("Leo", "Marvel", 22);
// hero1.age = 11;

// console.log("hero1", hero1);
// console.log("hero2", hero2);
// hero1.fullname();
// hero2.greet();
