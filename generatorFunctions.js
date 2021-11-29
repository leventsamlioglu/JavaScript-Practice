function* generatorFunc() {
  console.log("1. code before first yield");
  yield 100;

  console.log("2. code before the second yield");
  yield 200;

  console.log("3. code after the second yield");
}

const generator = generatorFunc();

console.log(generator.next()); // 1. code before first yield
// { value: 100, done: false }
console.log(generator.next()); // 2. code before the second yield
// { value: 200, done: false }
console.log(generator.next()); //3. code after the second yield
// { value: undefined, done: true }

//----------------------------------------------------------------------------------------------

function* iterateGenerator() {
  yield "1";
  yield "2";
  yield "3";
  yield "4";
  yield "5";
  yield "6";
}

for (let val of iterateGenerator()) {
  console.log(val);
}

// Output: 1 2 3 4 5 6

//----------------------------------------------------------------------------------------------

function* generatorFunc() {
  // returns 'hello' at first next()
  let x = yield "hello";

  // returns passed argument on the second next()
  console.log(x);
  console.log("some code");

  // returns 5 on second next()
  yield 5;
}

const generator = generatorFunc();

console.log(generator.next()); //{ value: 'hello', done: false }
console.log(generator.next(6)); //6 - some code - { value: 5, done: false }
console.log(generator.next()); //{ value: undefined, done: true }
