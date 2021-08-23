const numbers = [1, 2, 3, 1, 4, 1];

const count = countOccurences(numbers, 1);
console.log(count);

function countOccurences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}
