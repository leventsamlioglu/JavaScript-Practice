function myDisplayer(some) {
  console.log(some);
}

const button = document.querySelector("button");

function trackHandler() {
  let myPromise = new Promise(function (myResolve, myReject) {
    let x = 1;

    // some code (try to change x to 5)

    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("ERROR");
    }
  });

  myPromise.then(
    (value) => {
      myDisplayer(value);
    },
    (error) => {
      myDisplayer(error);
    }
  );
}
button.addEventListener("click", trackHandler);
