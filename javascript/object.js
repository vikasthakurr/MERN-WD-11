// let obj = {
//   fname: "vikas",
//   lname: "thakur",
//   age: 25,
// };

//read
// console.log(obj.lname);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// obj.fname = "akash";
// console.log(obj);

// let obj1 = obj;
// obj1.lname = "singh";
// console.log(obj1);
// console.log(obj);

// let obj = {
//   name: "vikas",
//   age: 25,
//   salary: 12345,
//   address: {
//     town: "etawah",
//     state: "up",
//   },
// };
// const {
//   obj: {
//     address: { town },
//   },
// } = obj;

//...

// let arr = ["apple", "banana", "chery", "mango"];
// let [first, second, ...rest] = arr;
// console.log(first);
// console.log(second);
// console.log(rest[0]);

// function sum(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum;
// }

// let res = sum(
//   2,
//   3,
//   4,
//   5
// );
// console.log(res);
// let arr = [1, 2, 3, 4, 5, 6];
// let arr1 = [...arr];
// console.log(arr1);

// let obj = {
//   name: "vikas",
//   age: 25,
// };
// let obj1 = { ...obj };
// console.log(obj1);

// let obj1 = {
//   name: "vikas",
//   age: 25,
//   address: {
//     town: "delhi",
//   },
// };
// // let obj2 = obj1;
// let obj2 = { ...obj1 };
// obj2.age = 26;
// obj2.address.town = "kanpur";
// console.log(obj2);
// console.log(obj1);

// let arr1 = [1, 2, 3, 5];
// let arr2 = [...arr1];
// arr2.push(6);
// console.log(arr1);
// console.log(arr2);

// =================================================================================================
// Notes
// =================================================================================================

// Object literal
// An object is a collection of key-value pairs.
// let obj = {
//   fname: "vikas",
//   lname: "thakur",
//   age: 25,
// };

// How to access properties of an object
// 1. Dot notation
// console.log(obj.fname); // Output: vikas
// 2. Bracket notation
// console.log(obj["lname"]); // Output: thakur

// How to get all keys, values, and entries of an object
// console.log(Object.keys(obj)); // Output: [ 'fname', 'lname', 'age' ]
// console.log(Object.values(obj)); // Output: [ 'vikas', 'thakur', 25 ]
// console.log(Object.entries(obj)); // Output: [ [ 'fname', 'vikas' ], [ 'lname', 'thakur' ], [ 'age', 25 ] ]

// How to update a property of an object
// obj.fname = "akash";
// console.log(obj); // Output: { fname: 'akash', lname: 'thakur', age: 25 }

// Shallow copy vs. deep copy
// When you assign an object to a new variable, it's a shallow copy.
// Both variables point to the same object in memory.
// let obj_1 = obj;
// obj_1.lname = "singh";
// console.log(obj_1); // Output: { fname: 'akash', lname: 'singh', age: 25 }
// console.log(obj); // Output: { fname: 'akash', lname: 'singh', age: 25 } (original object is also changed)

// Nested objects
// let nestedObj = {
//   name: "vikas",
//   age: 25,
//   salary: 12345,
//   address: {
//     town: "etawah",
//     state: "up",
//   },
// };

// Object destructuring
// It allows you to unpack values from arrays, or properties from objects, into distinct variables.
// const { name, age } = nestedObj;
// console.log(name); // Output: vikas
// console.log(age); // Output: 25

// Destructuring nested objects
// const {
//   address: { town, state },
// } = nestedObj;
// console.log(town); // Output: etawah
// console.log(state); // Output: up

// Array destructuring
// let arr = ["apple", "banana", "chery", "mango"];
// let [first, second] = arr;
// console.log(first); // Output: apple
// console.log(second); // Output: banana

// Rest parameter with array destructuring
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
// let [a, b, ...rest] = arr;
// console.log(a); // Output: apple
// console.log(b); // Output: banana
// console.log(rest); // Output: [ 'chery', 'mango' ]

// Rest parameter in functions
// function sum(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }

// let res = sum(2, 3, 4, 5, 6, 7, 8, 9, 9, 0, 0, 6, 5, 4, 3, 56, 7, 89, 4, 32, 2, 46, 778, 8);
// console.log(res); // Output: 1103

// Spread syntax
// It allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

// Spread syntax with arrays (creates a shallow copy)
// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [...arr1];
// arr2.push(7);
// console.log(arr1); // Output: [ 1, 2, 3, 4, 5, 6 ]
// console.log(arr2); // Output: [ 1, 2, 3, 4, 5, 6, 7 ]

// Spread syntax with objects (creates a shallow copy)
// let objToCopy = {
//   name: "vikas",
//   age: 25,
// };
// let copiedObj = { ...objToCopy };
// copiedObj.age = 26;
// console.log(objToCopy); // Output: { name: 'vikas', age: 25 }
// console.log(copiedObj); // Output: { name: 'vikas', age: 26 }

// Shallow copy with nested objects
// The spread syntax creates a shallow copy. This means that nested objects are not copied deeply.
// let obj3 = {
//   name: "vikas",
//   age: 25,
//   address: {
//     town: "delhi",
//   },
// };
// let obj4 = { ...obj3 };
// obj4.age = 26;
// obj4.address.town = "kanpur";
// console.log(obj3); // Output: { name: 'vikas', age: 25, address: { town: 'kanpur' } } (nested object is changed)
// console.log(obj4); // Output: { name: 'vikas', age: 26, address: { town: 'kanpur' } }

// for...of loop
// The for...of statement creates a loop iterating over iterable objects (including Array, Map, Set, arguments object and so on).

// for...of with arrays
// const fruits = ['apple', 'banana', 'cherry'];
// for (const fruit of fruits) {
//   console.log(fruit);
// }
// Output:
// apple
// banana
// cherry

// for...of with strings
// const str = 'hello';
// for (const char of str) {
//   console.log(char);
// }
// Output:
// h
// e
// l
// l
// o

// for...of with objects (not directly iterable)
// You need to use Object.keys, Object.values, or Object.entries to iterate over objects.
// const myObject = { a: 1, b: 2, c: 3 };

// Iterate over keys
// for (const key of Object.keys(myObject)) {
//   console.log(key);
// }
// Output:
// a
// b
// c

// Iterate over values
// for (const value of Object.values(myObject)) {
//   console.log(value);
// }
// Output:
// 1
// 2
// 3

//object.freeze

// let obj = {
//   name: "vikas",
//   age: 25,
//   salary: 12345,
// };

// obj.name = "akash";
// Object.freeze(obj);
// obj.name = "avinash";
// console.log(obj);
//object.seal

// let obj = {
//   name: "vikas",
//   age: 25,
//   salary: 12345,
// };
// obj.name = "akash";
// Object.seal(obj);
// obj.name = "avinash";
// obj.address = "delhi";
// console.log(obj);

//shallow copy using spread...
let obj = {
  name: "vikas",
  age: 25,
  salary: 12345,
  address: {
    town: "etawah",
    state: "up",
  },
};

// let obj1 = obj;
// let obj1 = { ...obj };
// let obj1 = structuredClone(obj);
// let obj1 = JSON.stringify(obj);
// let obj2 = JSON.parse(obj1);
// console.log(obj2);

// let obj1 = JSON.parse(JSON.stringify(obj));
// console.log(typeof obj1);
// // obj1.name = "akash";
// // obj1.address.town = "kanpur";
// // console.log(obj);
// // console.log(obj1);
