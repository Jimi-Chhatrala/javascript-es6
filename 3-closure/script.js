// Closure

// ---------------------------------------

// Ex-1

// let sum = function (a) {
//   console.log("a", a);
//   let c = 4;

//   return function (b) {
//     return a + b + c;
//   };
// };

// let store = sum(2);
// console.log(store(5));

// ---------------------------------------

// Ex-2

let sum = function (a, b, c) {
  return {
    getSumOfTwoNums: function () {
      return a + b;
    },
    getSumOfThreeNums: function () {
      return a + b + c;
    },
  };
};

let store = sum(1, 2, 3);
console.log("store.getSumOfTwoNums()", store.getSumOfTwoNums());
console.log("store.getSumOfThreeNums()", store.getSumOfThreeNums());

let store2 = sum(7, 8, 9);
console.log("store2.getSumOfTwoNums()", store2.getSumOfTwoNums());
console.log("store2.getSumOfThreeNums()", store2.getSumOfThreeNums());
