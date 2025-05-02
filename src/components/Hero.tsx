import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 text-center px-4 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 tracking-wide">
          <span className="block">Experience Luxury</span> 
          <span className="block mt-1">Beyond Compare</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          A DEMO PAGE DEVELOPED BY PANORA FOR AVARI BOUTIQUE GUJRANWALA
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a 
            href="#booking" 
            className="px-8 py-3 bg-[#1E3A8A] text-white font-medium rounded hover:bg-[#1E40AF] transition-colors shadow-lg"
          >
            Book Now
          </a>
          <a 
            href="#rooms" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded hover:bg-white/10 transition-colors"
          >
            View Rooms
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#rooms" className="flex flex-col items-center">
          <span className="text-sm mb-2">Explore More</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;