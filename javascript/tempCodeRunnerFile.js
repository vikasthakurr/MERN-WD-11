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
//   5,
//   6,
//   7,
//   8,
//   9,
//   9,
//   0,
//   0,
//   6,
//   5,
//   4,
//   3,
//   56,
//   7,
//   89,
//   4,
//   32,
//   2,
//   46,
//   778,
//   8
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
// console.log(obj1)

// let obj1 = {
//   name: "vikas",
//   age: 25,
// };
// // let obj2 = obj1;
// let obj2 = { ...obj1 };
// obj2.age = 26;
// console.log(obj2);
// console.log(obj1);

let arr1 = [1, 2, 3, 5];
let arr2 = [...arr1];
arr2.push(6);