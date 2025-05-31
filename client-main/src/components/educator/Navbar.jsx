import React, { useContext, useEffect } from 'react';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar = ({ bgColor, jobsRef }) => {
  const { isEducator } = useContext(AppContext)
  const { user } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    const navbarHeight = document.querySelector('nav').offsetHeight;
    document.querySelectorAll('.page-content').forEach((section) => {
      section.style.marginTop = `${navbarHeight}px`;
    });
  }, []);

  return isEducator && user && (
    <nav className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 ${bgColor}`}>
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 max-w-[1200px] mx-auto border-b border-gray-300 h-20">
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
          <button onClick={() => navigate('/')} className="hover:text-blue-600 transition">
            Home
          </button>
          <button onClick={() => navigate('/course-list')} className="hover:text-blue-600 transition">
            Courses
          </button>
          <button onClick={() => navigate('/jobs')} className="hover:text-blue-600 transition">
            Live Jobs
          </button>
          <button onClick={() => navigate('/about')} className="hover:text-blue-600 transition">
            About Us
          </button>
          <button onClick={() => navigate('/contact')} className="hover:text-blue-600 transition">
            Contact Page
          </button>
        </div>
        <div className="flex items-center gap-5 text-gray-500 relative">
          <p>Hi! {user.fullName}</p>
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;