import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './CallToAction.css'; // Import your CSS file for styling

const CallToAction = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div className="flex flex-col items-center gap-6 pt-10 pb-24 px-8 md:px-0 bg-gradient-to-b from-blue-100 via-blue-50 to-white">
      {/* Main Heading */}
      <h1 className="md:text-5xl text-2xl text-blue-800 font-extrabold text-center">
        🚀 Learning Made Easy, Practical & Powerful
      </h1>

      {/* Subheading */}
      <h2 className="md:text-4xl text-xl text-gray-800 font-semibold text-center">
        Master Tech Skills for a Better Career—Anytime, Anywhere
      </h2>

      {/* Updated Description */}
      <p className="text-gray-500 text-center max-w-2xl md:text-lg text-sm leading-relaxed">
        Join thousands of learners transforming their futures with job-ready courses in Data Science, AI, Web Development, and more. No fluff. Just real-world skills that employers actually want.
        <br /><br />
        👉 <span className="font-bold">Flexible schedules. Expert mentors. Lifetime access.</span>
        <br /><br />
        ✅ <span className="font-bold">Learn by doing — Project-based lessons</span><br />
        ✅ <span className="font-bold">Job-focused training — Built for today’s market</span><br />
        ✅ <span className="font-bold">On your terms — Learn at your own pace, from anywhere</span>
        <br /><br />
        🎯 <span className="font-bold">Ready to future-proof your career?</span><br />
        Tap into top-paying tech careers—even with no prior experience.
      </p>

      {/* Buttons */}
      <div className="flex items-center font-medium gap-6 mt-4">
        <button
          className="cta-button"
          onClick={() => navigate('/course-list')} // Navigate to the courses page
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          }}
        >
          Your tech journey begins here!
        </button>
      </div>
    </div>
  );
};

export default CallToAction;