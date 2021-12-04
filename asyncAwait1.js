// The async keyword before a function has two effects:

// Makes it always return a promise.
// Allows await to be used in it.

// The await keyword before a promise makes JavaScript wait until that promise settles, and then:

// If it’s an error, an exception is generated — same as if throw error were called at that very place.
// Otherwise, it returns the result.

const doSomethingAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("I did something"), 3000);
  });
};

const doSomething = async () => {
  console.log(await doSomethingAsync());
};

doSomething();
console.log("Before");
console.log("After");

//-----------------------------------------------------------

function scaryClown() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🤡");
    }, 2000);
  });
}

scaryClown().then((resolve) => console.log("Message1:", resolve));

async function msg() {
  const msg = await scaryClown();
  console.log("Message2:", msg);
}

msg();

// Before
// After
// Message1: 🤡
// Message2: 🤡
// I did something
