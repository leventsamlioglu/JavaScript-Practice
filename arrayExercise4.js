try {
  const numbers = [1, 2, 3, 1, 4, 1];
  const count = countOccurences(numbers, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Invalid array");

  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}

// Outputs: 3
