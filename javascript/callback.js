// What is a callback function?
// A callback function is a function that is passed as an argument to another function.
// The outer function then calls the callback function at a later time.
// This is a common pattern in JavaScript for handling asynchronous operations,
// allowing code to execute after a particular task has completed.

// Example 1: A simple callback
// We have a function `sayHi` that takes a name and a callback function `cb`.
// It logs a greeting and then calls the callback function.
/*
function sayHi(name, cb) {
  console.log(`hii good morning ${name}`);
  cb(); // The callback function is called here
}

function sayBye() {
  console.log("bye");
}

We call sayHi and pass the sayBye function as the callback.
So, after "hii good morning vikas" is printed, "bye" will be printed.
sayHi("vikas", sayBye);
*/

// Example 2: Simulating a real-world scenario with callbacks (Making Maggi)
// This example demonstrates how callbacks can be used to perform a sequence of tasks in order.

// The main function that starts the process of making Maggi.
// It takes the raw maggi brand and a callback function.
function makeMaggi(rawmaggi, cb) {
  console.log(`we are starting the maggi process and with ${rawmaggi}`);
  // After logging the message, it calls the callback function to proceed to the next step.
  cb();
}

// This function simulates boiling water.
// It takes a callback function to be executed after the water is boiled.
function waterBoil(cb) {
  console.log("we are boiling water to add maggi");
  // After logging the message, it calls the callback to proceed.
  cb();
}

// This function simulates adding the Maggi and masala to the boiling water.
// It also takes a callback.
function addMaggi(cb) {
  console.log("we are adding maggi and masala");
  // Calls the callback to move to the next step.
  cb();
}

// This function simulates serving the Maggi.
function serve(cb) {
  console.log("maggi is ready to serve");
  // Calls the final callback.
  cb();
}

// This is where we execute the entire process.
// We start by calling makeMaggi.
// The subsequent steps are nested inside each other as anonymous callback functions.
// This pattern of deeply nested callbacks is often called "Callback Hell" or the "Pyramid of Doom".
// It can make the code hard to read, understand, and maintain because the code indents deeper
// with each new asynchronous action.
makeMaggi("yupee", () => {
  // This is the callback for makeMaggi. It calls waterBoil.
  waterBoil(() => {
    // This is the callback for waterBoil. It calls addMaggi.
    addMaggi(() => {
      // This is the callback for addMaggi. It calls serve.
      serve(() => {
        // This is the final callback after the Maggi is served.
        console.log("all process are done ");
      });
    });
  });
});

// In modern JavaScript, problems like "Callback Hell" are often solved using Promises and async/await,
// which allow for writing asynchronous code that looks more like synchronous code and is easier to read and reason about.
