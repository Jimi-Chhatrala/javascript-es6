// Call, Apply and Bind

// Call

// Ex - 1

// let userDetails = {
//   name: "Jimi",
//   age: 25,
//   designation: "Software Engineer",
//   printDetails: function () {
//     console.log(this.name, this.age, this.designation);
//   },
// };

// userDetails.printDetails();

// let userDetails2 = {
//   name: "Kumar",
//   age: 23,
//   designation: "Tester",
// };

// // function borrowing
// userDetails.printDetails.call(userDetails2);

// -------------------------------

// Ex - 2

// let userDetails = {
//   name: "Jimi",
//   age: 25,
//   designation: "Software Engineer",
// };

// let userDetails2 = {
//   name: "Kumar",
//   age: 23,
//   designation: "Tester",
// };

// let printDetails = function (state, country) {
//   console.log(this.name, this.age, this.designation, state, country);
// };

// printDetails.call(userDetails, "Pune", "India");

// printDetails.call(userDetails2, "Ahmedabad", "India");

// -----------------------------------

// Apply

// Ex - 1

// let userDetails = {
//   name: "Jimi",
//   age: 25,
//   designation: "Software Engineer",
// };

// let userDetails2 = {
//   name: "Kumar",
//   age: 23,
//   designation: "Tester",
// };

// let printDetails = function (state, country) {
//   console.log(this.name, this.age, this.designation, state, country);
// };

// printDetails.call(userDetails, "Pune", "India");

// // with apply use array
// printDetails.apply(userDetails2, ["Ahmedabad", "India"]);

// ---------------------------------

// Bind

let userDetails = {
  name: "Jimi",
  age: 25,
  designation: "Software Engineer",
};

let userDetails2 = {
  name: "Kumar",
  age: 23,
  designation: "Tester",
};

let printDetails = function (state, country) {
  console.log(this.name, this.age, this.designation, state, country);
};

printDetails.call(userDetails, "Pune", "India");

// Bind
let makeCopyAndCall = printDetails.bind(userDetails, "Bangaluru", "India");
makeCopyAndCall();

// with apply use array
printDetails.apply(userDetails2, ["Ahmedabad", "India"]);
