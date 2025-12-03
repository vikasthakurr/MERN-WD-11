import React from "react";

const Child = (props) => {
  //   console.log(props);
  return (
    <div>
      <input
        value={props.name}
        placeholder="enter name"
        type="text"
        onChange={(e) => props.setName(e.target.value)}
      ></input>
      <p>value inside child:{props.name}</p>
    </div>
  );
};

export default Child;
