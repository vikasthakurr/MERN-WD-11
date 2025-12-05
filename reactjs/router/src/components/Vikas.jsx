import React from "react";
import { Link } from "react-router-dom";

const Vikas = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 animate-fadeIn">
      {/* Back Button */}
      <Link
        to="/about"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium mb-6 transition-colors"
      >
        ← Back to About
      </Link>

      {/* Profile Card */}
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-5xl mb-6 shadow-lg">
          👨‍💻
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-2">Vikas</h2>
        <p className="text-lg text-indigo-600 mb-4">Full Stack Developer</p>

        <div className="w-full max-w-2xl">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">About</h3>
            <p className="text-gray-600 leading-relaxed">
              Passionate developer with expertise in React, Node.js, and modern
              web technologies. Dedicated to creating beautiful and functional
              web applications that provide exceptional user experiences.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "React",
                "JavaScript",
                "Node.js",
                "Tailwind CSS",
                "React Router",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Contact
            </a>
            <a
              href="#"
              className="px-6 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vikas;
