import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducer/TodoSlice.js";

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (inputText == "") return;

    dispatch(addTodo({ text: inputText }));
  };
  return (
    <div>
      <input
        type="text"
        value={inputText}
        placeholder="enter any task"
        onChange={(e) => setInputText(e.target.value)}
      ></input>
      <button onClick={handleClick}>AddTodo</button>
    </div>
  );
};

export default AddTodo;
