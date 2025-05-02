import React from 'react';
import { Wifi, Coffee, Dumbbell, Car, School as Pool, Utensils, Wine, Clock } from 'lucide-react';

const amenities = [
  {
    icon: <Pool className="w-8 h-8 text-[#1E3A8A]" />,
    name: "Swimming Pool",
    description: "Indoor heated pool and jacuzzi"
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-[#1E3A8A]" />,
    name: "Fitness Center",
    description: "24/7 access to modern equipment"
  },
  {
    icon: <Utensils className="w-8 h-8 text-[#1E3A8A]" />,
    name: "Restaurant",
    description: "Fine dining experience"
  },
  {
    icon: <Wifi className="w-8 h-8 text-[#1E3A8A]" />,
    name: "Free Wi-Fi",
    description: "High-speed internet access"
  },
  {
    icon: <Car className="w-8 h-8 text-[#1E3A8A]" />,
    name: "Valet Parking",
    description: "Secure parking service"
  },
  {
    icon: <Coffee className="w-8 h-8 text-[#1E3A8A]" />,
    name: "Coffee Bar",
    description: "Complimentary breakfast"
  },
  {
    icon: <Wine className="w-8 h-8 text-[#1E3A8A]" />,
    name: "Bar & Lounge",
    description: "Premium drinks and cocktails"
  },
  {
    icon: <Clock className="w-8 h-8 text-[#1E3A8A]" />,
    name: "24/7 Service",
    description: "Round-the-clock assistance"
  }
];

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E3A8A] mb-4">
            Hotel Amenities
          </h2>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enjoy our wide range of premium amenities designed to make your stay comfortable and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  {amenity.name}
                </h3>
                <p className="text-gray-600">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;