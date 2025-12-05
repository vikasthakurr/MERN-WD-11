import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 transform hover:scale-105 transition-transform duration-300">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Welcome to React Router
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore the power of client-side routing with React Router
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                Fast Navigation
              </h3>
              <p className="text-sm text-indigo-700">
                Lightning-fast page transitions without reload
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Modern Design
              </h3>
              <p className="text-sm text-purple-700">
                Beautiful UI with Tailwind CSS
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-pink-900 mb-2">
                Easy Routing
              </h3>
              <p className="text-sm text-pink-700">
                Simple and intuitive routing system
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:shadow-xl border-2 border-indigo-600 transform hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Responsive</div>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">Fast</div>
            <div className="text-sm text-gray-600">Performance</div>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-pink-600 mb-2">Easy</div>
            <div className="text-sm text-gray-600">To Use</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
