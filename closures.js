const number = 999;
const result = (function immediate(number) {
  const message = `number is: ${number}`;
  return message;
})(100);
console.log("result", result); // 100 (immediate doesn't access any variables from the outer scope.)

// ---------------------------------------------------------------------------------------------

let count = 0;
(function immediate() {
  if (count === 0) {
    count++;
    console.log(count); // 1
  }
  console.log(count); // 1
})();
console.log(count); // 1

let count1 = 0;
(function immediate() {
  if (count1 === 0) {
    let count1 = 1;
    console.log(count1); // 1
  }
  console.log(count1); // 0
})();
console.log(count1); // 0

// ---------------------------------------------------------------------------------------------

for (var i = 0; i < 3; i++) {
  // if we use 'let' instead of 'var', output will be 0  1  2
  setTimeout(function log() {
    console.log(i); // after 1000ms it writes 3  3  3
  }, 1000);
}

for (var k = 0; k < 3; k++) {
  const j = k; // if we use 'var' instead of 'const', output will be 2  2  2
  setTimeout(function log() {
    console.log(j); // after 1000ms it writes 0  1  2
  }, 1000);
}

let count2 = 0;
function counter() {
  console.log(count2);
  if (count2 === 10) return;
  count2 = count2 + 1;
  setTimeout(counter, 1000);
}
counter(); // count until 10

// ---------------------------------------------------------------------------------------------

function createIncrement() {
  let count1 = 0;
  function increment() {
    count1++;
  }
  let message = `Count is ${count1}`;
  function log() {
    // let message = `Count is ${count1}`; (***)
    console.log(message);
  }

  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // 0  (***=>3)

// ---------------------------------------------------------------------------------------------

function createStack() {
  return {
    items: [],
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => [10]
console.log("items = ", (stack.items = [10, 100, 1000])); // Encapsulation broken!

// The stack works as expected, but with one small problem. Anyone can modify items array directly because stack.items property is exposed.

// That's an issue since it breaks the encapsulation of the stack: only push() and pop() methods should be public, but stack.items or any other details shouldn't be accessible.

// but if we write that code like below:

function createStack1() {
  const items1 = [];
  return {
    push(item) {
      items1.push(item);
    },
    pop() {
      return items1.pop();
    },
  };
}
const stack1 = createStack1();
stack1.push(10);
stack1.push(5);
stack1.pop(); // => 5
console.log("items1 = ", stack1.items1); // => undefined

// items has been moved to a variable inside createStack() scope.

// Thanks to this change, from the outside of createStack() scope, there is no way to access or modify items array. items is now a private variable, and the stack is encapsulated: only push() and pop() method are public.

// push() and pop() methods, being closures, capture items variable from createStack() function scope.

// ---------------------------------------------------------------------------------------------

function multiply(number1, number2) {
  if (number2 !== undefined) {
    return console.log(number1 * number2);
  }
  return function doMultiply(number2) {
    return console.log(number1 * number2);
  };
}
multiply(4, 5); // => 20
multiply(3, 3); // => 9
const double = multiply(2);
double(5); // => 10
double(11); // => 22

// ---------------------------------------------------------------------------------------------

var pet = function (name) {
  // The outer function defines a variable called "name"
  var getName = function () {
    return name; // The inner function has access to the "name" variable of the outer
    //function
  };
  return getName; // Return the inner function, thereby exposing it to outer scopes
};
myPet = pet("Vivie");

console.log("My pet is", myPet()); // Returns "Vivie"

// ---------------------------------------------------------------------------------------------

var getCode = (function () {
  var apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify...

  return function () {
    return apiCode;
  };
})();

console.log("API Code is", getCode()); // Returns the apiCode

// ---------------------------------------------------------------------------------------------

var createPet = function (name) {
  var sex;

  return {
    setName: function (newName) {
      name = newName;
    },

    getName: function () {
      return name;
    },

    getSex: function () {
      return sex;
    },

    setSex: function (newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };
};

var pet = createPet("Vivie");
pet.getName(); // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex(); // male
pet.getName(); // Oliver
