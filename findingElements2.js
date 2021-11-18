const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// const course = courses.find(function (course) {
//   return course.name === "a";
// });

const course = courses.find((course) => (course.name = "a"));

const courseIndex = courses.findIndex(function (courseIndex) {
  return course.name === "a";
});

console.log(course); // { id: 1, name: 'a' }
console.log(courseIndex); // 0
