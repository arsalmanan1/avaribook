import React from 'react';
import { Wifi, Coffee, Tv, Bath } from 'lucide-react';

interface RoomType {
  name: string;
  description: string;
  price: string;
  vrTour: string;
  amenities: string[];
  size: string;
  occupancy: string;
}

const rooms: RoomType[] = [
  {
    name: "Executive twin",
    description: "Spacious suite with city views, featuring a king-size bed and luxuries.",
    price: "$299",
    vrTour: "https://kuula.co/share/collection/7bMtz?logo=1&info=1&logosize=168&fs=0&vr=1&zoom=1&gyro=0&autorotate=0.04&thumbs=-1",
    amenities: ["Free Wi-Fi", "Mini Bar", "Smart TV", "Rainfall Shower"],
    size: "45m²",
    occupancy: "2 Adults, 1 Child"
  },
  {
    name: "Deluxe King",
    description: "Modern room with work space, perfect for business travelers.",
    price: "$199",
    vrTour: "https://kuula.co/share/collection/7bTPb?logo=1&info=1&logosize=168&fs=0&vr=1&zoom=1&gyro=0&autorotate=0.04&thumbs=-1",
    amenities: ["Work Desk", "Free Wi-Fi", "Coffee Machine", "LED TV"],
    size: "35m²",
    occupancy: "2 Adults"
  },
  {
    name: "Executive Room",
    description: "Luxury suite with separate living area and panoramic views.",
    price: "$399",
    vrTour: "https://kuula.co/share/collection/7bTPh?logo=1&info=1&logosize=168&fs=0&vr=1&zoom=1&gyro=0&autorotate=0.04&thumbs=-1",
    amenities: ["Balcony", "Mini Kitchen", "Premium TV", "Jacuzzi Bath"],
    size: "60m²",
    occupancy: "3 Adults"
  }
];

const RoomTypes: React.FC = () => {
  return (
    <section id="rooms" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E3A8A] mb-4">
            Our Rooms
          </h2>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of thoughtfully designed rooms and suites, each offering unique amenities for a comfortable stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{rooms.map((room, index) => (
  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden h-[600px] flex flex-col">
    
    {/* VR Tour (2/3 height) */}
    <div className="relative h-2/3">
      <iframe
        src={room.vrTour}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        allowFullScreen
        scrolling="no"
        className="w-full h-full"
      ></iframe>
      <div className="absolute top-4 right-4 bg-[#1E3A8A] text-white px-4 py-2 rounded">
        {room.price}/night
      </div>
    </div>

    {/* Text Section (1/3 height) */}
    <div className="h-1/3 p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-serif font-bold text-gray-800 mb-1">
          {room.name}
        </h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{room.description}</p>
        <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
          <span>{room.size}</span>
          <span>•</span>
          <span>{room.occupancy}</span>
        </div>
        <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
          {room.amenities.map((amenity, i) => (
            <div key={i} className="flex items-center">
              {amenity.includes('Wi-Fi') && <Wifi size={14} className="mr-1" />}
              {amenity.includes('Coffee') && <Coffee size={14} className="mr-1" />}
              {amenity.includes('TV') && <Tv size={14} className="mr-1" />}
              {amenity.includes('Bath') && <Bath size={14} className="mr-1" />}
              {amenity}
            </div>
          ))}
        </div>
      </div>

      <a
        href="#booking"
        className="mt-2 text-center py-1.5 bg-[#1E3A8A] text-white rounded hover:bg-[#1E40AF] transition-colors text-sm"
      >
        Book Now
      </a>
    </div>
  </div>
))}


        </div>

        {/* Full Hotel Virtual Tour Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1E3A8A] mb-4">
              Avari Hotel Full Tour
            </h3>
            <div className="w-20 h-1 bg-[#3B82F6] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a complete virtual tour of our hotel and discover all the amenities and spaces we have to offer.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <div className="relative w-full" style={{ height: '500px' }}>
              <iframe 
                className="ku-embed w-full h-full rounded-lg" 
                frameBorder="0" 
                allow="xr-spatial-tracking; gyroscope; accelerometer" 
                allowFullScreen 
                scrolling="no" 
                src="https://kuula.co/share/collection/7bHQv?logo=1&info=1&fs=0&vr=0&zoom=1&gyro=0&autorotate=0.04&thumbs=4"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomTypes;
