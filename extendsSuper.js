class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
console.log(mycar.show());

// Outputs: I have a Ford, it is a Mustang
