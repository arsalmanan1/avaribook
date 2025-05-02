import React from 'react';
import { Clock, MapPin, ChefHat } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#7D2E46] mb-4">
            Our Story
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-800">
              A Culinary Journey Since 1995
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded by renowned chef Isabella Laurent, Savoria began as a humble bistro with a passionate 
              vision - to create an unforgettable dining experience that celebrates the essence of 
              Mediterranean cuisine while embracing modern culinary innovations.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              For over two decades, we have been committed to sourcing the finest, freshest ingredients 
              from local farmers and artisans. Each dish tells a story of tradition, craftsmanship, and our 
              deep appreciation for authentic flavors.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Clock className="text-[#7D2E46] mb-2" size={24} />
                <h4 className="font-medium text-gray-800 mb-1">Hours</h4>
                <p className="text-sm text-gray-600 text-center">
                  Tue-Sun: 5pm-11pm<br />
                  Closed Mondays
                </p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <MapPin className="text-[#7D2E46] mb-2" size={24} />
                <h4 className="font-medium text-gray-800 mb-1">Location</h4>
                <p className="text-sm text-gray-600 text-center">
                  123 Gourmet Avenue<br />
                  New York, NY 10001
                </p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <ChefHat className="text-[#7D2E46] mb-2" size={24} />
                <h4 className="font-medium text-gray-800 mb-1">Cuisine</h4>
                <p className="text-sm text-gray-600 text-center">
                  Mediterranean<br />
                  Contemporary
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <img 
              src="https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Restaurant interior" 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#D4AF37] p-4 rounded shadow-lg hidden md:block">
              <p className="text-white font-serif italic">
                "Culinary excellence<br />in every bite"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;