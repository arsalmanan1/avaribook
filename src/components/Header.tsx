import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className={`text-2xl font-serif font-bold ${isScrolled ? 'text-[#1E3A8A]' : 'text-white'}`}>
            AVARI BOUTIQUE HOTEL
          </h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          
            <a 
              
              href="https://www.panoraproperties.com/"
              className={`font-medium hover:text-[#3B82F6] transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              GO TO PANORA HOME PAGE
            </a>
         
        </nav>

        <div className={`hidden md:flex items-center gap-2 ${
          isScrolled ? 'text-[#1E3A8A]' : 'text-white'
        }`}>
          <Phone size={18} />
          <span className="font-medium">0339-1-PANORA</span>
        </div>

        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fadeIn">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              
                <a 
                  href="https://www.panoraproperties.com/"
                 
                  className="text-gray-800 font-medium py-2 hover:text-[#3B82F6] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  GO TO PANORA HOME PAGE
                </a>
              
              <div className="flex items-center gap-2 text-[#1E3A8A] py-2">
                <Phone size={18} />
                <span className="font-medium">0339-1-PANORA</span>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;