const numbers = [2, 1, 3];
console.log(numbers.sort());
console.log(numbers.reverse());

const obj = [
  { id: 1, name: "John" },
  { id: 2, name: "doe" },
];

obj.sort(function (a, b) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(obj);
