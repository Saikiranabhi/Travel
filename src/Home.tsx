import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Search, Compass, CreditCard, Star, Shield } from 'lucide-react';

const Home = () => {
  const popularDestinations = [
    {
      id: 1,
      name: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'The city of love and lights with iconic landmarks.'
    },
    {
      id: 2,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Tropical paradise with stunning beaches and culture.'
    },
    {
      id: 3,
      name: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'A blend of traditional culture and modern technology.'
    },
    {
      id: 4,
      name: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'The city that never sleeps with iconic skyline.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Your Perfect Journey</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">Explore the world with personalized travel experiences tailored just for you.</p>
          <Link to="/trip-planning" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
            Plan Your Trip
          </Link>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white shadow-md -mt-20 rounded-lg max-w-5xl mx-auto relative z-10 px-4">
        <div className="container mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Where to?</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Destination" 
                  className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">When?</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                <input 
                  type="date" 
                  className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md font-medium flex items-center justify-center">
                <Search className="mr-2" size={20} />
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDestinations.map(destination => (
              <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Link to="/trip-planning" className="text-blue-600 font-medium hover:text-blue-800">
                    Explore &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TravelEase</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center mb-4">
                <Compass className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Experiences</h3>
              <p className="text-gray-600">Tailored travel plans designed to match your preferences and interests.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center mb-4">
                <CreditCard className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Price Guarantee</h3>
              <p className="text-gray-600">We ensure you get the best deals and value for your travel budget.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safe & Secure</h3>
              <p className="text-gray-600">Your safety is our priority with vetted services and 24/7 support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"TravelEase made our family vacation to Bali absolutely perfect. The personalized itinerary and local guide were exceptional!"</p>
              <div className="font-medium">Sarah Johnson</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"As a solo traveler, I felt safe and well-taken care of throughout my journey. The attention to detail was impressive!"</p>
              <div className="font-medium">Michael Chen</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The car service and guide in Tokyo were fantastic. They made navigating the city so much easier and more enjoyable."</p>
              <div className="font-medium">Emma Rodriguez</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let us help you create memories that will last a lifetime.</p>
          <Link to="/trip-planning" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block">
            Plan Your Trip Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;