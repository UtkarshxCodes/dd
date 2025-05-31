import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./AboutUs.css";

const AboutUs = () => {
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  const [currentImageIndex3, setCurrentImageIndex3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % 2); // Switch between 0 and 1
    }, 5000);

    const interval2 = setInterval(() => {
      setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % 2); // Switch between 0 and 1
    }, 5000);

    const interval3 = setInterval(() => {
      setCurrentImageIndex3((prevIndex) => (prevIndex + 1) % 2); // Switch between 0 and 1
    }, 5000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className="about-container">
      <h1 className="title">About V-EDU</h1>
      <p className="description">
        At <strong>V-EDU</strong>, we are on a mission to bridge the gap between education and employability in the fast-evolving tech world. Founded in the United States, <strong>V-EDU.us LLC</strong> is a career-focused education provider dedicated to helping learners build job-ready skills and connect with real-world opportunities.
      </p>

      {/* First Image Section */}
      <div className="image-container">
        <img
          src={currentImageIndex1 === 0 ? assets.about1 : assets.about2}
          alt="About V-EDU 1"
          className="dynamic-image"
        />
      </div>

      <section className="what-we-do">
        <h2>What We Do</h2>
        <ul>
          <li>🎓 <strong>Career-Oriented Tech Courses:</strong> Learn technologies shaping the future — from Python and Kubernetes to AWS and AI.</li>
          <li>🛠 <strong>Mentorship & Hands-On Training:</strong> Learn from professionals actively working in the field.</li>
          <li>🚀 <strong>Job Assistance Programs:</strong> Resume reviews, mock interviews, and career strategy sessions.</li>
          <li>🌍 <strong>Global-Ready Learning:</strong> Diverse, inclusive, and accessible learning environment.</li>
        </ul>
      </section>

      {/* Second Image Section */}
      <div className="image-container">
        <img
          src={currentImageIndex2 === 0 ? assets.about3 : assets.about4}
          alt="About V-EDU 2"
          className="dynamic-image"
        />
      </div>

      <section className="why-choose">
        <h2>Why Choose V-EDU?</h2>
        <div className="benefits-grid">
          <div className="benefit">✅ Live, Instructor-Led Training</div>
          <div className="benefit">✅ Portfolio-Ready Projects</div>
          <div className="benefit">✅ Industry-Endorsed Certifications</div>
          <div className="benefit">✅ Personalized Career Support</div>
          <div className="benefit">✅ Flexible Learning, Real Results</div>
        </div>
      </section>

      <section className="vision-mission">
        <h2>Our Vision</h2>
        <p>To become a global leader in tech-driven education by providing accessible, affordable, and outcome-oriented learning for everyone.</p>
        <h2>Our Mission</h2>
        <p>To equip learners with the technical skills, practical experience, and career confidence needed to succeed in today's competitive job market.</p>

        {/* Third Image Section */}
        <div className="image-container">
          <img
            src={currentImageIndex3 === 0 ? assets.about5 : assets.about6}
            alt="About V-EDU 3"
            className="dynamic-image"
          />
        </div>
      </section>

      {/* Reach Us Section */}
      <section className="reach-us">
        <h2>Reach Us At</h2>
        <a href="https://maps.app.goo.gl/1vyuEaeJJcEBBPEz8" target="_blank" rel="noopener noreferrer">
          <img src={assets.map} alt="V-edu.us Map View" className="map-image" />
        </a>
      </section>

      <section className="contact-info">
        <h2>Contact Us</h2>
        <p><strong>Phone:</strong> <a href="tel:+18883444990">+1 888-344-4990</a></p>
        <p><strong>Email:</strong> <a href="mailto:support@v-edu.us">support@v-edu.us</a></p>
        <p><strong>Address:</strong> 1908 Thomes Ave STE 12363, Cheyenne, WY 82001</p>
      </section>
    </div>
  );
};

export default AboutUs;