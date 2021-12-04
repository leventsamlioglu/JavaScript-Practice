// Key Takeaways
// 1. If you want to execute await calls in series, use a for-loop (or any loop without a callback).

// 2. Don't ever use await with forEach. Use a for-loop (or any loop without a callback) instead.

// 3. Don't await inside filter and reduce. Always await an array of promises with map, then filter or reduce accordingly.

const fruitBasket = {
  apple: 27,
  grape: 0,
  pear: 14,
};

const getNumFruit = (fruit) => {
  return fruitBasket[fruit];
};

const fruitsToGet = ["apple", "grape", "pear"];

//-----------------------------------------------------

const mapLoop = async (_) => {
  console.log("Start1");

  const promises = await fruitsToGet.map(async (fruit) => {
    const numFruit = await getNumFruit(fruit);
    return numFruit;
  });

  const numFruits = await Promise.all(promises);
  console.log(numFruits);

  console.log("End1");
};

mapLoop();

//-----------------------------------------------------

const reduceLoop = async (_) => {
  console.log("Start2");

  const promises = fruitsToGet.map(getNumFruit);
  const numFruits = await Promise.all(promises);
  const sum = numFruits.reduce((sum, fruit) => sum + fruit);

  console.log(sum);
  console.log("End2");
};

reduceLoop();

//-----------------------------------------------------

const filterLoop = async (_) => {
  console.log("Start3");

  const promises = await fruitsToGet.map((fruit) => getNumFruit(fruit));
  const numFruits = await Promise.all(promises);

  const moreThan20 = fruitsToGet.filter((fruit, index) => {
    const numFruit = numFruits[index];
    return numFruit > 20;
  });

  console.log(moreThan20);
  console.log("End3");
};

filterLoop();
