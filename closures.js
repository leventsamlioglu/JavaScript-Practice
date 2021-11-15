var pet = function (name) {
  // The outer function defines a variable called "name"
  var getName = function () {
    return name; // The inner function has access to the "name" variable of the outer
    //function
  };
  return getName; // Return the inner function, thereby exposing it to outer scopes
};
myPet = pet("Vivie");

myPet(); // Returns "Vivie"

// ---------------------------------------------------------------------------------------------

var getCode = (function () {
  var apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify...

  return function () {
    return apiCode;
  };
})();

getCode(); // Returns the apiCode

// ---------------------------------------------------------------------------------------------

var createPet = function (name) {
  var sex;

  return {
    setName: function (newName) {
      name = newName;
    },

    getName: function () {
      return name;
    },

    getSex: function () {
      return sex;
    },

    setSex: function (newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };
};

var pet = createPet("Vivie");
pet.getName(); // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex(); // male
pet.getName(); // Oliver
