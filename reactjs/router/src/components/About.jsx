import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl text-gray-600">
            Learn more about our team and mission
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are passionate developers dedicated to creating amazing web
              experiences using modern technologies like React and React Router.
              Our mission is to build fast, beautiful, and user-friendly
              applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                  🎯 Our Mission
                </h3>
                <p className="text-sm text-indigo-700">
                  To deliver exceptional web applications that exceed
                  expectations
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  💡 Our Vision
                </h3>
                <p className="text-sm text-purple-700">
                  To be leaders in modern web development and innovation
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h3>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-1 rounded-xl inline-block">
              <Link
                to="/about/vikas"
                className="block bg-white px-6 py-3 rounded-lg font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
              >
                View Team Member: Vikas →
              </Link>
            </div>
          </div>
        </div>

        {/* Nested Route Outlet */}
        <div className="mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default About;
