/*


  What is a Promise?
  ------------------
  A Promise is a special JavaScript object that acts as a placeholder for a value that will be available in the future. 
  It represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

  Think of it like ordering a coffee:
  1. You order and pay. You get a receipt (the Promise).
  2. The receipt guarantees you'll get something eventually. The state is "pending".
  3. Your name is called, and you get your coffee. The promise is "fulfilled" with the coffee as its value.
  4. Or, they tell you the espresso machine is broken. The promise is "rejected" with an error reason.

  A Promise can be in one of three states:
  - pending: The initial state; the asynchronous operation has not completed yet.
  - fulfilled (or resolved): The operation completed successfully, and the promise now has a resulting value.
  - rejected: The operation failed, and the promise has a reason for the failure.

*/

// ==================================================================================
// --- 1. Creating and Consuming a Promise ---
// ==================================================================================

// We create a promise using the `new Promise()` constructor.
// It takes a single argument: an "executor" function.
// The executor function itself takes two arguments: `resolve` and `reject`.
const myFirstPromise = new Promise((resolve, reject) => {
  console.log("Promise started... (e.g., fetching data from a server)");

  // We use setTimeout to simulate a delay, like a network request.
  setTimeout(() => {
    const isSuccess = true; // Change this to false to see the rejection.

    if (isSuccess) {
      // If the operation is successful, we call `resolve` with the resulting data.
      // This moves the promise from 'pending' to 'fulfilled'.
      resolve("Here is your data! (Coffee is ready)");
    } else {
      // If the operation fails, we call `reject` with an error reason.
      // This moves the promise from 'pending' to 'rejected'.
      reject("Data fetch failed! (Espresso machine is broken)");
    }
  }, 2000); // 2-second delay
});

// To get the value from a promise, we "consume" it using handler methods.
myFirstPromise
  .then((successData) => {
    // .then() is called when the promise is FULFILLED.
    // The `successData` argument is whatever was passed to the `resolve()` function.
    console.log("✅ FULFILLED:", successData);
  })
  .catch((errorReason) => {
    // .catch() is called when the promise is REJECTED.
    // The `errorReason` argument is whatever was passed to the `reject()` function.
    console.error("❌ REJECTED:", errorReason);
  })
  .finally(() => {
    // .finally() is ALWAYS called, whether the promise was fulfilled or rejected.
    // It's perfect for cleanup tasks, like hiding a loading spinner.
    console.log("Promise operation has completed.");
  });

// ==================================================================================
// --- 2. Promise Chaining ---
// ==================================================================================
// The real power of promises comes from chaining. You can link `.then()` calls together
// to create a clean sequence of asynchronous operations.

// The `fetch` API is a perfect example, as it returns a promise.
console.log("\n--- Starting API fetch chain ---");
fetch("https://api.github.com/users/kushvijay234")
  .then((response) => {
    // The first `.then` receives the initial HTTP response.
    console.log("Step 1: Received response from server.");
    if (!response.ok) {
      // If the response is not OK (e.g., 404 Not Found), we throw an error.
      // This will skip all other `.then` blocks and go straight to the `.catch`.
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    // `response.json()` is also an async operation that returns a promise.
    // We return it here, so the next `.then` will wait for it to finish.
    return response.json();
  })
  .then((userData) => {
    // This `.then` receives the data from `response.json()`.
    console.log("Step 2: Parsed JSON data.");
    console.log(`User's name is ${userData.name}.`);
    // You can return a modified value to the next link in the chain.
    return { name: userData.name, public_repos: userData.public_repos };
  })
  .then((filteredData) => {
    console.log("Step 3: Processed and filtered data.");
    console.log(
      `Final data to display: ${filteredData.name} has ${filteredData.public_repos} public repos.`
    );
  })
  .catch((error) => {
    // This single `.catch` at the end will handle any error that occurs in the `fetch`
    // or any of the `.then` blocks in the chain.
    console.error("❌ ERROR in fetch chain:", error);
  })
  .finally(() => {
    console.log("--- API fetch chain complete ---");
  });

// ==================================================================================
// --- 3. Static Promise Methods ---
// ==================================================================================
// These are helper methods available directly on the `Promise` object.

// Helper promises for the examples below:
const p1 = Promise.resolve("Success 1"); // A promise that resolves immediately.
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Success 2"), 1000)
);
const p3 = Promise.reject("Failure 3"); // A promise that rejects immediately.

// --- Promise.all() ---
// Use case: When you need ALL promises to succeed.
// It takes an array of promises and waits for all of them to resolve.
// If ANY promise rejects, `Promise.all` immediately rejects.
Promise.all([p1, p2])
  .then((results) => console.log("\nPromise.all SUCCESS:", results)) // ["Success 1", "Success 2"]
  .catch((error) => console.error("Promise.all FAILED:", error));

Promise.all([p1, p2, p3])
  .then((results) => console.log("Promise.all SUCCESS:", results))
  .catch((error) => console.error("Promise.all FAILED:", error)); // "Failure 3"

// --- Promise.allSettled() ---
// Use case: When you want to know the outcome of every promise, regardless of success or failure.
// It NEVER rejects. It waits for all promises to "settle" (either fulfill or reject).
Promise.allSettled([p1, p2, p3]).then((results) => {
  console.log("\nPromise.allSettled RESULTS:");
  results.forEach((r) =>
    console.log(
      `- Status: ${r.status}, ${
        r.status === "fulfilled" ? `Value: ${r.value}` : `Reason: ${r.reason}`
      }`
    )
  );
});

// --- Promise.race() ---
// Use case: When you only care about the FIRST promise to finish, win or lose.
// It settles (resolves or rejects) as soon as the first promise in the array settles.
Promise.race([p2, p3])
  .then((result) => console.log("\nPromise.race WINNER:", result))
  .catch((error) => console.error("Promise.race LOSER:", error)); // p3 is faster, so it rejects.

// --- Promise.any() ---
// Use case: When you need just ONE promise to succeed.
// It resolves as soon as the first promise FULFILLS. It ignores rejections.
// It only rejects if ALL promises in the array reject.
Promise.any([p3, p2, p1])
  .then((result) => console.log("\nPromise.any FIRST SUCCESS:", result)) // p1 is fastest to fulfill.
  .catch((error) => console.error("Promise.any ALL FAILED:", error));

// ==================================================================================
// --- 4. Disadvantages of Promises ---
// ==================================================================================
/*
  While powerful, Promises are not perfect.

  1.  Verbosity:
      For complex sequences, `.then()` chains can still become long and nested,
      which can be harder to read than modern alternatives.

  2.  No Native Cancellation:
      Once a promise is created, there is no built-in way to cancel it. If you start a
      network request and the user navigates away, the request will still complete,
      potentially wasting bandwidth and resources.

  3.  Error Handling Pitfalls:
      If you forget to add a `.catch()` at the end of a chain, errors can be "swallowed"
      silently, leading to "Unhandled Promise Rejection" warnings in the console that
      can be difficult to trace back to their origin.

  The `async/await` syntax (introduced in ES2017) was created to address these issues.
  It's "syntactic sugar" on top of Promises that lets you write asynchronous code
  that looks and behaves more like synchronous code, making it cleaner and easier to read.
  However, understanding Promises is crucial because `async/await` is powered by them.
*/
