import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'; // Correct import for v2

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <ShoppingCartIcon className="h-6 w-6 text-white transform transition-transform duration-300 hover:scale-110" /> {/* Cart Icon */}
            <h1 className="text-white font-extrabold text-2xl tracking-wide hover:text-gray-200 transition-all duration-300">BuyNest</h1>
          </div>

        
          <div className="flex space-x-6">
            <button
              onClick={() => navigate('/')}
              className="text-white font-medium text-lg py-2 px-4 rounded-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => navigate('/add-product')}
              className="text-white font-medium text-lg py-2 px-4 rounded-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
