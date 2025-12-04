import React from "react";
import Dashbord from "./Dashbord";

const App = () => {
  // let username = "vikas"
  let isLoggedIn = true;
  return <div>{isLoggedIn ? <Dashbord /> : "please login first"}</div>;
};

export default App;
