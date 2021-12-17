function productDescription(strings) {
  console.log(strings);
  // This product (JavaScript Course) is 29.99.
}

const prodName = "JavaScript Course";
const prodPrice = 29.99;

const productOutput = productDescription(
  `This product (${prodName}) is ${prodPrice}.`
);
