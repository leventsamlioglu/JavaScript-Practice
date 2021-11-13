const obj = {
  count: 10,

  doSomethingLater: function () {
    setTimeout(function () {
      // the function executes on the window scope
      this.count++; // this =>> Timeout{}
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // console prints "NaN", because the property "count" is not in the window scope.

const newObj = {
  count: 10,
  doSomethingLater: function () {
    // The traditional function binds "this" to the "obj" context.
    setTimeout(() => {
      // Since the arrow function doesn't have its own binding and
      // setTimeout (as a function call) doesn't create a binding
      // itself, the "obj" context of the traditional function will
      // be used within.
      this.count++; // this =>> newObject{}
      console.log(this.count); // Outputs: 11
    }, 300);
  },
};

newObj.doSomethingLater();
