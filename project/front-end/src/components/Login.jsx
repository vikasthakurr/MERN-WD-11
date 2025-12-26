import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post(
        "http://localhost:3000/api/auth/login",
        formData
      );
      if (!response) return alert("Invalid credentials");
      alert("User logged in successfully");
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden transform transition-all hover:scale-[1.01] duration-300">
        <div className="p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Please sign in to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="email"
                name="email"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-700"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="password"
                name="password"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-700"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-end">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Sign In</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-bold text-blue-600 hover:text-blue-500 hover:underline transition-all"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
