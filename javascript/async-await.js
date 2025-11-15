// What is Asynchronous Code?
// ---------------------------------
// JavaScript is single-threaded, meaning it can only do one thing at a time.
// Asynchronous operations allow your program to start a long-running task (like fetching data from a server)
// and continue to run other code while waiting for that task to complete, instead of blocking the main thread.

// ---------------------------------
// Introduction to Promises
// ---------------------------------
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// It's a placeholder for a value you don't have yet but will have at some point in the future.

// A Promise has three states:
// 1. pending: The initial state; the operation has not completed yet.
// 2. fulfilled: The operation completed successfully, and the promise has a resulting value.
// 3. rejected: The operation failed, and the promise has a reason for the failure.

// --- Creating a Promise ---
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulate a successful or failed operation
  setTimeout(() => {
    if (success) {
      resolve("The operation was successful!"); // Send a success value
    } else {
      reject("The operation failed."); // Send an error reason
    }
  }, 2000); // Simulate a 2-second delay
});

// --- Consuming a Promise using .then(), .catch(), and .finally() ---
myPromise
  .then((successMessage) => {
    // .then() is called when the promise is fulfilled (resolved)
    console.log("Success:", successMessage);
  })
  .catch((errorMessage) => {
    // .catch() is called when the promise is rejected
    console.error("Error:", errorMessage);
  })
  .finally(() => {
    // .finally() is always called, regardless of whether the promise was fulfilled or rejected.
    // Useful for cleanup operations.
    console.log("Promise finished.");
  });

// ---------------------------------
// Disadvantages of Promises (The ".then() chaining" problem)
// ---------------------------------
// When you have multiple dependent asynchronous operations, you have to chain .then() calls,
// which can lead to code that is hard to read and maintain, sometimes called "callback hell" or "promise chaining hell".

// Example of promise chaining:
// fetchData()
//   .then(result1 => {
//     return processData(result1);
//   })
//   .then(result2 => {
//     return saveDate(result2);
//   })
//   .then(finalResult => {
//     console.log('All done!', finalResult);
//   })
//   .catch(error => {
//     console.error('An error occurred:', error);
//   });
// This can get complicated with more complex logic inside each .then().

// ---------------------------------
// Async/Await: A Modern Approach
// ---------------------------------
// Async/await is "syntactic sugar" built on top of Promises. It makes asynchronous code look and behave
// more like synchronous code, which makes it much easier to read and write.

// --- The `async` keyword ---
// The `async` keyword is used to declare an asynchronous function.
// An async function always returns a Promise. If the function returns a value, the Promise will be resolved with that value.
// If the function throws an error, the Promise will be rejected with that error.

// --- The `await` keyword ---
// The `await` keyword can only be used inside an `async` function.
// It pauses the execution of the async function and waits for the Promise to resolve.
// Once the Promise is resolved, it "unwraps" the value from the Promise, so you can use it directly.
// If the Promise is rejected, it throws an error, which you can catch with a try...catch block.

// --- Basic Async/Await Example ---
const myAsyncFunction = async () => {
  console.log("Inside async function, before promise...");
  try {
    // 'await' pauses the function until the promise is settled.
    const result = await myPromise;
    console.log("Promise resolved with:", result); // This line waits for the promise to finish
    return result;
  } catch (error) {
    console.error("Promise rejected with:", error);
  } finally {
    console.log("Async function finished.");
  }
};

// Calling an async function
myAsyncFunction();
console.log("Code after calling async function continues to run.");

// ---------------------------------
// Example: API Calling with fetch and Async/Await
// ---------------------------------
// `fetch` is a modern browser API for making network requests. It returns a Promise.

const fetchUserData = async () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users/1";
  console.log("Fetching user data...");

  try {
    // 1. Await the fetch call to get a Response object.
    const response = await fetch(apiUrl);

    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 2. Await the .json() method to parse the response body as JSON.
    // .json() also returns a promise!
    const userData = await response.json();

    console.log("User Data:", userData);
    // You can now work with the data synchronously
    console.log(
      `User's name is ${userData.name} and they live in ${userData.address.city}.`
    );
  } catch (error) {
    // Catches errors from the network request (e.g., network down) or from a non-ok HTTP status.
    console.error("Could not fetch user data:", error);
  }
};

// Call the function to see it in action
fetchUserData();

// ---------------------------------
// Advanced Promise Methods
// ---------------------------------

// --- Promise.all() ---
// Takes an array of promises and returns a single promise that resolves when ALL of the input promises have resolved.
// It rejects if ANY of the promises reject. Useful for running multiple independent operations concurrently.
const promise1 = Promise.resolve("First");
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Second"), 1000)
);
const promise3 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("Promise.all resolved:", values); // ["First", "Second", {userId: 1, ...}]
  })
  .catch((error) => {
    console.error("Promise.all rejected:", error);
  });

// --- Promise.race() ---
// Takes an array of promises and returns a single promise that resolves or rejects as soon as the FIRST promise in the array resolves or rejects.
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve("I won!"), 1000)),
  new Promise((_, reject) => setTimeout(() => reject("I lost!"), 500)),
])
  .then((value) => console.log("Promise.race resolved:", value)) // This won't run
  .catch((error) => console.error("Promise.race rejected:", error)); // 'I lost!' because it was faster

// --- Promise.allSettled() ---
// Takes an array of promises and returns a single promise that resolves after ALL of the given promises have either resolved or rejected.
// It gives you an array of objects describing the outcome of each promise. It never rejects.
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failure"),
]).then((results) => console.log("Promise.allSettled results:", results));
// [
//   {status: "fulfilled", value: "Success"},
//   {status: "rejected", reason: "Failure"}
// ]

// --- Promise.any() ---
// Takes an array of promises and returns a single promise that resolves as soon as ANY of the promises in the array resolves.
// It only rejects if ALL of the promises reject.
Promise.any([
  Promise.reject("Fail 1"),
  Promise.reject("Fail 2"),
  new Promise((resolve) => setTimeout(() => resolve("Success!"), 500)),
])
  .then((value) => console.log("Promise.any resolved:", value)) // 'Success!'
  .catch((error) => console.error("Promise.any rejected:", error)); // This won't run
