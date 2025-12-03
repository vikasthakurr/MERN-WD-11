import React from "react";

const Card = ({ Myname, age }) => {
  return (
    <div>
      <p>{Myname}</p>
      <p>{age}</p>
    </div>
  );
};

export default Card;
