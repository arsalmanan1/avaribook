import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4"><a href="https://www.panoraproperties.com">PANORA</a></h3>
            <p className="text-gray-400 mb-4">
              Panora is the leading provider of high-quality 3D and 360° virtual tours in Lahore, offering innovative solutions for real estate, hotels, gyms, and commercial spaces across Pakistan
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#3B82F6] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#3B82F6] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#3B82F6] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-[#3B82F6] mt-1" />
                <span className="text-gray-400">
Plot No 5/6 Kalamkaar Road 19km Ferozpur Road.

Lahore, PK
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-[#3B82F6]" />
                <span className="text-gray-400">0339-1-726672</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-[#3B82F6]" />
                <span className="text-gray-400">conatct@panoraproperties.com</span>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.panoraproperties.com/#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="https://www.panoraproperties.com/#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="https://www.panoraproperties.com/#prototypes" className="text-gray-400 hover:text-white transition-colors">
                  Prototypes
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-[#3B82F6]"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#1E3A8A] text-white rounded hover:bg-[#1E40AF] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear}  PANORA VIRTUAL TOURS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;