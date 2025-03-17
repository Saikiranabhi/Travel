import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, User, Check, ChevronRight, Globe, DollarSign } from 'lucide-react';

const CarGuideSelection = () => {
  const navigate = useNavigate();
  
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [includeGuide, setIncludeGuide] = useState(true);

  // Mock data for cars
  const cars = [
    {
      id: 1,
      model: 'Toyota Camry',
      type: 'Sedan',
      capacity: 4,
      licensePlate: 'ABC-1234',
      pricePerDay: 50,
      features: ['Air Conditioning', 'Bluetooth', 'Cruise Control'],
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      model: 'Honda CR-V',
      type: 'SUV',
      capacity: 5,
      licensePlate: 'XYZ-5678',
      pricePerDay: 65,
      features: ['Air Conditioning', 'Bluetooth', 'Backup Camera', 'Navigation'],
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      model: 'Mercedes-Benz E-Class',
      type: 'Luxury Sedan',
      capacity: 4,
      licensePlate: 'LUX-9012',
      pricePerDay: 120,
      features: ['Leather Seats', 'Premium Sound System', 'Panoramic Roof', 'Advanced Safety Features'],
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      model: 'Toyota Sienna',
      type: 'Minivan',
      capacity: 7,
      licensePlate: 'VAN-3456',
      pricePerDay: 85,
      features: ['Air Conditioning', 'Bluetooth', 'Backup Camera', 'Third Row Seating'],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Mock data for guides
  const guides = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      languages: ['English', 'Spanish', 'French'],
      experience: 5,
      specialties: ['Cultural Tours', 'Historical Sites'],
      pricePerDay: 80,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'James Chen',
      languages: ['English', 'Mandarin', 'Japanese'],
      experience: 7,
      specialties: ['Food Tours', 'Urban Exploration'],
      pricePerDay: 90,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      name: 'Sophie Dubois',
      languages: ['English', 'French', 'Italian'],
      experience: 4,
      specialties: ['Art Galleries', 'Museums'],
      pricePerDay: 75,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 4,
      name: 'Ahmed Hassan',
      languages: ['English', 'Arabic', 'German'],
      experience: 6,
      specialties: ['Adventure Tours', 'Nature Excursions'],
      pricePerDay: 85,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  ];

  const handleContinue = () => {
    // In a real application, you would save the selections to state or context
    const selectionData = {
      car: selectedCar,
      guide: includeGuide ? selectedGuide : null,
      includeGuide
    };
    console.log('Selection data:', selectionData);
    
    // Navigate to the next step
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Select Your Car & Guide</h1>
          
          {/* Step indicator */}
          <div className="mb-8">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full">
                <Check size={16} />
              </div>
              <div className="h-1 flex-1 bg-green-600 mx-2"></div>
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full">
                2
              </div>
              <div className="h-1 flex-1 bg-gray-300 mx-2"></div>
              <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-600 rounded-full">
                3
              </div>
              <div className="h-1 flex-1 bg-gray-300 mx-2"></div>
              <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-600 rounded-full">
                4
              </div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <div className="text-green-600 font-medium">Trip Details</div>
              <div className="text-blue-600 font-medium">Car & Guide</div>
              <div className="text-gray-500">Payment</div>
              <div className="text-gray-500">Confirmation</div>
            </div>
          </div>
          
          {/* Car Selection */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center mb-6">
              <Car className="text-blue-600 mr-3" size={24} />
              <h2 className="text-xl font-semibold">Select a Car</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cars.map(car => (
                <div 
                  key={car.id} 
                  className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                    selectedCar && selectedCar.id === car.id 
                      ? 'border-blue-500 ring-2 ring-blue-200' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => setSelectedCar(car)}
                >
                  <div className="relative">
                    <img 
                      src={car.image} 
                      alt={car.model} 
                      className="w-full h-48 object-cover"
                    />
                    {selectedCar && selectedCar.id === car.id && (
                      <div className="absolute top-2 right-2 bg-blue-600 text-white p-1 rounded-full">
                        <Check size={16} />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{car.model}</h3>
                      <div className="flex items-center text-blue-600 font-bold">
                        <DollarSign size={16} />
                        {car.pricePerDay}/day
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{car.type} • Seats {car.capacity} </p>
                    <p className="text-gray-600 text-sm mb-2">License Plate: {car.licensePlate}</p>
                    <div className="mt-3">
                      <p className="text-sm font-medium mb-1">Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {car.features.map((feature, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Guide Selection */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <User className="text-blue-600 mr-3" size={24} />
                <h2 className="text-xl font-semibold">Select a Guide</h2>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="includeGuide"
                  checked={includeGuide}
                  onChange={() => setIncludeGuide(!includeGuide)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="includeGuide" className="ml-2 text-sm text-gray-700">
                  Include a guide for my trip
                </label>
              </div>
            </div>
            
            {includeGuide ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guides.map(guide => (
                  <div 
                    key={guide.id} 
                    className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                      selectedGuide && selectedGuide.id === guide.id 
                        ? 'border-blue-500 ring-2 ring-blue-200' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setSelectedGuide(guide)}
                  >
                    <div className="p-4 flex">
                      <div className="mr-4">
                        <img 
                          src={guide.image} 
                          alt={guide.name} 
                          className="w-20 h-20 object-cover rounded-full"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{guide.name}</h3>
                          {selectedGuide && selectedGuide.id === guide.id && (
                            <div className="bg-blue-600 text-white p-1 rounded-full">
                              <Check size={16} />
                            </div>
                          )}
                        </div>
                        <div className="flex items-center mb-2">
                          <Globe className="text-gray-400 mr-1" size={14} />
                          <p className="text-gray-600 text-sm">
                            {guide.languages.join(', ')}
                          </p>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{guide.experience} years experience</p>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center">
                            <span className="text-yellow-400">★</span>
                            <span className="text-gray-700 text-sm ml-1">{guide.rating}/5</span>
                          </div>
                          <div className="flex items-center text-blue-600 font-bold">
                            <DollarSign size={16} />
                            {guide.pricePerDay}/day
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pb-4">
                      <p className="text-sm font-medium mb-1">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {guide.specialties.map((specialty, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <p className="text-gray-600">You've chosen to travel without a guide. You can change this option above.</p>
              </div>
            )}
          </div>
          
          {/* Continue Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleContinue}
              disabled={!selectedCar || (includeGuide && !selectedGuide)}
              className={`flex items-center py-3 px-8 rounded-md font-bold ${
                selectedCar && (!includeGuide || selectedGuide)
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue to Payment
              <ChevronRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarGuideSelection;