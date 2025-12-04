import React from "react";
import { useState, useEffect } from "react";

const Custom = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
//   localStorage.setItem("apidata", data);
  return [data];
};

export default Custom;
