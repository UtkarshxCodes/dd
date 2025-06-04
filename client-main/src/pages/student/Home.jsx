import React, { useRef, useEffect, useState } from 'react';
import Footer from '../../components/student/Footer';
import Hero from '../../components/student/Hero';
import Companies from '../../components/student/Companies';
import JobPostingSection from '../../components/student/JobPostingSection';
import CoursesSection from '../../components/student/CoursesSection';
import TestimonialsSection from '../../components/student/TestimonialsSection';
import CallToAction from '../../components/student/CallToAction';
import StepsSection from '../../components/student/StepsSection';
import ErrorBoundary from "../../components/student/ErrorBoundary";
import CourseRegistration from '../../components/student/CourseRegistration';
import PaymentModal from '../../components/student/Paymentmodel';
import { assets } from '../../assets/assets';
import './JobsList.css';
import Carousel from '../../components/student/carousal';
import CountsSection from '../../components/student/CountsSection';
import Content from '../../components/student/content';
import Quiz from '../../components/student/quiz'; 
import './home.css';
import SheryIframe from '../../components/student/SheryIframe';

const Home = () => {
  const jobsRef = useRef(null);
  const fabRef = useRef(null);
  const quizRef = useRef(null);

  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [showRegistration, setShowRegistration] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
  });
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [fabToggle, setFabToggle] = useState(true); // State to toggle between icon and text

  useEffect(() => {
    const scrollHandler = () => {
      if (jobsRef.current) {
        jobsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('scrollToJobsSection', scrollHandler);
    return () => window.removeEventListener('scrollToJobsSection', scrollHandler);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseOffset({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFabToggle((prev) => !prev); // Toggle the state every 5 seconds
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const fabStyle = {
    position: 'fixed',
    left: `${20 + mouseOffset.x}px`,
    bottom: `${20 - mouseOffset.y}px`,
    transition: 'left 200ms ease-out, bottom 200ms ease-out',
    zIndex: 9999,
  };

  const handleStripePay = async (amount) => {
    if (!selectedCourse?._id || !amount) {
      alert("No course selected or invalid amount.");
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/user/purchase-stripe', { // Production URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId: selectedCourse._id,
          amount,
        }),
      });

      const data = await res.json();
      if (data.success && data.session_url) {
        window.location.href = data.session_url;
      } else {
        alert(data.message || "Payment failed");
      }
    } catch (error) {
      console.error("Stripe Payment Error:", error);
      alert("An error occurred while processing the payment.");
    }
  };

  const handlePaypalPay = async (amount) => {
    if (!selectedCourse?._id || !amount) {
      alert("No course selected or invalid amount.");
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/user/paypal-create-order', { // Production URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          description: `Payment for course: ${selectedCourse.courseTitle}`,
        }),
      });

      const data = await res.json();
      if (data.success && data.approvalUrl) {
        window.location.href = data.approvalUrl;
      } else {
        alert(data.message || "Payment failed");
      }
    } catch (error) {
      console.error("PayPal Payment Error:", error);
      alert("An error occurred while processing the payment.");
    }
  };

  const handleApplyCoupon = async (coupon) => {
    const res = await fetch('http://localhost:5173/api/user/apply-coupon', { // Production URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': window.location.origin,
      },
      body: JSON.stringify({ couponCode: coupon, courseId: selectedCourse?._id }),
    });

    const data = await res.json();
    if (data.success) {
      setDiscountAmount(data.discountAmount);
      setCouponError("");
    } else {
      setCouponError(data.message);
    }
  };

  useEffect(() => {
    const handleScrollToQuiz = () => {
      if (quizRef.current) {
        quizRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('scrollToQuizSection', handleScrollToQuiz);

    return () => {
      window.removeEventListener('scrollToQuizSection', handleScrollToQuiz);
    };
  }, []);

  return (
    <>
      {/* Universal Container */}
      <div className="overflow-x-hidden w-full">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col items-center space-y-7 text-center">
            <Hero />
            <Carousel />
            <CountsSection/>
            <SheryIframe />
            <Content />
            <ErrorBoundary>
              <Companies />
            </ErrorBoundary>
            <div ref={jobsRef}>
              <JobPostingSection />
            </div>
            {/* Add Quiz Section */}
            <div ref={quizRef}>
              <Quiz />
            </div>
            <CoursesSection
              onEnroll={(course) => {
                setSelectedCourse(course);
                setShowPaymentModal(true);
              }}
            />
          </div>
        </div>

        <section className="relative w-full h-[400px] flex items-center justify-center bg-black">
          <div className="flex w-full h-full flex-wrap md:flex-nowrap">
            {/* First Video */}
            <video
              className="w-full md:w-1/2 h-[200px] md:h-full object-cover object-right"
              src={assets.videolms}
              autoPlay
              loop
              muted
              playsInline
            ></video>

            {/* Second Video */}
            <video
              className="w-full md:w-1/2 h-[200px] md:h-full object-cover"
              src={assets.video1}
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </section>

        <StepsSection />
        <TestimonialsSection />
        <CallToAction />
        <Footer />
      </div>

      {/* Floating FAB */}
      <menu id="fab-menu" ref={fabRef} style={fabStyle}>
        <button
          type="button"
          className="action fab-glow animated-fab"
          onClick={() => setShowRegistration(true)}
          aria-label="Register"
        >
          {fabToggle ? (
            <span className="fab-icon">
              <i className="fas fa-clipboard-list"></i>
            </span>
          ) : (
            <span className="fab-text">Register Now</span>
          )}
        </button>
      </menu>

      <CourseRegistration
        isOpen={showRegistration}
        setIsOpen={setShowRegistration}
        onRegistered={() => setShowPaymentModal(true)}
        formData={formData}
        setFormData={setFormData}
      />
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        courseId={selectedCourse?._id}
        coursePrice={selectedCourse?.coursePrice}
        discountAmount={discountAmount}
        onApplyCoupon={handleApplyCoupon}
        couponError={couponError}
        onStripePay={handleStripePay}
        onPaypalPay={handlePaypalPay}
      />
    </>
  );
};

export default Home;
