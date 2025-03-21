import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ServiceDetail = () => {
  const { service } = useParams();

  // Service descriptions
  const serviceDescriptions = {
    'flooring': 'Professional flooring installation and renovation services for residential and commercial properties.',
    'painting': 'Expert painting services for interior and exterior surfaces with premium quality materials.',
    'drywall': 'Professional drywall installation, repair, and finishing services.',
    'masonry': 'Expert masonry services for both new construction and restoration projects.',
    'caulking': 'Professional caulking services for weatherproofing and sealing.',
    'balcony-restoration': 'Comprehensive balcony restoration and waterproofing services.',
    'concrete': 'Professional concrete services for foundations, driveways, and more.',
    'waterproofing': 'Expert waterproofing solutions for rooftops and garage slabs.',
    'roofing': 'Complete roofing services including installation, repair, and maintenance.',
    'asphalt': 'Professional asphalt paving and maintenance services.'
  };

  const serviceTitle = service?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const description = service ? serviceDescriptions[service as keyof typeof serviceDescriptions] : '';

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/services"
          className="inline-flex items-center text-blue-900 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {serviceTitle}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-600">{description}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
              <ol className="space-y-4">
                {[
                  'Initial Consultation',
                  'Site Assessment',
                  'Detailed Quote',
                  'Project Planning',
                  'Implementation',
                  'Quality Check',
                  'Project Completion'
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900 text-white mr-4">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="space-y-3">
                {[
                  'High-quality workmanship',
                  'Expert team of professionals',
                  'Timely project completion',
                  'Competitive pricing'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Get a Quote</h2>
              <p className="text-gray-600 mb-4">
                Interested in our {serviceTitle} service? Contact us for a free quote.
              </p>
              <Link
                to="/contact"
                className="block w-full bg-blue-900 text-white text-center py-3 rounded-md hover:bg-blue-800 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;