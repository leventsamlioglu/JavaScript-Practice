function createIncrement() {
  let counter = 0;

  function increment() {
    counter++;
  }

  console.log("Counter Outside =", counter);

  function log() {
    console.log("Counter Inside =", counter);
  }

  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

// Outputs: Count Outside = 0
//          Count Inside = 3
