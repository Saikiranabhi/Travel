import React, { useState } from 'react';
import { Calendar, MapPin, Clock, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const MyBookings = () => {
  // Mock data for bookings
  const [bookings, setBookings] = useState([
    {
      id: 1,
      destination: 'Paris, France',
      startDate: '2025-06-15',
      endDate: '2025-06-22',
      status: 'confirmed',
      totalAmount: 1250,
      touristSpots: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
      carDetails: {
        model: 'Renault Clio',
        licensePlate: 'FR-7523-AB'
      },
      guideDetails: {
        name: 'Jean Dupont',
        language: 'English, French',
        contact: '+33 6 12 34 56 78'
      }
    },
    {
      id: 2,
      destination: 'Tokyo, Japan',
      startDate: '2025-08-10',
      endDate: '2025-08-18',
      status: 'pending',
      totalAmount: 1800,
      touristSpots: ['Tokyo Tower', 'Senso-ji Temple', 'Shibuya Crossing'],
      carDetails: {
        model: 'Toyota Prius',
        licensePlate: 'JP-1234-T'
      },
      guideDetails: {
        name: 'Yuki Tanaka',
        language: 'English, Japanese',
        contact: '+81 90 1234 5678'
      }
    },
    {
      id: 3,
      destination: 'Rome, Italy',
      startDate: '2025-04-05',
      endDate: '2025-04-12',
      status: 'completed',
      totalAmount: 1350,
      touristSpots: ['Colosseum', 'Vatican City', 'Trevi Fountain'],
      carDetails: {
        model: 'Fiat 500',
        licensePlate: 'IT-RM-5678'
      },
      guideDetails: {
        name: 'Marco Rossi',
        language: 'English, Italian',
        contact: '+39 333 123 4567'
      }
    }
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="text-green-500" />;
      case 'pending':
        return <Clock className="text-yellow-500" />;
      case 'completed':
        return <CheckCircle className="text-blue-500" />;
      case 'cancelled':
        return <XCircle className="text-red-500" />;
      default:
        return <AlertCircle className="text-gray-500" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmed';
      case 'pending':
        return 'Pending';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      default:
        return 'Unknown';
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const [expandedBooking, setExpandedBooking] = useState(null);

  const toggleBookingDetails = (bookingId) => {
    if (expandedBooking === bookingId) {
      setExpandedBooking(null);
    } else {
      setExpandedBooking(bookingId);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
      
      {bookings.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600 text-lg mb-4">You don't have any bookings yet.</p>
          <a href="/trip-planning" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition-colors">
            Plan Your First Trip
          </a>
        </div>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between"
                onClick={() => toggleBookingDetails(booking.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <MapPin className="text-blue-600 mr-2" size={20} />
                    <h3 className="text-xl font-semibold">{booking.destination}</h3>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="mr-2" size={16} />
                    <span>{formatDate(booking.startDate)} - {formatDate(booking.endDate)}</span>
                  </div>
                </div>
                
                <div className="flex items-center mt-4 md:mt-0">
                  <div className="flex items-center mr-6">
                    {getStatusIcon(booking.status)}
                    <span className="ml-2 font-medium">{getStatusText(booking.status)}</span>
                  </div>
                  <div className="font-bold text-lg">${booking.totalAmount}</div>
                </div>
              </div>
              
              {expandedBooking === booking.id && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Trip Details</h4>
                      <p className="mb-2"><span className="font-medium">Booking ID:</span> #{booking.id}</p>
                      <p className="mb-2"><span className="font-medium">Duration:</span> {new Date(booking.endDate).getDate() - new Date(booking.startDate).getDate()} days</p>
                      <p className="mb-4"><span className="font-medium">Total Amount:</span> ${booking.totalAmount}</p>
                      
                      <h4 className="font-semibold text-lg mb-3">Tourist Spots</h4>
                      <ul className="list-disc list-inside mb-4">
                        {booking.touristSpots.map((spot, index) => (
                          <li key={index} className="mb-1">{spot}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Car Details</h4>
                      <p className="mb-2"><span className="font-medium">Model:</span> {booking.carDetails.model}</p>
                      <p className="mb-4"><span className="font-medium">License Plate:</span> {booking.carDetails.licensePlate}</p>
                      
                      <h4 className="font-semibold text-lg mb-3">Guide Details</h4>
                      <p className="mb-2"><span className="font-medium">Name:</span> {booking.guideDetails.name}</p>
                      <p className="mb-2"><span className="font-medium">Languages:</span> {booking.guideDetails.language}</p>
                      <p className="mb-2"><span className="font-medium">Contact:</span> {booking.guideDetails.contact}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    {booking.status === 'pending' && (
                      <>
                        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
                          Confirm Payment
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md">
                          Cancel Booking
                        </button>
                      </>
                    )}
                    {booking.status === 'confirmed' && (
                      <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md">
                        Cancel Booking
                      </button>
                    )}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                      Download Itinerary
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;