import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Shield, Award, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partnerLogos = [
  { src: '/partners/brand-ago-kitchen.jpg', alt: 'AGO Kitchen' },
  { src: '/partners/brand-benjamin-moore.jpg', alt: 'Benjamin Moore' },
  { src: '/partners/brand-bosch.jpg', alt: 'Bosch' },
  { src: '/partners/brand-construct-canada.jpg', alt: 'Construct Canada' },
  { src: '/partners/brand-dewalt.jpg', alt: 'DeWalt' },
  { src: '/partners/brand-flextile.jpg', alt: 'Flextile' },
  { src: '/partners/brand-hilti.jpg', alt: 'Hilti' },
  { src: '/partners/brand-home-depot-pro.jpg', alt: 'Home Depot Pro' },
  { src: '/partners/brand-home-hardware.jpg', alt: 'Home Hardware' },
  { src: '/partners/brand-husqvarna.jpg', alt: 'Husqvarna' },
  { src: '/partners/brand-lowes.jpg', alt: 'Lowes' },
  { src: '/partners/brand-mapei.jpg', alt: 'Mapei' },
  { src: '/partners/brand-milwaukee.jpg', alt: 'Milwaukee' },
  { src: '/partners/brand-olympia-tile.jpg', alt: 'Olympia Tile' },
  { src: '/partners/brand-prosol.jpg', alt: 'Prosol' },
  { src: '/partners/brand-richelieu.jpg', alt: 'Richelieu' },
  { src: '/partners/brand-rona.jpg', alt: 'Rona' },
  { src: '/partners/brand-schluter-systems.jpg', alt: 'Schluter Systems' },
  { src: '/partners/brand-usg-sheetrock-tools.jpg', alt: 'USG Sheetrock Tools' },
  { src: '/partners/brand-york.jpg', alt: 'York' }
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] md:h-[700px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Building Excellence, Delivering Trust</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">Your trusted partner in construction. We bring your vision to life with precision, quality, and dedication.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-blue-900 text-white px-8 py-4 rounded-md hover:bg-blue-800 transition text-center text-lg font-semibold">
                Get a Quote
              </Link>
              <Link to="/services" className="bg-white text-blue-900 px-8 py-4 rounded-md hover:bg-gray-100 transition text-center text-lg font-semibold">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <Shield className="w-16 h-16 text-blue-900 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Licensed & Insured</h3>
              <p className="text-gray-600 text-lg">Fully licensed and insured for your peace of mind</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <Award className="w-16 h-16 text-blue-900 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">25+ Years Experience</h3>
              <p className="text-gray-600 text-lg">Decades of expertise in construction excellence</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <Users className="w-16 h-16 text-blue-900 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Expert Team</h3>
              <p className="text-gray-600 text-lg">Skilled professionals dedicated to quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16">
        <div className="w-full">
          <img 
            src="/logo/awards.jpg" 
            alt="BroadPeak Construction Awards" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
                title: "Commercial Building",
                description: "Modern office complex renovation"
              },
              {
                image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80",
                title: "Residential Complex",
                description: "Luxury apartment development"
              },
              {
                image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?auto=format&fit=crop&q=80",
                title: "Industrial Facility",
                description: "Manufacturing plant expansion"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition group">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-600 text-lg mb-6">{project.description}</p>
                  <Link to="/services" className="inline-flex items-center text-blue-900 font-semibold text-lg group">
                    Learn More <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                name: "John Smith",
                role: "Property Developer",
                content: "BroadPeak Construction delivered exceptional quality and professionalism throughout our project. Their attention to detail was impressive."
              },
              {
                name: "Sarah Johnson",
                role: "Business Owner",
                content: "Working with BroadPeak was a great experience. They completed our office renovation on time and within budget."
              },
              {
                name: "Michael Brown",
                role: "Facility Manager",
                content: "Their expertise in commercial construction is unmatched. The team was responsive and professional from start to finish."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-xl">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Logo Slider */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Trusted Partners</h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="partner-logos-slider"
          >
            {partnerLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-4">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-28 w-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 text-gray-200">Contact us today for a free consultation and quote</p>
          <Link to="/contact" className="bg-white text-blue-900 px-10 py-4 rounded-md hover:bg-gray-100 transition inline-block text-lg font-semibold">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;