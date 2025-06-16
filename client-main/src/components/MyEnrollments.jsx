import React, { useState } from 'react';

const MyEnrollments = () => {
  const [showCurriculum, setShowCurriculum] = useState(false);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-4">📚 My Enrollments</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="border rounded-lg p-4 mb-6">
          <h4 className="text-xl font-bold mb-2">🎓 Cybersecurity & Ethical Hacking</h4>
          <p className="text-sm text-gray-500 mb-2">Enrolled On: May 21, 2025</p>
          <p className="text-sm text-gray-500 mb-2">Course ID: CSEH-205</p>
          <p className="text-sm text-gray-500 mb-2">Instructor: Stefin Watts</p>
          <p className="text-sm text-gray-500 mb-2">Progress: 0%</p>
          <p className="text-sm text-gray-500 mb-2">Status: In Progress</p>
          <p className="text-sm text-gray-500 mb-2">Duration: 26 weeks</p>
          <p className="text-sm text-gray-500 mb-4">
            "Master the foundational and advanced concepts of digital security. Learn real-world attack simulations,
            ethical hacking frameworks, and defensive strategies used by professionals."
          </p>
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
            onClick={() => setShowCurriculum(!showCurriculum)}
          >
            📜 View Curriculum
          </button>
        </div>

        {showCurriculum && (
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-bold mb-4">📜 Curriculum Modules</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span>🛡️</span>
                <span>Introduction to Cybersecurity</span>
              </li>
              <li className="flex items-center gap-3">
                <span>🌐</span>
                <span>Fundamentals of Networking</span>
              </li>
              <li className="flex items-center gap-3">
                <span>🐞</span>
                <span>Malware Types & Detection</span>
              </li>
              <li className="flex items-center gap-3">
                <span>🌍</span>
                <span>Web Application Security</span>
              </li>
              <li className="flex items-center gap-3">
                <span>🧪</span>
                <span>Penetration Testing Basics</span>
              </li>
              <li className="flex items-center gap-3">
                <span>🎭</span>
                <span>Social Engineering & Phishing</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📶</span>
                <span>Wireless Network Security</span>
              </li>
              <li className="flex items-center gap-3">
                <span>⚖️</span>
                <span>Cyber Laws and Compliance</span>
              </li>
              <li className="flex items-center gap-3">
                <span>🏁</span>
                <span>Final Capstone Project</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyEnrollments;