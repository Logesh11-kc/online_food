import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../hooks/useCart';

const Navbar = ({ onCartOpen, onLoginOpen, user, onSearch, searchQuery, isAdmin, onAdminToggle }) => {
  const { getCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-primary-600">FoodieExpress</h1>

          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search restaurants or dishes..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={onLoginOpen} className="flex items-center space-x-1 text-gray-700 hover:text-primary-600">
              <User className="w-5 h-5" />
              <span>{user ? user.name : 'Login'}</span>
            </button>

            <button onClick={onCartOpen} className="relative flex items-center space-x-1 text-gray-700 hover:text-primary-600">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
              {getCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCount()}
                </span>
              )}
            </button>

            <button
              onClick={onAdminToggle}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                isAdmin ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {isAdmin ? 'Admin' : 'User'}
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => onSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-3">
              <button onClick={() => { onLoginOpen(); setIsMenuOpen(false); }} className="flex items-center space-x-2 text-gray-700">
                <User className="w-5 h-5" />
                <span>{user ? user.name : 'Login'}</span>
              </button>
              <button onClick={() => { onCartOpen(); setIsMenuOpen(false); }} className="flex items-center space-x-2 text-gray-700">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart ({getCount()})</span>
              </button>
              <button onClick={onAdminToggle} className={`px-3 py-1 rounded-full text-xs font-medium ${isAdmin ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                {isAdmin ? 'Admin Mode' : 'User Mode'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;