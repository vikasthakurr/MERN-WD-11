// let a = 10;
// function outer() {
//   let a = 30;
//   console.log(a);

//   function x() {
//     let b = 30;
//     let a = 40;
//     console.log(a);
//     console.log(b);

//     function y() {
//       console.log(a, b);
//       var vikas = "vikas";
//     }
//     y();
//   }
//   x();
// }
// outer();
// console.log(a);
// console.log(b);
// console.log(vikas);

// task-2
// let num = 100;

// function outer1() {
//   let num = 50;
//   console.log("outer1:", num);

//   function outer2() {
//     let num = 30;
//     console.log("outer2:", num);

//     function outer3() {
//       let num = 20;
//       console.log("outer3:", num);

//       function outer4() {
//         console.log("outer4 before:", num);
//         num = 10;
//         console.log("outer4 after:", num);
//       }

//       outer4();
//       console.log("outer3 end:", num);
//     }

//     outer3();
//     console.log("outer2 end:", num);
//   }

//   outer2();
//   console.log("outer1 end:", num);
// }

// outer1();
// console.log("global:", num);

// task-3
// var value = 5;

// function one() {
//   console.log("one:", value);
//   var value = 10;

//   function two() {
//     console.log("two before:", value);
//     let value = 15;
//     console.log("two after:", value);

//     function three() {
//       console.log("three:", value);

//       function four() {
//         value = 25;
//         console.log("four:", value);
//       }

//       four();
//       console.log("three end:", value);
//     }

//     three();
//     console.log("two end:", value);
//   }

//   two();
//   console.log("one end:", value);
// }

// one();
// console.log("global:", value);
