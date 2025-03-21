import React from 'react';
import { Shield, Award, Users, HeartHandshake } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About BroadPeak Construction</h1>
          <p className="text-xl text-gray-600">
            Building excellence and trust since 1995
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1995, BroadPeak Construction has grown from a small local contractor to one of the region's most trusted construction companies. Our journey has been built on a foundation of quality, integrity, and customer satisfaction.
            </p>
            <p className="text-gray-600">
              With over 25 years of experience in the construction industry, we've successfully completed thousands of projects, ranging from small residential renovations to large commercial developments.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To deliver exceptional construction services that exceed client expectations through innovation, quality craftsmanship, and unwavering commitment to safety and sustainability.
            </p>
            <p className="text-gray-600">
              We strive to build lasting relationships with our clients, partners, and employees while maintaining the highest standards of professionalism and integrity in everything we do.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: "Safety First",
              description: "Rigorous safety protocols and continuous training ensure the wellbeing of our team and clients."
            },
            {
              icon: Award,
              title: "Quality Assured",
              description: "Industry-leading standards and meticulous attention to detail in every project."
            },
            {
              icon: Users,
              title: "Expert Team",
              description: "Highly skilled professionals with extensive experience in construction."
            },
            {
              icon: HeartHandshake,
              title: "Client Focus",
              description: "Dedicated to understanding and exceeding our clients' expectations."
            }
          ].map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Certifications & Insurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Certifications</h3>
              <ul className="space-y-3">
                {[
                  "Licensed General Contractor",
                  "OSHA Safety Certified",
                  "Green Building Certified",
                  "Quality Management System ISO 9001"
                ].map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Insurance Coverage</h3>
              <ul className="space-y-3">
                {[
                  "General Liability Insurance",
                  "Workers' Compensation",
                  "Professional Liability Insurance",
                  "Builder's Risk Insurance"
                ].map((insurance, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                    {insurance}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;