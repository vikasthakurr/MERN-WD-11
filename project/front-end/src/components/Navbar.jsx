import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Home } from "lucide-react";

const Navbar = () => {
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-cyan-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/">
              <h2 className="text-2xl font-bold bg-linear-to-r from-cyan-600 to-fuchsia-600 bg-clip-text text-transparent hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 cursor-pointer">
                ShopHub
              </h2>
            </Link>
          </div>

          {/* Search Bar - Middle */}
          <div className="flex-1 max-w-xl mx-8">
            <div
              className={`relative transition-all duration-300 ${
                searchFocus ? "scale-105" : ""
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search
                  className={`h-5 w-5 transition-colors duration-300 ${
                    searchFocus ? "text-cyan-500" : "text-gray-400"
                  }`}
                />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Navigation Links - Right */}
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="group flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-all duration-300 relative"
            >
              <Home className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              to="/cart"
              className="group flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-all duration-300 relative"
            >
              <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Cart</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              to="/profile"
              className="group flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-all duration-300 relative"
            >
              <User className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Profile</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
