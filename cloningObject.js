const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

const color = {
  color: "red",
};

const another = Object.assign(
  {
    diameter: 2,
    newColor: "blue",
  },
  circle,
  color
);

// const another = { ...circle, ...color };

console.log(another);

// Outputs:
// {
//   diameter: 2,
//   newColor: 'blue',
//   radius: 1,
//   draw: [Function: draw],
//   color: 'red'
// }
