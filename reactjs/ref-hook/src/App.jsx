import React, { useState, useRef, useLayoutEffect } from "react";

const App = () => {
  // console.log("hello");
  const [count, setCount] = useState(0);
  const ref = useRef();
  // console.log(ref);
  // let a = 0;
  const handleIncrement = () => {
    setCount(count + 1);
    // a = a + 1;
    // console.log(a);
    // console.log(ref.current);
    // ref.current = ref.current + 1;
    // console.log(ref.current);
  };
  useLayoutEffect(() => {
    ref.current.style.color = "red";
    // ref.current.style.backgroundColor = "yellow";
  });
  // console.log(ref);
  return (
    <div>
      <p ref={ref}>count is:{count}</p>
      {/* {console.log(ref.current)} */}
      {/* {console.log(ref.current)} */}
      {/* {(ref.current.style.backgroundColor = "green")} */}
      {/* {(ref.current.style.color = "green")} */}
      <button ref={ref} onClick={handleIncrement}>
        increase
      </button>
    </div>
  );
};

export default App;
