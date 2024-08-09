// Async - Await
// Callbacks
// Promises

// Callback
// const data = [
//   {
//     name: "Jimi",
//     profession: "Software Engineer",
//   },
//   {
//     name: "Kumar",
//     profession: "Professor",
//   },
// ];

// function getData() {
//   setTimeout(() => {
//     let output = "";
//     output += "<ul>";

//     data.forEach((data, index) => {
//       output += `<li>(${index + 1}) <strong>${data.name}</strong></li>`;
//     });

//     output += "</ul>";
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createData(newData, callback) {
//   setTimeout(() => {
//     data.push(newData);
//     callback();
//   }, 2000);
// }

// // getData();
// createData({ name: "John", profession: "Developer" }, getData);

// Promise

// const data = [
//   {
//     name: "Jimi",
//     profession: "Software Engineer",
//   },
//   {
//     name: "Kumar",
//     profession: "Professor",
//   },
// ];

// function getData() {
//   setTimeout(() => {
//     let output = "";
//     output += "<ul>";

//     data.forEach((data, index) => {
//       output += `<li>(${index + 1}) <strong>${data.name}</strong></li>`;
//     });

//     output += "</ul>";
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createData(newData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.push(newData);
//       let error = false;
//       // let error = true;
//       if (!error) {
//         resolve("All well.");
//       } else {
//         reject("Something went wrong.");
//       }
//     }, 2000);
//   });
// }

// // getData();
// createData({ name: "John", profession: "Developer" })
//   .then((getData) => console.log(getData))
//   .catch((error) => console.log("error", error));

// Async - Await

const data = [
  {
    name: "Jimi",
    profession: "Software Engineer",
  },
  {
    name: "Kumar",
    profession: "Professor",
  },
];

function getData() {
  setTimeout(() => {
    let output = "";
    output += "<ul>";

    data.forEach((data, index) => {
      output += `<li>(${index + 1}) <strong>${data.name}</strong></li>`;
    });

    output += "</ul>";
    document.body.innerHTML = output;
  }, 1000);
}

function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(newData);
      let error = false;
      // let error = true;
      if (!error) {
        resolve("All well.");
      } else {
        reject("Something went wrong.");
      }
    }, 2000);
  });
}

async function start() {
  try {
    const message = await createData({ name: "John", profession: "Developer" });
    console.log(message); // Log the resolved message
    getData(); // Call the getData function directly
  } catch (error) {
    console.log("error", error);
  }
}

start();
