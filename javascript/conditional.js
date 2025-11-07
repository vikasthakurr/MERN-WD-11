// Conditional Statements in JavaScript

// 1. if-else statement
// The if-else statement executes a block of code if a specified condition is true.
// If the condition is false, another block of code can be executed.
let age = 13;
if (age > 18) {
  console.log("you are eligible to vote");
} else if (age === 18) {
  console.log("you can vote but u r a teenager");
} else {
  console.log("invalid age");
}

// 2. Ternary Operator
// The conditional (ternary) operator is a shorthand for the if-else statement.
// It takes three operands: a condition followed by a question mark (?), 
// then an expression to execute if the condition is truthy followed by a colon (:), 
// and finally the expression to execute if the condition is falsy.
console.log(age >= 18 ? "you can vote" : "cant vote");

// 3. switch statement
// The switch statement evaluates an expression, matching the expression's value to a
// case clause, and executes statements associated with that case.
switch (age) {
  case 10:
    console.log("age is 10");
    break;
  case 18:
    console.log("can vote but age is just 18");
    break;
  default:
    console.log("enter valid age");
}