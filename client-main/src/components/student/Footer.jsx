import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showReturnPolicy, setShowReturnPolicy] = useState(false);
  const navigate = useNavigate();

  const navigateAndScrollToTop = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Ensure navigation completes before scrolling
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
                    onClick={() => setShowPrivacyPolicy(true)}
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    className="text-white/80 hover:text-white transition"
                    onClick={() => setShowReturnPolicy(true)}
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

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4 p-6 overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-sm text-gray-700 mb-4">Effective  2025</p>
            <p className="text-sm text-gray-700 mb-4">V-EDU.us LLC</p>
            <p className="text-sm text-gray-700 mb-4">
              At V-EDU.us LLC (“V-EDU”, “we”, “our”, or “us”), we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website at https://v-edu.us and interact with our products and services.
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

      {/* Return Policy Modal */}
      {showReturnPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4 p-6 overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold mb-4">Return & Cancellation Policy</h2>
            <p className="text-sm text-gray-700 mb-4">Effective  2025</p>
            <p className="text-sm text-gray-700 mb-4">
              At V-EDU.us LLC, we are committed to ensuring a smooth and trustworthy experience for our learners. We understand that plans may change, and we offer a straightforward cancellation and refund process for your peace of mind.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              <strong>Full Refund on Course Registration:</strong> If you decide not to proceed with your course after registration, you are eligible for a 100% refund of the $199 registration amount, no questions asked.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              <strong>How to Cancel and Request a Refund:</strong> Please email us at <a href="mailto:support@v-edu.us" className="text-blue-600 hover:underline">support@v-edu.us</a> with your full name, registered email address, and payment confirmation or reference number. Refunds will be processed to your original payment method within 5–7 business days after confirmation.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              <strong>Important Notes:</strong> Refund requests must be submitted before the course begins or before any course material is accessed. If course access has already been granted or live sessions attended, refund eligibility may be reviewed on a case-by-case basis. Any third-party processing fees (if applicable) may be deducted from the refunded amount.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              <strong>Contact Us:</strong><br />
              📧 Email: <a href="mailto:support@v-edu.us" className="text-blue-600 hover:underline">support@v-edu.us</a><br />
              📞 Phone: <a href="tel:+18883444990" className="text-blue-600 hover:underline">+1 (888) 344-4990</a><br />
              🏢 Address: 1908 Thomes Ave STE 12363, Cheyenne, WY 82001
            </p>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition mt-4"
              onClick={() => setShowReturnPolicy(false)}
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
