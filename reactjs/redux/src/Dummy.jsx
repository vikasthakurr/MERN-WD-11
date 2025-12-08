import React from "react";
import { useSelector } from "react-redux";

const Dummy = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return <div>Dummy</div>;
};

export default Dummy;
