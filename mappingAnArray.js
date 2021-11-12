const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((value) => value >= 0);
const items1 = filtered.map((value) => "<li>" + value + "</li>");
const html = "<ul>" + items1.join("") + "</ul>";

console.log(html);
// <ul><li>1</li><li>2</li><li>3</li></ul>

const items2 = numbers
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

// const filteredValue = numbers.filter((n) => n >= 0);
// const items2 = filteredValue.map((n) => ({ value: n }));

// const items2 = filteredValue.map((n) => {
//   const obj = { value: n };
//   return obj;
// });

console.log(items2);
// Outputs : [ 2, 3 ]
