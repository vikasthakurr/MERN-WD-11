import React from "react";
import { memo } from "react";

const Child = (props) => {
  console.log("child called");
  return <div>{props.count1}</div>;
};

export default memo(Child);
