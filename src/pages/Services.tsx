import React from 'react';
import { Link } from 'react-router-dom';
import { Paintbrush2, Grid, Hammer, Blocks, Pencil, Building2, Construction, Droplets, Home, AtSign as RoadSign } from 'lucide-react';

const services = [
  { id: 'flooring', name: 'Flooring', icon: Grid },
  { id: 'painting', name: 'Painting', icon: Paintbrush2 },
  { id: 'drywall', name: 'Drywall', icon: Construction },
  { id: 'masonry', name: 'Masonry', icon: Blocks },
  { id: 'caulking', name: 'Caulking', icon: Pencil },
  { id: 'balcony-restoration', name: 'Balcony Restoration', icon: Building2 },
  { id: 'concrete', name: 'Concrete', icon: Hammer },
  { id: 'waterproofing', name: 'Garage Rooftop Slab Waterproofing', icon: Droplets },
  { id: 'roofing', name: 'Roofing', icon: Home },
  { id: 'asphalt', name: 'Asphalt', icon: RoadSign }
];

const Services = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 mb-12">
            Comprehensive construction solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <Icon className="w-12 h-12 text-blue-900 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600">
                  Click to learn more about our {service.name.toLowerCase()} services
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;