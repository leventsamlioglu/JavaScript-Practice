const person = {
  firstName: "Leo",
  lastName: "van Persie",
};

Object.defineProperty(person, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    this._fullName = value;
  },
});

person.fullName = "New Name";

console.log(person.fullName); // Leo van Persie

console.log(person); // { firstName: 'Leo', lastName: 'van Persie', _fullName: 'New Name' }
