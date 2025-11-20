// Function Borrowing is a technique in JavaScript where a method from one object is used by another object.
// This is possible because the value of `this` in a function is determined by how the function is called, not where it is defined.
// We can change the context of `this` using `call`, `apply`, and `bind`.

let obj = {
  fname: "vikas",
  lname: "thakur",
  getName: function (city) {
    // `this` here refers to the object that is executing the function.
    console.log(`my name is ${this.fname} ${this.lname} from ${city}`);
  },
};

let obj1 = {
  fname: "akash",
  lname: "kumar",
};

// Normally, obj1 does not have a getName method.
// obj1.getName(); // This would throw a TypeError.

// --- Function Borrowing using .call() ---
// The `call` method invokes a function with a specified `this` context and arguments provided individually.
// Syntax: function.call(thisArg, arg1, arg2, ...)
console.log("--- Using call() ---");
obj.getName.call(obj1, "Agra"); // We are "borrowing" getName from `obj` and executing it in the context of `obj1`.

// --- Function Borrowing using .apply() ---
// The `apply` method is similar to `call`, but it accepts arguments as an array.
// Syntax: function.apply(thisArg, [argsArray])
console.log("--- Using apply() ---");
obj.getName.apply(obj1, ["Delhi"]); // The second argument is an array of arguments for the function.

// --- Function Borrowing using .bind() ---
// The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value.
// It does not execute the function immediately but returns a new function that can be called later.
// Syntax: function.bind(thisArg)
console.log("--- Using bind() ---");
const boundGetName = obj.getName.bind(obj1, "Mumbai"); // Creates a new function `boundGetName` where `this` is permanently bound to `obj1`.
boundGetName(); // Now we can call this new function.
// Or call it immediately: obj.getName.bind(obj1)("Mumbai");

// --- How does the Browser Object Model (BOM) use this? ---

// The Browser Object Model (BOM) represents the browser window and its features. The global object in a browser is `window`.
// Functions defined in the global scope are methods of the `window` object.

// Example:
var fname = "Global Fname";
var lname = "Global Lname";

function showName() {
  // In a browser environment, `this` inside this function (when called globally) refers to the `window` object.
  console.log(`This name is ${this.fname} ${this.lname}`);
}

// showName(); // In a browser, this would output "This name is Global Fname Global Lname"

// We can use function borrowing to change the context of `showName` to our objects.
console.log("--- BOM example with call() ---");
// showName.call(obj); // In a browser, this would output "my name is vikas thakur"
// showName.call(obj1); // In a browser, this would output "my name is akash kumar"

// The BOM itself doesn't directly "use" call, apply, or bind in its public APIs for us to see.
// However, these methods are fundamental to how JavaScript works, and many browser-internal operations and frameworks
// built on top of the BOM rely heavily on them to manage the execution context (`this`) of functions,
// especially in event handling. For example, when an event listener is called, the browser sets the `this`
// value to be the element that the event was fired on. We could use `bind` to change that behavior if needed.

let obj2 = {
  fname: "vikas",
  lname: "thakur",
  getName: function (city) {
    console.log(`my name is ${this.fname} ${this.lname}`);
  },
};

let obj3 = {
  fname: "akash",
  lname: "kumar",
};
// obj3.getName();
//call method
// obj2.getName.call(obj3, "agra");
// obj2.getName.apply(obj3,["adsfghsdfgjhj"]);
obj2.getName.bind(obj3)();
// console.log(res);
// res();
