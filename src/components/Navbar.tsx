import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/logo/logo.png" alt="BroadPeak Construction" className="h-12 w-auto mr-3" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-900">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-900">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-900">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-900">Contact</Link>
            <a href="tel:+16477670076" className="flex items-center text-blue-900 font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              +1 (647) 767-0076
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Services</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-900">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Contact</Link>
            <a href="tel:+16477670076" className="block px-3 py-2 text-blue-900 font-semibold">
              <Phone className="w-5 h-5 inline mr-2" />
              +1 (647) 767-0076
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;