import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="text-white bg-black ">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 py-4 bg-black bg-opacity-70">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            </div>
            <Link to="/" className="text-2xl font-bold">My Muvi</Link>
            
          </div>

          {/* Navbar Links */}
          <div className="flex space-x-6 text-sm font-semibold">
            <Link to="/Login" className="hover:text-gray-400">LOGIN</Link>
          </div>

          {/* Search Box */}
          <div>
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-1 text-white placeholder-gray-400 bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
