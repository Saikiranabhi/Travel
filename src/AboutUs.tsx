import React from 'react';
import { Globe, Award, Users, Heart } from 'lucide-react';

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'With over 15 years in the travel industry, Sarah founded TravelEase with a vision to make personalized travel accessible to everyone.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Michael ensures that every TravelEase journey runs smoothly, from booking to return.'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      position: 'Head of Customer Experience',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Elena is dedicated to creating unforgettable experiences for every TravelEase customer.'
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'Technology Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'David leads our technology initiatives, ensuring our platform provides a seamless experience for all users.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About TravelEase</h1>
          <p className="text-xl max-w-3xl">Your trusted partner for unforgettable travel experiences since 2015.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto">
              <p className="mb-4">
                TravelEase was founded in 2015 with a simple mission: to make personalized travel experiences accessible to everyone. What began as a small team of passionate travelers has grown into a trusted travel agency serving thousands of customers worldwide.
              </p>
              <p className="mb-4">
                Our journey started when our founder, Sarah Johnson, experienced the challenges of planning a complex multi-city trip across Asia. She realized that while there were many travel resources available, there was a gap in personalized service that combined local expertise with modern technology.
              </p>
              <p className="mb-4">
                Today, TravelEase connects travelers with authentic experiences, reliable transportation, and knowledgeable guides in destinations around the world. We believe that travel should be both seamless and transformative, and we work tirelessly to create journeys that reflect the unique interests and needs of each traveler.
              </p>
              <p>
                As we continue to grow, our commitment remains the same: to help you discover the world on your terms, with the support and expertise you need to travel with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center mb-6">
                <Globe className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Authentic Experiences</h3>
              <p className="text-gray-600">
                We believe in creating genuine connections with local cultures and communities, going beyond tourist attractions to discover the heart of each destination.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center mb-6">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
              <p className="text-gray-600">
                Every traveler is unique, and we take pride in tailoring each journey to reflect individual preferences, interests, and travel styles.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center mb-6">
                <Heart className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Responsible Travel</h3>
              <p className="text-gray-600">
                We are committed to sustainable practices that respect local environments and communities, ensuring that tourism benefits everyone involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-xl">Years of Experience</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-xl">Destinations</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <p className="text-xl">Happy Travelers</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-xl">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="mx-auto mb-6" size={48} />
            <blockquote className="text-2xl italic mb-6">
              "TravelEase transformed our family vacation into an unforgettable adventure. Their attention to detail and personalized service made all the difference."
            </blockquote>
            <div className="font-semibold text-xl">— The Anderson Family</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;