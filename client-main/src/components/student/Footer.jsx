import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gray-900 w-full mt-10">
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
                    onClick={scrollToTop}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className="text-white/80 hover:text-white transition"
                    onClick={() => navigate('/course-list')}
                  >
                    Courses
                  </button>
                </li>
                <li>
                  <button
                    className="text-white/80 hover:text-white transition"
                    onClick={() => navigate('/jobs')}
                  >
                    Live Jobs
                  </button>
                </li>
                <li>
                  <button
                    className="text-white/80 hover:text-white transition"
                    onClick={() => navigate('/about')}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    className="text-white/80 hover:text-white transition"
                    onClick={() => navigate('/contact')}
                  >
                    Contact Page
                  </button>
                </li>
                <li>
                  <button
                    className="text-white/80 hover:text-white transition"
                    onClick={() => setShowPrivacyPolicy(true)}
                  >
                    Privacy policy
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

            {/* Newsletter Subscription */}
            <div className="hidden md:flex flex-col items-start w-full">
              <h2 className="font-medium text-white mb-5">Subscribe to our newsletter</h2>
              <p className="text-sm text-white/80">
                Stay updated with the latest news, articles, and resources delivered to your inbox weekly.
              </p>
              <div className="flex items-center gap-2 pt-4">
                <input
                  className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-blue-600 w-24 h-9 text-white rounded hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
          <p className="py-4 text-center text-xs md:text-sm text-white/60">
            Copyright 2025 © V-EDU All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4 p-6 overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-sm text-gray-700 mb-4">Effective Date: May 27, 2025</p>
            <p className="text-sm text-gray-700 mb-4">V-EDU.us LLC</p>
            <p className="text-sm text-gray-700 mb-4">
              At V-EDU.us LLC (“V-EDU”, “we”, “our”, or “us”), we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website at https://v-edu.us and interact with our products and services.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              We value the trust you place in us and strive to be transparent about our data practices. By using our site and services, you agree to the terms of this Privacy Policy.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              If you have any questions or concerns regarding this policy or your data, please don’t hesitate to contact us at privacy@v-edu.us.
            </p>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition mt-4"
              onClick={() => setShowPrivacyPolicy(false)}
            >
              Back / Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
