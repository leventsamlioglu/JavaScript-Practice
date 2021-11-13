const makeWithdraw = (balance) =>
  (function (copyBalance) {
    let balance = copyBalance; // This variable is private
    let doBadThings = function () {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw: function (amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        } else {
          return "Insufficient money";
        }
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log("firstAccount", firstAccount); // firstAccount { withdraw: [Function: withdraw] }
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined, this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
secondAccount.withdraw(30); // "Insufficient money"
secondAccount.withdraw(20); // 0
