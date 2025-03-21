import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with our team for your construction needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="flooring">Flooring</option>
                    <option value="painting">Painting</option>
                    <option value="drywall">Drywall</option>
                    <option value="masonry">Masonry</option>
                    <option value="caulking">Caulking</option>
                    <option value="balcony">Balcony Restoration</option>
                    <option value="concrete">Concrete</option>
                    <option value="waterproofing">Garage Rooftop Waterproofing</option>
                    <option value="roofing">Roofing</option>
                    <option value="asphalt">Asphalt</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-900 mr-4" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">Main: +1 (647) 767-0076</p>
                    <p className="text-gray-600">Emergency: +1 (647) 767-0076</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-900 mr-4" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">broadpeakconstructionltd@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-900 mr-4" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">
                      150 Crosby Avenue<br />
                      Richmond Hill, ON L4C 9N5<br />
                      Canada
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-900 mr-4" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 text-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Emergency Services</h2>
              <p className="mb-4">
                24/7 emergency construction services available for urgent situations.
              </p>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                <span className="text-xl font-semibold">+1 (647) 767-0076</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;