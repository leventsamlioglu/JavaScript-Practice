function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return (1 - discount) * total;
}

console.log(sum(0.1, 10, 20)); // 27
