const languages = [
  "JavaScript",
  "Python",
  "Ruby",
  "C",
  "C++",
  "Swift",
  "PHP",
  "Java",
];

function searchFor(arr, query) {
  function condition(element) {
    return element.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  }
  return arr.filter(condition);
}

let newArr = searchFor(languages, "ja");
console.log(newArr); // [ 'JavaScript', 'Java' ]

// using arrow function
const searchArr = (arr, query) =>
  arr.filter(
    (element) => element.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

let newLanguages = searchArr(languages, "p");
console.log(newLanguages); // [ 'JavaScript', 'Python', 'PHP' ]
