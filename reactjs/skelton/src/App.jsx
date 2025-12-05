import React from "react";
import Card from "./Card";
import Skelton from "./Skelton";
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return <div>{loading ? <Skelton /> : <Card />}</div>;
};

export default App;
