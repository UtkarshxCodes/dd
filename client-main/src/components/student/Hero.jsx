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

      {/* Heading */}
      <h1 className="md:text-6xl text-3xl relative font-bold text-white max-w-4xl mx-auto z-10">
        Launch Your Tech Career with Confidence
      </h1>

      {/* Subheading */}
      <p className="md:text-xl text-lg text-white max-w-2xl mx-auto font-medium mt-4 z-10">
        Master in-demand skills in Data Science, Machine Learning, React, and more — with real support from learning to landing the job.
      </p>

      {/* Call Us Button */}
      <div className="absolute bottom-20 z-20"> {/* Adjusted bottom from 10 to 20 */}
        <a href="tel:+18883444990">
          <button className="call-us-btn px-8 py-3 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700 transition">
            Call Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
