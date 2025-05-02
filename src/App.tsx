import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RoomTypes from './components/RoomTypes';
import BookingForm from './components/BookingForm';
import Amenities from './components/Amenities';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <RoomTypes />
      <BookingForm />
      
      <Amenities />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;