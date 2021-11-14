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
