var things = ["Table", "Chair", "Fan", "Rug"];
var [a, b, c, d, e] = things;
console.log(c); //Output: Fan
console.log(d); //Output: Rug
console.log(e); //Output: undefined

//------------------------------------------------------

function runners() {
  return ["Sandra", "Ola", "Chi"];
}

var [f, g, h] = runners();
console.log(f); //Output: Sandra
console.log(g); //Output: Ola
console.log(h); //Output: Chi

//------------------------------------------------------

var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];

var [first, second, ...rest] = ["Mercury", "Earth", ...planets, "Saturn"];

console.log(first); //Output: Mercury
console.log(second); //Output: Earth
console.log(rest); //Output: ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn", "Saturn"]
