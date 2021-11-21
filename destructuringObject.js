const user = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
};

const { name, age } = user;
const { address: permanentAddress } = user;
const updatedUser = { ...user, age: 56 }; // {name: "Alex", address: "15th Park Avenue", age: 56}

console.log(name, age); // Output, Alex 43

console.log(permanentAddress); // 15th Park Avenue

console.log(user); // {name: "Alex", address: "15th Park Avenue", age: 43}

//--------------------------------------------------

const user1 = {
  first_name: "Alex",
  last_name: "Brandos",
};
const {
  first_name,
  last_name,
  full_name = `${first_name} ${last_name}`,
} = user1;

console.log(full_name); // Output, Alex Brandos
