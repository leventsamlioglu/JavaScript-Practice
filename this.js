const object = {
  name: "LEO",
  method() {
    console.log(this); // object =>>> { name: 'LEO', method: [Function: method] }
  },
};
object.method();

// ------------------------------------------------------------------------------------------

function sum1(a, b) {
  console.log(this === globalThis); // => true
  this.myNumber = 20; // add 'myNumber' property to global object
  return a + b;
}
// sum() is invoked as a function
// this in sum() is a global object (window)
sum1(15, 16); // => 31
console.log(myNumber); // => 20

// ------------------------------------------------------------------------------------------

const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    // sum: () => {console.log(this) =>>> {}}
    console.log(this === numbers); // => true
    function calculate() {
      // this is globalThis or undefined in strict mode
      console.log(this === globalThis); // => true
      return console.log(this.numberA + this.numberB);
    }
    return calculate(); // return calculate.call(this) =>>> log 15
  },
};
numbers.sum(); // => NaN or throws TypeError in strict mode

// ------------------------------------------------------------------------------------------

function Pet(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function () {
    console.log(this); // => Timeout{}
    console.log(`The ${this.type} has ${this.legs} legs`);
  };
}
const myCat = new Pet("Cat", 4);
// logs "The undefined has undefined legs"
// or throws a TypeError in strict mode
setTimeout(myCat.logInfo, 1000); // setTimeout(myCat.logInfo.bind(myCat), 1000); logs The Cat has 4 legs

// function Pet(type, legs) {
//   this.type = type;
//   this.legs = legs;
//   this.logInfo = () => {
//     console.log(this === myCat); // => true
//     console.log(`The ${this.type} has ${this.legs} legs`);
//   };
// }
// const myCat = new Pet('Cat', 4);
// // logs "The Cat has 4 legs"
// setTimeout(myCat.logInfo, 1000);

// ------------------------------------------------------------------------------------------

function Person() {
  (this.name = "Jack"),
    (this.age = 25),
    (this.sayName = function () {
      // this is accessible
      console.log(this.age); // 25

      function innerFunc1() {
        // this refers to the global object
        console.log(this.age); //undefined
        console.log(this); // Object [global]
      }

      innerFunc1();

      let innerFunc2 = () => {
        // Inside the arrow function, this refers to the parent's scope.
        console.log(this.age); // 25
      };

      innerFunc2();
    });
}

let x = new Person();
x.sayName();
