const person = {
  firstName: "Levent",
  lastName: "Samlioglu",
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string.");

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name");

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = "";
} catch (e) {
  alert(e); // { firstName: 'New', lastName: 'Name', fullName: [Setter] }
}

person.fullName = "New Name";

console.log(person);
