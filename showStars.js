// Show stars on each line. We get 5 rows below,
// in each row we have a star, and the number of
// stars in that row, depends on the row we are in.

showStars(5);

function showStars(rows) {
  let array = [];
  for (let i = 1; i <= rows; i++) {
    array += "*";
    console.log(array);
  }
}

// Outputs:
// *
// **
// ***
// ****
// *****
