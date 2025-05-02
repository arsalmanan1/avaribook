import React, { useState } from 'react';
import { Calendar, Users, CreditCard, Mail, Phone } from 'lucide-react';
import { format, addDays } from 'date-fns';

const BookingForm: React.FC = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ checkIn, checkOut, adults, children, roomType, name, email, phone });
    setIsSubmitted(true);
  };

  const today = format(new Date(), 'yyyy-MM-dd');
  const maxDate = format(addDays(new Date(), 365), 'yyyy-MM-dd');

  return (
    <section id="booking" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E3A8A] mb-4">
            Book Your Stay
          </h2>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reserve your perfect room with our easy booking system. Special rates available for extended stays.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">
                    <div className="flex items-center mb-1">
                      <Calendar size={18} className="mr-2 text-[#1E3A8A]" />
                      Check-in Date
                    </div>
                  </label>
                  <input
                    type="date"
                    min={today}
                    max={maxDate}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">
                    <div className="flex items-center mb-1">
                      <Calendar size={18} className="mr-2 text-[#1E3A8A]" />
                      Check-out Date
                    </div>
                  </label>
                  <input
                    type="date"
                    min={checkIn || today}
                    max={maxDate}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">
                    <div className="flex items-center mb-1">
                      <Users size={18} className="mr-2 text-[#1E3A8A]" />
                      Adults
                    </div>
                  </label>
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="px-4 py-3 text-gray-600 hover:text-[#1E3A8A]"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center py-3">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(Math.min(4, adults + 1))}
                      className="px-4 py-3 text-gray-600 hover:text-[#1E3A8A]"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">
                    <div className="flex items-center mb-1">
                      <Users size={18} className="mr-2 text-[#1E3A8A]" />
                      Children
                    </div>
                  </label>
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="px-4 py-3 text-gray-600 hover:text-[#1E3A8A]"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center py-3">{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(Math.min(3, children + 1))}
                      className="px-4 py-3 text-gray-600 hover:text-[#1E3A8A]"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Room Type</label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  >
                    <option value="">Select a room type...</option>
                    <option value="deluxe">Deluxe Suite ($299/night)</option>
                    <option value="executive">Executive Room ($199/night)</option>
                    <option value="premium">Premium Suite ($399/night)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">
                    <div className="flex items-center mb-1">
                      <Mail size={18} className="mr-2 text-[#1E3A8A]" />
                      Email
                    </div>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="john@example.com"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">
                    <div className="flex items-center mb-1">
                      <Phone size={18} className="mr-2 text-[#1E3A8A]" />
                      Phone
                    </div>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="(555) 123-4567"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#1E3A8A] text-white font-medium rounded hover:bg-[#1E40AF] transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <CreditCard size={20} />
                  Complete Booking
                </button>
              </div>

              <p className="mt-4 text-sm text-gray-500 text-center">
                By completing this booking, you agree to our terms and conditions.
              </p>
            </form>
          ) : (
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-2 text-gray-800">
                Booking Confirmed!
              </h3>
              <p className="text-gray-600 mb-4">
                Thank you for choosing LuxStay. Your reservation for {adults + children} guests from {checkIn} to {checkOut} has been confirmed.
              </p>
              <p className="text-gray-600 mb-6">
                A confirmation has been sent to {email}. If you need to make any changes, please contact us at 1-800-LUXSTAY.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 bg-[#1E3A8A] text-white font-medium rounded hover:bg-[#1E40AF] transition-colors shadow-md"
              >
                Make Another Booking
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;