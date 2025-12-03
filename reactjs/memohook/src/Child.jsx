import React from "react";

const Child = React.memo((props) => {
  console.log("child called");
  return <div>{props.count1}</div>;
});

export default Child;
