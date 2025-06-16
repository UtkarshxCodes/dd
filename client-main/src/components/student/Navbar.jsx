import React, { useContext, useEffect } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Navbar = ({ jobsRef }) => {
  const location = useLocation();
  const { backendUrl, isEducator, setIsEducator, navigate, getToken } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCoursesClick = () => {
    navigate('/course-list');
  };

  useEffect(() => {
    const handleScroll = () => {
      const menu = document.getElementById('mobile-menu');
      if (menu && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden'); // Hide the mobile menu on scroll
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup event listener
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 border-b border-gray-300 h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            onClick={() => {
              navigate('/');
              scrollToTop();
            }}
            src={assets.logo}
            alt="Logo"
            className="w-24 lg:w-28 cursor-pointer"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-serif text-lg">
          <Link
            to="/"
            className="hover:text-blue-600 transition"
            onClick={scrollToTop}
          >
            Home
          </Link>
          <button
            type="button"
            onClick={handleCoursesClick}
            className="hover:text-blue-600 transition"
          >
            Courses
          </button>
          <button
            type="button"
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                window.dispatchEvent(new CustomEvent('scrollToJobsSection'));
              }, 100);
            }}
            className="hover:text-blue-600 transition"
          >
            Live Jobs
          </button>
          <Link
            to="/about"
            className="hover:text-blue-600 transition"
            onClick={scrollToTop}
          >
            About Us
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact Page
          </Link>
        </div>

        {/* Contact Section and User Section */}
        <div className="hidden md:flex items-center gap-5 text-gray-700">
          <a
            href="tel:+18883444990"
            className="text-blue-900 font-semibold hover:underline flex items-center gap-1"
            style={{ whiteSpace: 'nowrap' }}
          >
            Got doubt? - +1 888-344-4990
          </a>
          {user ? (
            <>
              <Link to="/my-enrollments" className="hover:text-blue-600 transition">
                My Enrollments
              </Link>
              <UserButton />
            </>
          ) : (
            <>
              {/* Create Account Button */}
              <button
                onClick={() => openSignIn()}
                className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold md:bg-blue-600 md:text-white md:hover:bg-blue-700 bg-gray-200 text-black hover:bg-gray-300 transition"
              >
                Create Account
              </button>

              {/* LMS Button */}
              <Link
                to="/lms-login"
                className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold md:bg-blue-600 md:text-white md:hover:bg-blue-700 bg-gray-200 text-black hover:bg-gray-300 transition"
              >
                LMS
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2 text-gray-700">
          <a
            href="tel:+18883444990"
            className="text-blue-900 font-semibold hover:underline text-sm"
            style={{ whiteSpace: 'nowrap' }}
          >
            Got doubt? - +1 888-344-4990
          </a>
          <button
            className="text-gray-700 hover:text-blue-600 transition pr-2"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              menu.classList.toggle('hidden');
            }}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        id="mobile-menu"
        className="hidden absolute top-full right-4 w-64 bg-white bg-opacity-90 shadow-lg border border-gray-300 z-50 max-h-[300px] overflow-y-auto rounded-lg"
      >
        <div className="flex flex-col items-start gap-4 p-4">
          <Link
            to="/"
            className="hover:text-blue-600 transition"
            onClick={() => {
              scrollToTop();
              document.getElementById('mobile-menu').classList.add('hidden'); // Close menu
            }}
          >
            Home
          </Link>
          <button
            type="button"
            onClick={() => {
              handleCoursesClick();
              document.getElementById('mobile-menu').classList.add('hidden'); // Close menu
            }}
            className="hover:text-blue-600 transition"
          >
            Courses
          </button>
          <button
            type="button"
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                window.dispatchEvent(new CustomEvent('scrollToJobsSection'));
              }, 100);
              document.getElementById('mobile-menu').classList.add('hidden'); // Close menu
            }}
            className="hover:text-blue-600 transition"
          >
            Live Jobs
          </button>
          <Link
            to="/about"
            className="hover:text-blue-600 transition"
            onClick={() => {
              scrollToTop();
              document.getElementById('mobile-menu').classList.add('hidden'); // Close menu
            }}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600 transition"
            onClick={() => {
              document.getElementById('mobile-menu').classList.add('hidden'); // Close menu
            }}
          >
            Contact Page
          </Link>
          <Link
            to="/quiz"
            className="hover:text-blue-600 transition"
            onClick={() => {
              document.getElementById('mobile-menu').classList.add('hidden'); // Close menu
            }}
          >
            Take Quiz
          </Link>
          {user ? (
            <>
              <Link
                to="/my-enrollments"
                className="hover:text-blue-600 transition"
                onClick={() => {
                  document.getElementById('mobile-menu').classList.add('hidden'); // Close menu
                }}
              >
                My Enrollments
              </Link>
              <UserButton />
            </>
          ) : (
            <>
              {/* Create Account Button */}
              <button
                onClick={() => {
                  openSignIn();
                  document.getElementById('mobile-menu').classList.add('hidden'); // Close menu
                }}
                className="bg-gray-200 text-black px-5 py-2 rounded-full font-bold hover:bg-gray-300 transition"
              >
                Create Account
              </button>

              {/* LMS Button */}
              <Link
                to="/lms-login"
                className="bg-gray-200 text-black px-5 py-2 rounded-full font-bold hover:bg-gray-300 transition"
                onClick={() => {
                  document.getElementById('mobile-menu').classList.add('hidden'); // Close menu
                }}
              >
                LMS
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;