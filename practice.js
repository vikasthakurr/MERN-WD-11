// function search(query) {
//   console.log("searching for", query);
// }

// function searchWithDebounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }

// function searchWithThrottle(fn, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     let currentCall = Date.now();
//     if (currentCall - lastCall >= delay) {
//       lastCall = currentCall;
//       fn(...args);
//     }
//   };
// }
// let res = searchWithThrottle(search, 2000);
// res("vikas");
// res("vikas thakur");
