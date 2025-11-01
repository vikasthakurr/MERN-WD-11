// ** JavaScript Data Types **

// JavaScript has two main categories of data types: Primitive and Reference.

// ** 1. Primitive Data Types **
// Primitive types are immutable, meaning their values cannot be changed once created.
// They are copied by value.

// ** Number **
// Represents both integer and floating-point numbers.
// let a = 20;
// let b = a; // 'b' gets a copy of the value of 'a'.
// b = 10; // Changing 'b' does not affect 'a'.
// console.log(a); // Output: 20
// console.log(b); // Output: 10
// let salary = 123.56;

// ** BigInt **
// Represents integers with arbitrary precision. Used for numbers larger than the Number type can handle.
// The 'n' at the end indicates it's a BigInt.
// let bigIntNum = 1234567890123456789012345678901234567890n;

// ** String **
// Represents a sequence of characters.
// let name = "vikas kumar thakur";

// ** Boolean **
// Represents a logical entity and can have two values: true or false.
// let isLoggedIn = true;
// let isLoggedOut = false;

// ** Null **
// Represents the intentional absence of any object value. It is a primitive value.
// let value = null;

// ** Undefined **
// A variable that has not been assigned a value has the value undefined.
// let number;


// ** 2. Reference Data Types **
// Reference types are mutable. When you assign a reference type to a variable,
// the variable gets a reference (or a pointer) to the location in memory where the object is stored.

// ** Object **
// A collection of key-value pairs.
// let person = {
//   name: "vikas",
//   age: 25,
//   salary: 12345,
// };
// console.log(person.name); // Accessing a property
// console.log(Object.keys(person)); // Get all keys
// console.log(Object.values(person)); // Get all values
// console.table(Object.entries(person)); // Display as a table

// // Creating an object with the 'new' keyword
// let obj1 = new Object();
// obj1.name = "vikas";
// obj1.age = 24;
// console.log(obj1);

// ** Array **
// A special type of object used for storing ordered collections of values.
let arr = [1, 2, 3, 4, 5];
// Creating an array with the 'new' keyword
let arr1 = new Array();

// ** Function **
// A block of code designed to perform a particular task. Functions are objects in JavaScript.

// ** Named Function **
// A function declared with a name.
// function greet() {
//   //   console.log("hello world");
//   return "hello world";
// }
// let res = greet();
// console.log(res);

// ** Function Expression **
// A function assigned to a variable. It can be anonymous.
// let sayHI = function () {
//   console.log("hello world");
// };
// sayHI();

// ** Arrow Function **
// A more concise syntax for writing function expressions.
// let greet = (a, b, c, d) => console.log("hello world");
// greet();

// ** Immediately Invoked Function Expression (IIFE) **
// A function that is executed right after it is created.
// (function test() {
//   console.log("this is a test function");
// })();


// ** == vs === (Loose vs. Strict Equality) **

// ** === (Strict Equality) **
// Compares both value and type. It does not perform type coercion.
// console.log(null === undefined); // Output: false (different types)
// console.log(2 === "2"); // Output: false (number vs. string)

// ** == (Loose Equality) **
// Compares values after performing type coercion if necessary.
// console.log(2 == "2"); // Output: true (string "2" is coerced to number 2)
