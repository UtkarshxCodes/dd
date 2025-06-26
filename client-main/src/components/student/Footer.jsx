import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Footer = () => {
  const navigate = useNavigate();

  const navigateAndScrollToTop = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Ensure navigation completes before scrolling
  };

  return (
    <>
      <footer id="footer" className="bg-gray-900 w-full mt-10">
        {/* Content Wrapper */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 py-10 border-b border-white/30">

            {/* Logo and Description */}
            <div className="flex flex-col md:items-start items-center w-full">
              <img src={assets.logo_dark} alt="logo" className="w-32 md:w-40" />
              <p className="mt-6 text-center md:text-left text-sm text-white/80">
                Empowering learners worldwide with top-notch educational resources and tools to achieve their goals.
              </p>
            </div>

            {/* Company Links */}
            <div className="flex flex-col md:items-start items-center w-full">
              <h2 className="font-medium text-white mb-5">Company</h2>
              <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
                <li>
                  <button
                    className="text-white/80 hover:text-white transition"
                    onClick={() => navigateAndScrollToTop('/')}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className="text-white/80 hover:text-white transition"
                    onClick={() => navigateAndScrollToTop('/course-list')}
                  >
                    Courses
                  </button>
                </li>
                <li>
                  <button
                    className="text-white/80 hover:text-white transition"
                    onClick={() => navigateAndScrollToTop('/jobs')}
                  >
                    Live Jobs
                  </button>
                </li>
                <li>
                  <button
                    className="text-white/80 hover:text-white transition"
                    onClick={() => navigateAndScrollToTop('/about')}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    className="text-white/80 hover:text-white transition"
                    onClick={() => navigateAndScrollToTop('/contact')}
                  >
                    Contact Page
                  </button>
                </li>
                <li>
                  <button
                    className="text-white/80 hover:text-white transition"
                    onClick={() => navigateAndScrollToTop('/privacy-policy')}
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    className="text-white/80 hover:text-white transition"
                    onClick={() => navigateAndScrollToTop('/return-policy')}
                  >
                    Return Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col md:items-start items-center w-full">
              <h2 className="font-medium text-white mb-5">Contact</h2>
              <p className="text-sm text-white/80">
                <a href="tel:+18883444990" className="hover:text-white transition">
                  Phone: +1 888-344-4990
                </a>
              </p>
              <p className="text-sm text-white/80">
                <a href="mailto:support@v-edu.us" className="hover:text-white transition">
                  Email: support@v-edu.us
                </a>
              </p>
            </div>

          </div>
          <p className="py-4 text-center text-xs md:text-sm text-white/60">
            Copyright 2025 © V-EDU All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
