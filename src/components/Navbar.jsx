import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            src="https://assets.centralindex.com/N/45/71a8f8a4bf4470f2a9b56b3960d52503_100.jpg"
            alt="GrowWell"
            className="h-10 w-10 mr-3"
          />
          <span className="text-xl font-semibold">GrowWell</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/supported-diets" className="hover:text-yellow-400">Supported Diets</Link>
        </nav>

        {/* Sign Up / Login */}
        <div className="flex items-center space-x-4">
          <Link to="/signup" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
            Sign Up
          </Link>
          <Link to="/login" className="text-white hover:text-orange-400">
            Already a member? Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
