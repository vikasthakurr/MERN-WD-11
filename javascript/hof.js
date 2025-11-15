// This is a sample array of numbers.
let arr = [1, 2, 3, 4, 5, 6, 7];
// This is another sample array of numbers.
let arr2 = [12, 4, 5, 6, 7];

// A standard for loop to iterate through the 'arr' array. This is the traditional way.
for (let i = 0; i < arr.length; i++) {}
// A standard for loop to iterate through the 'arr2' array.
for (let i = 0; i < arr2.length; i++) {}

// HIGHER-ORDER FUNCTIONS (HOF)
// A function is called a Higher-Order Function if it meets one or both of these criteria:
// 1. It takes one or more functions as arguments (these are called callback functions).
// 2. It returns a function as its result.

// --- MAP ---
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// It does not change the original array.

// Example of using map to multiply each element by 5.
// The result of each operation is implicitly returned to form the new array.
// arr.map((ele) => {
//   console.log(ele * 5); // This logs each new value, but doesn't create a new array.
// });
// console.log(arr); // The original array remains unchanged.

// To get a new array, you should return the value from the callback and store the result.
// let newArr = arr.map((ele) => {
//   return ele * 5;
// });
// console.log(newArr); // This will be [5, 10, 15, 20, 25, 30, 35]

// --- FILTER ---
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// It does not change the original array.

// Example of using filter to get only the even numbers from the array.
// arr.filter((ele) => {
//   if (ele % 2 == 0) {
//     console.log(ele); // This logs the elements that pass the condition.
//   }
// });
// console.log(arr); // The original array remains unchanged.

// To get a new array of filtered items, store the result.
// let evenNumbers = arr.filter((ele) => {
//   return ele % 2 == 0;
// });
// console.log(evenNumbers); // This will be [2, 4, 6]

// --- REDUCE ---
// The reduce() method executes a "reducer" callback function on each element of the array, resulting in a single output value.
// 'acc' is the "accumulator," which accumulates the callback's return values.
// 'ele' is the current element being processed in the array.

// Example of using reduce to sum all elements in the array.
// let result = arr.reduce((acc, ele) => {
//   return acc + ele; // The return value becomes the new 'acc' for the next iteration.
// });
// console.log(result); // This will be 28 (1+2+3+4+5+6+7)

// --- CREATING OUR OWN HIGHER-ORDER FUNCTION ---

// Let's define some salary arrays.
// let salary = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
// let salary2 = [100, 200, 300, 400, 500];

// These are callback functions. They perform a specific calculation.
function calculateTenPercent(salary) {
  return salary * 0.1;
}

function calculateTwentyPercent(salary) {
  return salary * 0.2;
}

// We can use our callback with a built-in HOF like map.
// let result = salary.map(calculateTwentyPercent);
// console.log(result);

// Now, let's build a HOF that mimics the behavior of map.
// This function 'calculateTax' takes an array (salary) and a callback function (cb).
// function calculateTax(salary, cb) {
//   let res = []; // Create an empty array to store results.
//   for (let i = 0; i < salary.length; i++) {
//     // Call the callback function for each element and push the result into our new array.
//     res.push(cb(salary[i]));
//   }
//   return res; // Return the new array.
// }

// --- EXTENDING ARRAY.PROTOTYPE ---
// We can add our custom HOF directly to the Array object itself using its 'prototype'.
// This makes our 'calculateTax' method available on ALL arrays.
Array.prototype.calculateTax = function (cb) {
  let res = [];
  // 'this' refers to the array that the method is called on (e.g., salary2 in the example below).
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i]));
  }
  return res;
};

// Now we can call our custom method directly on any array.
// let result = calculateTax(salary2, calculateTenPercent); // Using the standalone function

let salary = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
let salary2 = [100, 200, 300, 400, 500];
// Calling the method from the Array.prototype.
let result = salary2.calculateTax(calculateTwentyPercent);

// console.log(result); // This will be [20, 40, 60, 80, 100]
// console.log(salary2); // The original array is unchanged.

// 'this' in the global scope refers to the global object (e.g., window in browsers).
// console.log(this);

// --- IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) ---
// An IIFE is a function that is defined and executed immediately.
// It's a way to create a private scope for variables to avoid polluting the global scope.

// The function is wrapped in parentheses to make it an expression,
// and the second pair of parentheses () immediately invokes it.
// (function show() {
//   console.log("hii");
//   var privateVar = "secret"; // This variable is not accessible from outside.
// })();

// Another example.
// (function show2(){
//     console.log("hii2")
// })();

// Calling show() here would result in an error because 'show' is not in the global scope.
// show();
