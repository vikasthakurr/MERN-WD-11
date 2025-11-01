// ** Global Scope **
// A variable declared outside of any function or block has global scope.
// It can be accessed from anywhere in your JavaScript code.
// let a = 10;

// // You can access the global variable 'a' from within a block.
// // {
// //   console.log(a); // Output: 10
// // }

// // You can also access the global variable 'a' from within a function.
// function test() {
//   console.log(a); // Output: 10
// }
// test();


// ** Block Scope **
// Variables declared with `let` and `const` are block-scoped.
// They are only accessible within the block (`{...}`) in which they are defined.
// {
//   let a = 10;
//   const b = 20;
//   var c = 40; // `var` is not block-scoped.
  // console.log(a, b, c); // Output: 10 20 40
// }
// console.log(a); // Throws a ReferenceError because 'a' is not defined in this scope.
// console.log(b); // Throws a ReferenceError because 'b' is not defined in this scope.
// console.log(c); // Output: 40. 'var' is function-scoped or global-scoped, but not block-scoped.


// ** Function Scope **
// Variables declared with `var`, `let`, or `const` inside a function are function-scoped.
// They are only accessible within that function.
// function test() {
//   var a = 10;
  // console.log(a); // Output: 10
// }
// test();
// console.log(a); // Throws a ReferenceError because 'a' is not defined in this scope.


// ** Lexical (or Static) Scope and Scope Chaining **
// When a function is defined inside another function, the inner function has access
// to the variables of the outer function. This is called lexical scope.
// JavaScript engine searches for the variable in the current scope, if it's not found,
// it goes to the outer scope and so on until it reaches the global scope. This is called scope chaining.
// let a = 10; // Global scope
// function outer() {
//   let a = 30; // Scope of outer function
//   function inner() {
//     let a = 20; // Scope of inner function
//     console.log(a); // Output: 20 (from inner's scope)
//   }
//   inner();
//   console.log(a); // Output: 30 (from outer's scope)
// }
// // test();
// outer();
// console.log(a); // Output: 10 (from global scope)


// ** Closures **
// A closure is the combination of a function bundled together (enclosed) with references
// to its surrounding state (the lexical environment). In other words, a closure gives you
// access to an outer function’s scope from an inner function.
function outer() {
  let a = 10; // 'a' is part of the lexical environment of the inner function.
  function inner() {
    // The inner function "closes over" the variable 'a'.
    // It remembers the value of 'a' even after the outer function has returned.
    console.log(a);
  }
  return inner; // We are returning the inner function itself, not calling it.
}

// When we call outer(), it returns the inner function, which we store in 'res'.
// The returned inner function still has access to the 'a' variable from its lexical scope.
let res = outer();

// When we call res(), which is the inner function, it can still access 'a'.
// This is a closure.
const res1 = res(); // This will log the value of 'a', which is 10.
console.log(res1); // This will log 'undefined' because res() doesn't return anything.
// console.log(res); // This will log the definition of the inner function.
