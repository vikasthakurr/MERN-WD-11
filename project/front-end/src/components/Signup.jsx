import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        formData
      );
      alert("User registered successfully");
      navigate("/login");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSubmit = () => {
  //   alert("User registered successfully");
  //   navigate("/login");
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden transform transition-all hover:scale-[1.01] duration-300">
        <div className="p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Create Account
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Join us to getting started today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
              </div>
              <input
                type="text"
                name="username"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-700"
                placeholder="Full Name"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
              </div>
              <input
                type="email"
                name="email"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-700"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
              </div>
              <input
                type="password"
                name="password"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-700"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg hover:from-purple-700 hover:to-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Sign Up</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-purple-600 hover:text-purple-500 hover:underline transition-all"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
