import React from "react";
import { useSelector } from "react-redux";

const ViewTodo = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return <div>ViewTodo</div>;
};

export default ViewTodo;
