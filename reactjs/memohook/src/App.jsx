import React from "react";
import { useState, useMemo } from "react";
import Child from "./Child";

const App = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  //function copying hard situation
  // console.log("hii");
  function sum() {
    console.log("function called");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum = sum + i;
    }
    return sum;
  }
  function sayHi() {
    console.log("hi");
  }
  // const res = sum();
  const res = useMemo(() => sum(), []);
  return (
    <div>
      <p>the value of sum is:{res}</p>
      <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}>increase</button>

      <br></br>
      <br></br>
      <p>value of count1:{count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>increase1</button>

      <br></br>
      <br></br>
      <Child count1={count1} sayHi={sayHi} />
    </div>
  );
};

export default App;
