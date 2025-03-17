import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Calendar, MapPin, Car, User, Phone, Mail, Download, Printer, Share2 } from 'lucide-react';

const PackageOverview = () => {
  // Mock data for the confirmed booking
  const booking = {
    id: 'BK-12345',
    destination: 'Paris, France',
    startDate: 'June 15, 2025',
    endDate: 'June 22, 2025',
    duration: 7,
    travelers: 2,
    status: 'confirmed',
    totalAmount: 1001,
    touristSpots: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Arc de Triomphe'],
    carDetails: {
      model: 'Toyota Camry',
      type: 'Sedan',
      licensePlate: 'ABC-1234',
      features: ['Air Conditioning', 'Bluetooth', 'Cruise Control'],
      driverName: 'Jean Dupont',
      driverContact: '+33 6 12 34 56 78'
    },
    guideDetails: {
      name: 'Maria Rodriguez',
      languages: ['English', 'Spanish', 'French'],
      specialties: ['Cultural Tours', 'Historical Sites'],
      contact: '+33 6 98 76 54 32',
      email: 'maria.rodriguez@travelease.com'
    },
    packageIncludes: [
      'Private car with driver for the entire duration',
      'Professional guide services',
      'All entrance fees to selected tourist spots',
      '24/7 customer support',
      'Comprehensive travel insurance'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-8 flex items-center">
            <Check className="text-green-600 mr-3" size={24} />
            <div>
              <h2 className="font-bold text-lg">Booking Confirmed!</h2>
              <p>Your trip to {booking.destination} has been successfully booked.</p>
            </div>
          </div>
          
          {/* Step indicator */}
          <div className="mb-8">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full">
                <Check size={16} />
              </div>
              <div className="h-1 flex-1 bg-green-600 mx-2"></div>
              <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full">
                <Check size={16} />
              </div>
              <div className="h-1 flex-1 bg-green-600 mx-2"></div>
              <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full">
                <Check size={16} />
              </div>
              <div className="h-1 flex-1 bg-green-600 mx-2"></div>
              <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full">
                <Check size={16} />
              </div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <div className="text-green-600 font-medium">Trip Details</div>
              <div className="text-green-600 font-medium">Car & Guide</div>
              <div className="text-green-600 font-medium">Payment</div>
              <div className="text-green-600 font-medium">Confirmation</div>
            </div>
          </div>
          
          {/* Booking Details */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-blue-600 text-white p-6">
              <h1 className="text-2xl font-bold">Trip Package Overview</h1>
              <p className="text-blue-100">Booking Reference: {booking.id}</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h2 className="text-lg font-semibold mb-4">Trip Details</h2>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="text-blue-600 mr-2 mt-1" size={18} />
                      <div>
                        <p className="font-medium">Destination</p>
                        <p className="text-gray-600">{booking.destination}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="text-blue-600 mr-2 mt-1" size={18} />
                      <div>
                        <p className="font-medium">Dates</p>
                        <p className="text-gray-600">{booking.startDate} - {booking.endDate}</p>
                        <p className="text-gray-600">{booking.duration} days</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <User className="text-blue-600 mr-2 mt-1" size={18} />
                      <div>
                        <p className="font-medium">Travelers</p>
                        <p className="text-gray-600">{booking.travelers} persons</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status</span>
                      <span className="font-medium text-green-600">Paid</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Method</span>
                      <span>Credit Card</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Amount</span>
                      <span className="font-bold">${booking.totalAmount}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">Selected Tourist Spots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {booking.touristSpots.map((spot, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="text-green-600 mr-2" size={16} />
                      <span>{spot}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-200 pt-6 mb-6">
                <div>
                  <h2 className="text-lg font-semibold mb-4">Car & Driver Details</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Car className="text-blue-600 mr-2" size={18} />
                      <span className="font-medium">{booking.carDetails.model} ({booking.carDetails.type})</span>
                    </div>
                    <p className="text-gray-600 mb-2">License Plate: {booking.carDetails.licensePlate}</p>
                    <div className="mb-3">
                      <p className="font-medium">Features:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {booking.carDetails.features.map((feature, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <p className="font-medium">Driver:</p>
                      <p className="text-gray-600">{booking.carDetails.driverName}</p>
                      <div className="flex items-center mt-1">
                        <Phone className="text-gray-400 mr-1" size={14} />
                        <p className="text-gray-600 text-sm">{booking.carDetails.driverContact}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold mb-4">Guide Details</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium mb-2">{booking.guideDetails.name}</p>
                    <div className="mb-3">
                      <p className="text-gray-600">Languages: {booking.guideDetails.languages.join(', ')}</p>
                      <p className="text-gray-600">Specialties: {booking.guideDetails.specialties.join(', ')}</p>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <p className="font-medium">Contact Information:</p>
                      <div className="flex items-center mt-1">
                        <Phone className="text-gray-400 mr-1" size={14} />
                        <p className="text-gray-600 text-sm">{booking.guideDetails.contact}</p>
                      </div>
                      <div className="flex items-center mt-1">
                        <Mail className="text-gray-400 mr-1" size={14} />
                        <p className="text-gray-600 text-sm">{booking.guideDetails.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">Package Includes</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    {booking.packageIncludes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-green-600 mr-2 mt-1" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex flex-wrap gap-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center">
                    <Download className="mr-2" size={18} />
                    Download Itinerary
                  </button>
                  <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md flex items-center">
                    <Printer className="mr-2" size={18} />
                    Print Details
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center">
                    <Share2 className="mr-2" size={18} />
                    Share Itinerary
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Next Steps */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">Next Steps</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full mr-3 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium">Check your email</p>
                  <p className="text-gray-600">We've sent a detailed confirmation to your email address.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full mr-3 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium">Review your itinerary</p>
                  <p className="text-gray-600">Familiarize yourself with your travel plans and contact us if you have any questions.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full mr-3 mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium">Prepare for your trip</p>
                  <p className="text-gray-600">Check travel requirements for your destination and pack accordingly.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Customer Support */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Need Assistance?</h2>
            <p className="mb-4">Our customer support team is available 24/7 to help with any questions or concerns.</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <Phone className="text-blue-600 mr-2" size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-2" size={18} />
                <span>support@travelease.com</span>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Link to="/my-bookings" className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-md">
              View All Bookings
            </Link>
            <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageOverview;