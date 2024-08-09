// ES6
// REST and SPREAD Operator

// REST
// function addNumbers(a, b, c, ...rest) {
//   // console.log("rest", rest);
//   // console.log("arguments", arguments);
//   return a + b + c;
// }

// const result = addNumbers(1, 2, 3, 8, 9, 7, 6);
// console.log("result", result);

// ------------------------------------------------------------------

// SPREAD
// var names = ["Hello", "World", "Universe", "Bye"];

// function getNames(name1, name2, name3, name4) {
//   console.log("name1,name2,name3,name4", name1, name2, name3, name4);
// }

// // getNames(names[0], names[1], names[2], names[3]);
// getNames(...names);
// // getNames(names);

// ------------------------------------------------------------------
// When using spread number of args are not compulsory to be passed in function formal parameter

// function getNames_NotArgsCompulsory(name1, name2) {
//   console.log("name1,name2", name1, name2);
// }

// console.log(names);
// getNames_NotArgsCompulsory(...names); //best way

// REST with object
// let students = {
//   name: "Jimi",
//   age: 28,
//   hobbies: ["Football", "Basketball"],
// };

// const age = students.age;
// const { age, name } = students;
// const { age, ...rest } = students;
// const { ...rest } = students;

// console.log("age", age);
// console.log("name", name);
// console.log(rest);

// SPREAD

// let newStudent = {
//   ...students,
//   age: 30,
// };

// console.log("newStudent", newStudent);
