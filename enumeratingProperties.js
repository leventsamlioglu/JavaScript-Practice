// Enumarating properties of an object
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle) console.log(key, circle[key]);

for (let key of Object.keys(circle)) console.log(key);
// Returns the names of the enumerable string properties and methods of the 'circle' object.

for (let entry of Object.entries(circle)) console.log(entry);
// Returns an array of key/values of the enumerable properties of the 'circle' object.

if ("radius" in circle) console.log("yes");
