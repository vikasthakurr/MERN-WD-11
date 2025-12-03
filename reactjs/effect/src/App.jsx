import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // useEffect(fn, []);
  useEffect(() => {
    console.log("mounted");
    return function () {
      console.log("unmounted");
    };
  }, [count]);

  return (
    <div>
      <p>value of count is :{count}</p>
      <button onClick={() => setCount(count + 1)}> Increment</button>
    </div>
  );
};

export default App;
