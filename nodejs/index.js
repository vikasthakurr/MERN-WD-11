// function sum(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// function mul(a, b) {
//   return a * b;
// }
// function div(a, b) {
//   return a / b;
// }

// console.log(sum(2, 4));

// export { sum, sub, mul, div }; // named export
// export default { sum, sub, mul, div }; //default export

import figlet from "figlet";
// const figlet = require("figlet");

figlet("mern", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
