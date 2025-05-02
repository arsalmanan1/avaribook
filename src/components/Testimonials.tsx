import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  date: string;
  rating: number;
  comment: string;
  image: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Thompson",
    date: "March 15, 2024",
    rating: 5,
    comment: "An absolutely stunning hotel with impeccable service. The attention to detail and luxury amenities made our anniversary celebration truly special.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "New York, USA"
  },
  {
    name: "James Wilson",
    date: "March 10, 2024",
    rating: 5,
    comment: "The perfect blend of luxury and comfort. The staff went above and beyond to ensure our stay was memorable. The spa facilities are world-class!",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "London, UK"
  },
  {
    name: "Emma Chen",
    date: "March 5, 2024",
    rating: 5,
    comment: "Exceptional experience from check-in to check-out. The room views were breathtaking, and the restaurant offered an amazing culinary journey.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Singapore"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E3A8A] mb-4">
            Guest Experiences
          </h2>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what our guests have to say about their luxurious stays at LuxStay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={18}
                    className={i < testimonial.rating ? "text-[#3B82F6] fill-[#3B82F6]" : "text-gray-300"}
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-3">"{testimonial.comment}"</p>
              
              <p className="text-sm text-gray-500">{testimonial.date}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#"
            className="inline-flex items-center text-[#1E3A8A] font-medium hover:text-[#1E40AF] transition-colors"
          >
            Read more reviews
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;