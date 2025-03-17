import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Search, Info, ChevronRight, ChevronDown } from 'lucide-react';

const TripPlanning = () => {
  const navigate = useNavigate();
  
  const [tripDetails, setTripDetails] = useState({
    source: '',
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 1
  });

  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedTouristSpots, setSelectedTouristSpots] = useState([]);

  // Mock data for destinations
  const destinations = [
    {
      id: 1,
      name: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'The city of love and lights with iconic landmarks.',
      touristSpots: [
        {
          id: 101,
          name: 'Eiffel Tower',
          image: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          description: 'Iconic iron tower built in 1889 that defines the Paris skyline.',
          history: 'The Eiffel Tower was built by Gustave Eiffel for the 1889 World Fair. Initially criticized by some of France\'s leading artists and intellectuals, it is now one of the world\'s most recognizable landmarks.'
        },
        {
          id: 102,
          name: 'Louvre Museum',
          image: 'https://images.unsplash.com/photo-1565099824688-e8c8a9b099af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          description: 'World\'s largest art museum and historic monument in Paris.',
          history: 'The Louvre Palace was originally built as a fortress in the late 12th century. It was converted into a royal residence in the 16th century and became a public museum during the French Revolution.'
        },
        {
          id: 103,
          name: 'Notre-Dame Cathedral',
          image: 'https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          description: 'Medieval Catholic cathedral on the Île de la Cité.',
          history: 'Construction of Notre-Dame began in 1163 and was largely completed by 1260. It is considered one of the finest examples of French Gothic architecture and suffered a devastating fire in 2019, with restoration efforts ongoing.'
        },
        {
          id: 104,
          name: 'Arc de Triomphe',
          image: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          description: 'Iconic triumphal arch honoring those who fought for France.',
          history: 'The Arc de Triomphe was commissioned by Napoleon in 1806 to commemorate his military victories, but was not completed until 1836, long after his death.'
        }
      ]
    },
    {
      id: 2,
      name: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'A blend of traditional culture and modern technology.',
      touristSpots: [
        {
          id: 201,
          name: 'Tokyo Tower',
          image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          description: 'Communications and observation tower in the Shiba-koen district.',
          history: 'Completed in 1958, Tokyo Tower was inspired by the Eiffel Tower and serves as a symbol of Japan\'s post-war rebirth as a major economic power.'
        },
        {
          id: 202,
          name: 'Senso-ji Temple',
          image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          description: 'Ancient Buddhist temple located in Asakusa.',
          history: 'Senso-ji is Tokyo\'s oldest temple, founded in 628 CE. According to legend, two fishermen found a statue of Kannon, the goddess of mercy, in the Sumida River, and the temple was built to honor it.'
        },
        {
          id: 203,
          name: 'Shibuya Crossing',
          image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          description: 'Famous scramble crossing outside Shibuya Station.',
          history: 'Shibuya Crossing developed as Tokyo urbanized in the 20th century. It became one of the busiest pedestrian crossings in the world, with as many as 3,000 people crossing at once during peak times.'
        },
        {
          id: 204,
          name: 'Meiji Shrine',
          image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          description: 'Shinto shrine dedicated to Emperor Meiji and Empress Shoken.',
          history: 'The shrine was completed in 1920 and dedicated to Emperor Meiji and Empress Shoken. The original structure was destroyed during World War II and rebuilt in 1958.'
        }
      ]
    },
    {
      id: 3,
      name: 'Rome, Italy',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'The Eternal City with ancient ruins and Renaissance art.',
      touristSpots: [
        {
          id: 301,
          name: 'Colosseum',
          image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          description: 'Iconic ancient Roman amphitheater in the center of Rome.',
          history: 'Built between 70-80 CE, the Colosseum could hold up to 80,000 spectators who gathered to watch gladiatorial contests, public spectacles, and dramas based on Classical mythology.'
        },
        {
          id: 302,
          name: 'Vatican City',
          image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          description: 'Independent city-state enclaved within Rome, home to the Pope.',
          history: 'Vatican City became an independent state in 1929 with the Lateran Treaty. It is the smallest state in the world by both area and population, and houses St. Peter\'s Basilica and the Vatican Museums.'
        },
        {
          id: 303,
          name: 'Trevi Fountain',
          image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          description: 'Baroque fountain known for the tradition of throwing coins.',
          history: 'Completed in 1762, the Trevi Fountain was designed by Nicola Salvi and is one of the most famous fountains in the world. The tradition of throwing coins into the fountain comes from the 1954 film "Three Coins in the Fountain."'
        },
        {
          id: 304,
          name: 'Roman Forum',
          image: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          description: 'Rectangular forum surrounded by ruins of ancient government buildings.',
          history: 'The Roman Forum was the center of daily life in ancient Rome, serving as a venue for public speeches, criminal trials, and commercial affairs. It was developed over centuries, with monuments built from around 500 BCE to 400 CE.'
        }
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);
    setSelectedTouristSpots([]);
  };

  const handleTouristSpotToggle = (spot) => {
    if (selectedTouristSpots.some(s => s.id === spot.id)) {
      setSelectedTouristSpots(selectedTouristSpots.filter(s => s.id !== spot.id));
    } else {
      setSelectedTouristSpots([...selectedTouristSpots, spot]);
    }
  };

  const handleContinue = () => {
    // In a real application, you would save the trip details to state or context
    const tripData = {
      ...tripDetails,
      destination: selectedDestination,
      touristSpots: selectedTouristSpots
    };
    console.log('Trip data:', tripData);
    
    // Navigate to the next step
    navigate('/car-guide-selection');
  };

  const [expandedSpotId, setExpandedSpotId] = useState(null);

  const toggleSpotDetails = (spotId) => {
    if (expandedSpotId === spotId) {
      setExpandedSpotId(null);
    } else {
      setExpandedSpotId(spotId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Plan Your Trip</h1>
          
          {/* Step indicator */}
          <div className="mb-8">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full">
                1
              </div>
              <div className="h-1 flex-1 bg-blue-600 mx-2"></div>
              <div className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-600 rounded-full">
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
              <div className="text-blue-600 font-medium">Trip Details</div>
              <div className="text-gray-500">Car & Guide</div>
              <div className="text-gray-500">Payment</div>
              <div className="text-gray-500">Confirmation</div>
            </div>
          </div>
          
          {/* Trip Details Form */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Trip Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="source" className="block text-gray-700 font-medium mb-2">
                  Departure City
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="text"
                    id="source"
                    name="source"
                    value={tripDetails.source}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Where are you traveling from?"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="destination" className="block text-gray-700 font-medium mb-2">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={tripDetails.destination}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Where do you want to go?"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="startDate" className="block text-gray-700 font-medium mb-2">
                  Start Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={tripDetails.startDate}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="endDate" className="block text-gray-700 font-medium mb-2">
                  End Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={tripDetails.endDate}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="travelers" className="block text-gray-700 font-medium mb-2">
                  Number of Travelers
                </label>
                <input
                  type="number"
                  id="travelers"
                  name="travelers"
                  value={tripDetails.travelers}
                  onChange={handleInputChange}
                  min="1"
                  max="10"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition-colors flex items-center"
              onClick={() => document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' })}
            >
              <Search className="mr-2" size={18} />
              Find Destinations
            </button>
          </div>
          
          {/* Destinations */}
          <div id="destinations" className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">Popular Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {destinations.map(destination => (
                <div 
                  key={destination.id} 
                  className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                    selectedDestination && selectedDestination.id === destination.id 
                      ? 'border-blue-500 ring-2 ring-blue-200' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => handleDestinationSelect(destination)}
                >
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{destination.name}</h3>
                    <p className="text-gray-600 text-sm">{destination.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tourist Spots */}
          {selectedDestination && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-6">
                Tourist Spots in {selectedDestination.name}
              </h2>
              <p className="text-gray-600 mb-6">
                Select the tourist spots you'd like to visit during your trip.
              </p>
              
              <div className="space-y-4">
                {selectedDestination.touristSpots.map(spot => (
                  <div key={spot.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img 
                          src={spot.image} 
                          alt={spot.name} 
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="p-4 md:w-2/3">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{spot.name}</h3>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id={`spot-${spot.id}`}
                              checked={selectedTouristSpots.some(s => s.id === spot.id)}
                              onChange={() => handleTouristSpotToggle(spot)}
                              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{spot.description}</p>
                        
                        <button
                          type="button"
                          onClick={() => toggleSpotDetails(spot.id)}
                          className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          {expandedSpotId === spot.id ? (
                            <>
                              <ChevronDown size={16} className="mr-1" />
                              Hide Details
                            </>
                          ) : (
                            <>
                              <ChevronRight size={16} className="mr-1" />
                              Show Details
                            </>
                          )}
                        </button>
                        
                        {expandedSpotId === spot.id && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <h4 className="font-medium mb-2 flex items-center">
                              <Info size={16} className="mr-2 text-blue-600" />
                              History
                            </h4>
                            <p className="text-gray-600 text-sm">{spot.history}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Continue Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleContinue}
              disabled={!selectedDestination || selectedTouristSpots.length === 0}
              className={`flex items-center py-3 px-8 rounded-md font-bold ${
                selectedDestination && selectedTouristSpots.length > 0
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue to Car & Guide Selection
              <ChevronRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanning;