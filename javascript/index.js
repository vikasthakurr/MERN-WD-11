// Hoisting: Var variables are hoisted to the top of their scope and initialized with undefined.
// console.log(a); // Output: undefined
// var a = 10;

// Redeclaration and Reassignment: Var variables can be redeclared and reassigned.
// var a = 10;
// var a = 20; // Redeclared
// a = 40; // Reassigned
// console.log(a); // Output: 40

// Block Scope: Var is not block-scoped.
// {
//   var a = 10;
// }
// console.log(a); // Output: 10

// Function Scope: Var is function-scoped.
// function test() {
//   var a = 20;
//   console.log(a); // Output: 20
// }
// test();
// console.log(a); // Throws a ReferenceError because 'a' is not defined in this scope.

// Const: Const variables cannot be reassigned or redeclared.
// const a = 10;
// const a = 20; // Throws a SyntaxError: Identifier 'a' has already been declared.
// a = 40; // Throws a TypeError: Assignment to constant variable.

// Let: Let variables can be reassigned but not redeclared within the same scope.
// let a = 10;
// a = 50; // Reassigned
// console.log(a); // Output: 50
// let a = 20; // Throws a SyntaxError: Identifier 'a' has already been declared.

// Const: Another example of a const variable.
// const b = 10;



