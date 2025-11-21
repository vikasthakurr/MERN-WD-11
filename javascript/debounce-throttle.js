function search(query) {
  console.log("searching for", query);
}
// search("vikas");
// search("vikas thakur");
// search("vikas kumar thakur");

// debounce(fn, delay);

// function searchWithDebounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }

function searchWithThrottle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const currentCall = Date.now();
    if (currentCall - lastCall >= delay) {
      lastCall = currentCall;
      fn(...args);
    }
  };
}

const res = searchWithThrottle(search, 2000);
res("vikas");
res("vikas kumar");
res("vikas kumar thakur");
