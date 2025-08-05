import React, { useState } from 'react';
import { FaGraduationCap, FaUserCircle, FaLock, FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LMSLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Navigation hook

  const handleLogin = () => {
    // Validate email and password
    if (email === 'StudentID@v-edu.us' && password === 'V-edu.us1') {
      sessionStorage.setItem('authUserEmail', email); // Store authentication state
      sessionStorage.setItem('authUserName', 'Default User'); // Store user name
      navigate('/lms-dashboard'); // Redirect to LMSDashboard
    } else if (
      (email === 'christianocampo1230@hotmail.com' && password === 'Vedu@123') ||
      (email === 'archana.katangur@gmail.com' && password === 'Vedu@123') ||
      (email === 'roccosegreti@yahoo.com' && password === 'Vedu@123')
    ) {
      sessionStorage.setItem('authUserEmail', email);
      sessionStorage.setItem(
        'authUserName',
        email === 'archana.katangur@gmail.com'
          ? 'Archana'
          : email === 'roccosegreti@yahoo.com'
          ? 'Rocco'
          : 'Christiano'
      );
      navigate('/lms-dashboard');
    } else if (
      (email === 'lucretiahenry@rocketmail.com' && password === 'Vedu@123') ||
      (email === 'veemal16@gmail.com' && password === 'Vedu@123') ||
      (email === 'roccosegreti@yahoo.com' && password === 'Vedu@123')
    ) {
      sessionStorage.setItem('authUserEmail', email);
      sessionStorage.setItem(
        'authUserName',
        email === 'roccosegreti@yahoo.com'
          ? 'Rocco'
          : email === 'veemal16@gmail.com'
          ? 'Veemal'
          : 'Lucretia'
      );
      navigate('/lms-dashboard');
    } else if (
      (email === 'mushfiqrhmn1@gmail.com' && password === 'Vedu@123')
    ) {
      sessionStorage.setItem('authUserEmail', email);
      sessionStorage.setItem('authUserName', 'Mushfiq');
      navigate('/lms-dashboard');
    } else if (
      (email === 'conuwa.a@gmail.com' && password === 'Vedu@123')
    ) {
      sessionStorage.setItem('authUserEmail', email);
      sessionStorage.setItem('authUserName', 'onuwabuchi');
      navigate('/lms-dashboard');
    } else if (
      (email === 'russellmbaker@gmail.com' && password === 'Vedu@123')
    ) {
      sessionStorage.setItem('authUserEmail', email);
      sessionStorage.setItem('authUserName', 'Russell');
      navigate('/lms-dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
        {/* Title */}
        <div className="flex items-center justify-center mb-6">
          <FaGraduationCap size={30} className="text-blue-700 mr-2" />
          <h1 className="text-2xl font-bold text-blue-700">V-EDU Learning Portal</h1>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <div className="flex items-center border rounded-lg p-2">
            <FaUserCircle size={20} className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <div className="flex items-center border rounded-lg p-2">
            <FaLock size={20} className="text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="bg-blue-700 text-white w-full py-3 rounded-lg flex items-center justify-center hover:bg-blue-800 transition"
        >
          <FaSignInAlt size={20} className="mr-2" />
          Login
        </button>

        {/* Forgot Password */}
        <p className="text-sm text-gray-500 mt-4 text-center">
          Use your registered student email ID and LMS password. Contact support for access issues.
        </p>
      </div>
    </div>
  );
};

export default LMSLoginPage;