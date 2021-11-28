const map = new Map([
  [1970, "bell bottoms"],
  [1980, "leg warmers"],
  [1990, "flannel"],
]);

map.forEach((value, key) => {
  console.log(`${key} ${value}`);
});

const obj = { 1970: "bell bottoms", 1980: "leg warmers", 1990: "flannel" };
for (let key in obj) console.log(key, obj[key]);

//-----------------------------------------------------------------------------
const letters = new Set();

letters.add("Beethoven");
console.log(letters.keys());

//-----------------------------------------------------------------------------

let myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const arr = new Set(myArray);
// console.log(Array.from(arr));
console.log([...arr]);
