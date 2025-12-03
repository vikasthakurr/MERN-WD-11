import React, { useState } from "react";
// import Student from "./Student";
import Child from "./Child";
const App = () => {
  const [name, setName] = useState("");
  // console.log(name);
  return (
    <div>
      <Child name={name} setName={setName} />
      <p>value coming from child:{name}</p>
    </div>
  );
};

export default App;
