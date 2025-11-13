let arr = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [12, 4, 5, 6, 7];

for (let i = 0; i < arr.length; i++) {}
for (let i = 0; i < arr2.length; i++) {}

//hof
//they receive the callback function..
//they return a function as a result

//map

arr.map((ele) => {
  console.log(ele * 5);
});
console.log(arr);

//map

// arr.map((ele) => {
//   console.log(ele * 5);
// });
// console.log(arr);

//filter

// arr.filter((ele) => {
//   if (ele % 2 == 0) {
//     console.log(ele);
//   }
// });
// console.log(arr);

//reduce
// let result = arr.reduce((acc, ele) => {
//   return acc + ele;
// });
// console.log(result);
//filter

// arr.filter((ele) => {
//   if (ele % 2 == 0) {
//     console.log(ele);
//   }
// });
// console.log(arr);

//reduce
// let result = arr.reduce((acc, ele) => {
//   return acc + ele;
// });
// console.log(result);
