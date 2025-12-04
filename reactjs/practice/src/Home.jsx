import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="nested">Show Nested Component</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
