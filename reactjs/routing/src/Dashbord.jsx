import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <div className="flex flex-wrap justify-center w-full">
        <button className="p-4 bg-green-500 text-white rounded-lg shadow-lg mr-4">
          Explore
        </button>
        <a href="www.google.com/">
          <button className="p-4 bg-green-500 text-white rounded-lg shadow-lg">
            Read More
          </button>
          <Link to="/about">home</Link>
        </a>
      </div>
    </div>
  );
};

export default Home;
