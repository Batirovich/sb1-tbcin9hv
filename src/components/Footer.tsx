import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BroadPeak Construction</h3>
            <p className="text-gray-300">
              Excellence in construction services since 1995. Building your dreams with quality and precision.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 (647) 767-0076</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>broadpeakconstructionltd@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>150 Crosby Avenue<br />Richmond Hill, ON L4C 9N5<br />Canada</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Mon-Fri: 8AM-6PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-blue-400"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:text-blue-400"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2022 BroadPeak Construction Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;