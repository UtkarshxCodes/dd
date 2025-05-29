import React, { useContext } from 'react';
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

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate('/educator');
        return;
      }

      const token = await getToken();
      const { data } = await axios.get(backendUrl + '/api/educator/update-role', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) {
        toast.success(data.message);
        setIsEducator(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleScrollToJobs = () => {
    if (location.pathname === "/") {
      window.dispatchEvent(new CustomEvent('scrollToJobsSection'));
    } else {
      navigate('/');
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('scrollToJobsSection'));
      }, 100);
    }
  };

  const handleCoursesClick = () => {
    navigate('/course-list');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 border-b border-gray-300 h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            onClick={() => navigate('/')}
            src={assets.logo}
            alt="Logo"
            className="w-24 lg:w-28 cursor-pointer"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-serif text-lg">
          <Link to="/" className="hover:text-blue-600 transition">
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
            onClick={handleScrollToJobs}
            className="hover:text-blue-600 transition"
          >
            Live Jobs
          </button>
          <Link to="/about" className="hover:text-blue-600 transition">
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
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold"
            >
              Create Account
            </button>
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
          <Link to="/" className="hover:text-blue-600 transition">
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
            onClick={handleScrollToJobs}
            className="hover:text-blue-600 transition"
          >
            Live Jobs
          </button>
          <Link to="/about" className="hover:text-blue-600 transition">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact Page
          </Link>
          {user ? (
            <>
              <Link to="/my-enrollments" className="hover:text-blue-600 transition">
                My Enrollments
              </Link>
              <UserButton />
            </>
          ) : (
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold"
            >
              Create Account
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;