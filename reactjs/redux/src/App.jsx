import React from "react";
import AddTodo from "./AddTodo";
import ViewTodo from "./ViewTodo";
import Dummy from "./Dummy";

const App = () => {
  return (
    <div>
      <AddTodo />
      <br></br>
      <br></br>
      <ViewTodo />

      <Dummy />
    </div>
  );
};

export default App;
