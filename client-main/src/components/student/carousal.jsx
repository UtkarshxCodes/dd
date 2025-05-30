import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { assets } from '../../assets/assets'; // Assuming assets are imported here

const slides = [
  {
    heading: '🌟 Immersive Online Learning',
    subheading:
      'Step into dynamic, interactive classrooms guided by expert instructors. Learn career-ready skills through real-world scenarios and collaborative tools. Engage in hands-on projects that simulate real-world challenges, fostering innovation and teamwork.',
    image: assets.carousal1,
  },
  {
    heading: '🏆 Industry-Recognized Certifications',
    subheading:
      'V-EDU certifications are trusted by top employers across tech, consulting, and startups. Designed in collaboration with hiring partners, they reflect your practical expertise and readiness for the job market. Stand out with credentials that matter.',
    image: assets.carousal2,
  },
  {
    heading: '🚀 Real Projects, Real Results',
    subheading:
      'Work on portfolio-ready projects evaluated by employers. Gain experience in tools and platforms used by Google, Amazon, Microsoft, and more. Build a portfolio that showcases your skills and demonstrates your ability to tackle complex challenges.',
    image: assets.carousal3,
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-screen overflow-hidden rounded-none shadow-lg bg-gradient-to-r from-gray-50 to-gray-100">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-none w-full flex flex-col md:flex-row h-[400px] md:h-[450px] bg-white"
          >
            {/* Left Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 rounded-none md:rounded-r-[100px] overflow-hidden">
              <img
                src={slide.image}
                alt={slide.heading}
                className="w-full h-auto md:w-4/5 md:h-4/5 object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Right Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-16">
              <h2 className="text-lg md:text-4xl font-extrabold mb-2 md:mb-4 text-gray-800 text-center md:text-left">
                {slide.heading}
              </h2>
              <p className="text-xs md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed text-justify">
                {slide.subheading}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Transparent Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 md:p-3 rounded-full shadow-lg hover:bg-opacity-70 hover:scale-110 transition-transform duration-300"
      >
        <ChevronLeft size={20} md:size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 md:p-3 rounded-full shadow-lg hover:bg-opacity-70 hover:scale-110 transition-transform duration-300"
      >
        <ChevronRight size={20} md:size={24} />
      </button>
    </div>
  );
}