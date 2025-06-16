import React, { useState } from 'react';

const AskMentor = () => {
  const [doubtText, setDoubtText] = useState('');

  const handleSubmitDoubt = () => {
    const mailtoLink = `mailto:support@v-edu.us?subject=Student Doubt&body=${encodeURIComponent(doubtText)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      {/* Zoom Button */}
      <a
        href="https://us06web.zoom.us/j/6116957915"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mb-4"
      >
        🔴 Join Live Mentor Zoom Session
      </a>

      {/* Submit Doubt Form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h4 className="text-md font-semibold mb-2">Submit Your Doubt</h4>
        <textarea
          className="w-full border border-gray-300 rounded p-2"
          placeholder="Type your question here..."
          rows={4}
          value={doubtText}
          onChange={(e) => setDoubtText(e.target.value)}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 mt-2 rounded-md"
          onClick={handleSubmitDoubt}
        >
          Submit Doubt
        </button>
      </div>

      {/* Recently Answered Doubts */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h4 className="text-md font-semibold mb-3">Frequently Asked by Others</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>
            <strong>Q:</strong> How do I perform a basic port scan using Nmap?  
            <br />
            <strong>A:</strong> Use `nmap -sS &lt;target-IP&gt;`. It performs a TCP SYN scan to identify open ports.
          </li>
          <li>
            <strong>Q:</strong> What’s the difference between black-hat and white-hat hacking?  
            <br />
            <strong>A:</strong> White-hats are ethical hackers who follow the law; black-hats exploit vulnerabilities illegally.
          </li>
        </ul>
      </div>

      {/* Mentor Availability */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h4 className="text-md font-semibold mb-2">Mentor Availability</h4>
        <ul className="text-sm text-gray-600">
          <li>🗓️ Monday to Friday: 6 PM – 8 PM</li>
          <li>📧 Email Support: mentor@v-edu.us</li>
          <li>💬 WhatsApp Group: Available 24x7</li>
        </ul>
      </div>
    </div>
  );
};

export default AskMentor;