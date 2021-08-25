const person = {
  firstName: "Levent",
  lastName: "Samlioglu",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "New Name";

console.log(person);
