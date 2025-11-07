// Loops in JavaScript

// 1. for loop
// The for loop repeats a block of code as long as a certain condition is true.
// It is typically used to execute a block of code a certain number of times.
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 2. forEach loop
// The forEach() method calls a function for each element in an array.
// It is a simpler way to iterate over an array.
let arr = [1, 2, 3, 4, 5];
arr.forEach((ele) => {
  console.log(ele);
});

// 3. for...in loop
// The for...in statement iterates over the properties of an object.
// The block of code inside the loop will be executed once for each property.
let obj = {
  name: "vikas",
  age: 25,
  salary: "123456",
};

for (let key in obj) {
  console.log(key, obj[key]);
}

// 4. for...of loop
// The for...of statement iterates over the values of an iterable object (like an array or a string).
// The block of code inside the loop will be executed once for each value.
let arr2 = [6, 7, 8, 9, 10];
for (let value of arr2) {
  console.log(value);
}
