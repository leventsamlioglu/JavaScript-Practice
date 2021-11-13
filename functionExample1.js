// Because this function returns another function that has access to the
// "private" var i, the returned function is, effectively, "privileged."

function makeCounter() {
  // `i` is only accessible inside `makeCounter`.
  let i = 0;
  return function () {
    console.log(++i);
  };
}

// Note that `counter` and `counter2` each have their own scoped `i`.
const counter = makeCounter();
counter(); // logs: 1
counter(); // logs: 2

const counter2 = makeCounter();
counter2(); // logs: 1
counter2(); // logs: 2

i; // ReferenceError: i is not defined (it only exists inside makeCounter)
