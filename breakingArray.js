const nums = [1, 2, 3, 4, 5];
nums.some((n) => {
  if (n === 3) {
    return true;
  }
  console.log(n);
  return false;
});

// outputs 1 and 2
