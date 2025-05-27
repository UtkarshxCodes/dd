import React from 'react';
import { assets } from '../../assets/assets';
import './Hero.css'; // Import the CSS file for styling

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-screen h-screen text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${assets.backgroundImage})`, // Use the background image from assets
        maxHeight: '110vh', // Set a maximum height
        maxWidth: '100vw', // Set a maximum width
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      <h1 className="md:text-7xl text-4xl relative font-bold text-white max-w-4xl mx-auto md:mt-[-40px] mt-[-20px]">
       
        <img src={assets.sketch} alt="sketch" className="md:block hidden absolute -bottom-7 right-0" />
      </h1>
      <p className="md:block hidden text-white max-w-2xl mx-auto font-bold md:text-xl">
       
      </p>
      <p className="md:hidden text-white max-w-sm mx-auto font-bold text-lg">
       
      </p>
      <div className="pb-1820 relative z-20">
        <a href="tel:+18883444990">
          <button className="call-us-btn">
            Call Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
