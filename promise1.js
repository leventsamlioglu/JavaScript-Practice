const promise = new Promise((resolve, reject) => {
  console.log("I am the first!");
  setTimeout(() => resolve("I am the third!"), 2000);
});
// Chain a promise
promise
  .then((firstResponse) => {
    // Return a new value for the next then
    return firstResponse + " ..and work has done.";
  })
  .then((secondResponse) => {
    console.log(secondResponse);
  });

console.log("I am the second!");

//----------------------------------------------------------------------------------------------

fetch("https://api.github.com/users/octocat")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

//----------------------------------------------------------------------------------------------

// Handling success and errors with async/await
async function getUser() {
  try {
    // Handle success in try
    const response = await fetch("https://api.github.com/users/otocat");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    // Handle error in catch
    console.error(error);
  }
}

getUser();
