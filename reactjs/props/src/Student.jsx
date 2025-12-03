import React from "react";
import Card from "./Card";

const Student = ({ Myname, age }) => {
  // console.log(props);
  return (
    <div>
      <Card Myname={Myname} age={age} />
    </div>
  );
};

export default Student;
