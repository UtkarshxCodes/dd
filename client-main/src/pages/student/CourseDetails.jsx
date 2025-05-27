import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../components/student/Footer';
import { assets } from '../../assets/assets';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-toastify';
import humanizeDuration from 'humanize-duration'
import YouTube from 'react-youtube';
import { useAuth } from '@clerk/clerk-react';
import Loading from '../../components/student/Loading';
import certificate1 from '../../assets/certificate1.png';
import certificate2 from '../../assets/certificate2.png';
import certificate3 from '../../assets/certificate3.png';
import PaymentModal from '../../components/student/Paymentmodel';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Utility function to generate random ratings and student counts
const generateRandomCourseStats = (courseId) => {
  const seed = courseId.charCodeAt(0) + courseId.length; // Use courseId to generate consistent randomness
  const randomRating = (Math.random() * (5 - 4) + 4).toFixed(1); // Generate a rating between 4.0 and 5.0
  const randomStudents = Math.floor(Math.random() * (99 - 30 + 1)) + 30; // Generate a student count between 30 and 99
  return { randomRating, randomStudents };
};

const CourseDetails = () => {
  const { id } = useParams();
  const { backendUrl } = useContext(AppContext);

  const [courseData, setCourseData] = useState(null);
  const [playerData, setPlayerData] = useState(null);
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponError, setCouponError] = useState("");

  const { currency, userData, calculateChapterTime, calculateCourseDuration, calculateRating, calculateNoOfLectures } = useContext(AppContext);
  const { getToken } = useAuth();

  const [courseStats, setCourseStats] = useState({ randomRating: "4.5", randomStudents: 62 });

  useEffect(() => {
    if (courseData) {
      const stats = generateRandomCourseStats(courseData._id);
      setCourseStats(stats);
    }
  }, [courseData]);

  const fetchCourseData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/course/' + id);
      if (data.success) {
        setCourseData(data.courseData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };


  const enrollCourse = async () => {
    try {
      if (isAlreadyEnrolled) {
        return toast.warn('Already Enrolled');
      }

      const { data } = await axios.post(
        backendUrl + '/api/user/purchase',
        { courseId: courseData._id }
      );

      if (data.success) {
        const { session_url } = data;
        window.location.replace(session_url); // Redirects to Stripe Checkout
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchCourseData();
  }, []);

  useEffect(() => {
    console.log('courseData:', courseData);
  }, [courseData]);

  useEffect(() => {

    if (userData && courseData) {
      setIsAlreadyEnrolled(userData.enrolledCourses.includes(courseData._id))
    }

  }, [userData, courseData])

  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set countdown to 4 days from first render
    const endTime = Date.now() + 4 * 24 * 60 * 60 * 1000;
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = endTime - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleStripePayment = async () => {
    setShowPaymentModal(false);
    // ...your Stripe payment code...
  };

  // PayPal payment logic
  const handlePaypalPayment = async () => {
    setShowPaymentModal(false);
    try {
      if (!userData) return toast.warn('Login to Enroll');
      if (isAlreadyEnrolled) return toast.warn('Already Enrolled');
      const token = await getToken();
      const { data } = await axios.post(
        backendUrl + '/api/user/paypal-create-order',
        { courseId: courseData._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        window.location.replace(data.approvalUrl); // Redirect to PayPal approval page
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleApplyCoupon = (code) => {
    switch (code) {
      case "vedu100":
        setDiscountAmount(100);
        setCouponError("");
        break;
      case "vedu200":
        setDiscountAmount(199);
        setCouponError("");
        break;
      case "vedu300":
        setDiscountAmount(299);
        setCouponError("");
        break;
      case "vedu400":
        setDiscountAmount(399);
        setCouponError("");
        break;
      case "vedu500":
        setDiscountAmount(499);
        setCouponError("");
        break;
      case "vedu600":
        setDiscountAmount(599);
        setCouponError("");
        break;
      case "vedu700":
        setDiscountAmount(699);
        setCouponError("");
        break;
      case "vedu800":
        setDiscountAmount(799);
        setCouponError("");
        break;
      case "vedu900":
        setDiscountAmount(899);
        setCouponError("");
        break;

      default:
        setDiscountAmount(0);
        setCouponError("Invalid coupon code");
    }
  };

  const handleStripePay = async (amount, coupon) => {
    setShowPaymentModal(false);
    try {
      if (!userData) return toast.warn('Login to Enroll');
      if (isAlreadyEnrolled) return toast.warn('Already Enrolled');
      const token = await getToken();
      const { data } = await axios.post(
        backendUrl + '/api/user/purchase',
        { courseId: courseData._id, amount, coupon },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        window.location.replace(data.session_url);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handlePaypalPay = async (amount, coupon) => {
    setShowPaymentModal(false);
    try {
      if (!userData) return toast.warn('Login to Enroll');
      if (isAlreadyEnrolled) return toast.warn('Already Enrolled');
      const token = await getToken();
      const { data } = await axios.post(
        backendUrl + '/api/user/paypal-create-order',
        { courseId: courseData._id, amount, coupon },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        window.location.replace(data.approvalUrl);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return courseData ? (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-20 pt-10 text-left">
        <div className="absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/70"></div>

        <div className="max-w-xl z-10 text-gray-500">
          <h1 className="md:text-course-deatails-heading-large text-course-deatails-heading-small font-semibold text-gray-800">
            {courseData.courseTitle}
          </h1>
          <p className="pt-4 md:text-base text-sm" dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}>
          </p>

          <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
            <p>{courseStats.randomRating}</p>
            <div className='flex'>
              {[...Array(Math.floor(courseStats.randomRating))].map((_, i) => (
                <img key={i} src={assets.star} alt='' className='w-3.5 h-3.5' />
              ))}
              {courseStats.randomRating % 1 !== 0 && <img src={assets.star_half || assets.star} alt='' className='w-3.5 h-3.5' />}
            </div>
            <p className='text-blue-600'>({courseStats.randomRating} ratings)</p>
            <p>{courseStats.randomStudents} students</p>
          </div>

          <p className='text-sm'>
            Course by <span className='text-blue-600 underline'>David Watts</span>
          </p>

          <div className="pt-8 text-gray-800">
            <h2 className="text-xl font-semibold">Course Structure</h2>

            {/* Universal IT Course Roadmap */}
            <div className="w-full flex flex-col items-center mb-4 mt-4">
              <div className="flex flex-row items-center justify-center gap-0 md:gap-4 w-full overflow-x-auto">
                {/* Step 1 */}
                <div className="flex flex-col items-center min-w-[100px]">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-md">1</div>
                  <span className="mt-2 text-xs md:text-sm font-semibold text-blue-700">Intro</span>
                </div>
                <div className="w-8 h-1 bg-blue-300 rounded-full mx-1 md:mx-2"></div>
                {/* Step 2 */}
                <div className="flex flex-col items-center min-w-[100px]">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-md">2</div>
                  <span className="mt-2 text-xs md:text-sm font-semibold text-blue-700">Fundamentals</span>
                </div>
                <div className="w-8 h-1 bg-blue-300 rounded-full mx-1 md:mx-2"></div>
                {/* Step 3 */}
                <div className="flex flex-col items-center min-w-[100px]">
                  <div className="bg-blue-400 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-md">3</div>
                  <span className="mt-2 text-xs md:text-sm font-semibold text-blue-700">Core Modules</span>
                </div>
                <div className="w-8 h-1 bg-blue-300 rounded-full mx-1 md:mx-2"></div>
                {/* Step 4 */}
                <div className="flex flex-col items-center min-w-[100px]">
                  <div className="bg-blue-300 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-md">4</div>
                  <span className="mt-2 text-xs md:text-sm font-semibold text-blue-700">Project/Capstone</span>
                </div>
                <div className="w-8 h-1 bg-blue-300 rounded-full mx-1 md:mx-2"></div>
                {/* Step 5 */}
                <div className="flex flex-col items-center min-w-[100px]">
                  <div className="bg-blue-200 text-blue-700 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-md border border-blue-400">5</div>
                  <span className="mt-2 text-xs md:text-sm font-semibold text-blue-700">Assessments</span>
                </div>
                <div className="w-8 h-1 bg-blue-300 rounded-full mx-1 md:mx-2"></div>
                {/* Step 6 */}
                <div className="flex flex-col items-center min-w-[100px]">
                  <div className="bg-green-400 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-md">6</div>
                  <span className="mt-2 text-xs md:text-sm font-semibold text-green-700">Certifications</span>
                </div>
              </div>
            </div>

            {/* Course Content */}
            <div className="pt-2">
              {courseData.courseContent.map((chapter, index) => (
                <div key={index} className="border border-gray-300 bg-white mb-2 rounded">
                  <div
                    className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="flex items-center gap-2">
                      <img src={assets.down_arrow_icon} alt="arrow icon" className={`transform transition-transform ${openSections[index] ? "rotate-180" : ""}`} />
                      <p className="font-medium md:text-base text-sm">{chapter.chapterTitle}</p>
                    </div>
                    <p className="text-sm md:text-default">{chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}</p>
                  </div>

                  <div className={`overflow-hidden transition-all duration-300 ${openSections[index] ? "max-h-96" : "max-h-0"}`} >
                    <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className="flex items-start gap-2 py-1">
                          <img src={assets.play_icon} alt="bullet icon" className="w-4 h-4 mt-1" />
                          <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                            <p>{lecture.lectureTitle}</p>
                            <div className='flex gap-2'>
                              {lecture.isPreviewFree && <p onClick={() => setPlayerData({
                                videoId: lecture.lectureUrl.split('/').pop()
                              })} className='text-blue-500 cursor-pointer'>Preview</p>}
                              <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ['h', 'm'] })}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-10 text-base md:text-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Course Description</h3>
            <div
              className="rich-text pt-3"
              style={{ fontSize: "1.1rem", lineHeight: "1.7" }}
              dangerouslySetInnerHTML={{
                __html: courseData.courseDescription
                  .replace(/<ol/gi, '<ul')
                  .replace(/<\/ol>/gi, '</ul>')
                  .replace(/<li/gi, '<li style="list-style-type: disc; margin-left: 1.5em;">')
                  .replace(/ ?data-list="bullet">?/gi, '')   // Remove data-list="bullet"> and any space before
                  .replace(/ ?data-list="bullet"/gi, '')     // Remove any stray data-list="bullet"
                  .replace(/ ?data-list="ordered">?/gi, '')  // Remove data-list="ordered"> and any space before
                  .replace(/ ?data-list="ordered"/gi, '')    // Remove any stray data-list="ordered"
              }}
            />
          </div>
        </div>

        <div className="max-w-course-card z-10 shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]">
          {
            playerData
              ? <YouTube videoId={playerData.videoId} opts={{ playerVars: { autoplay: 1 } }} iframeClassName='w-full aspect-video' />
              : <img src={courseData.courseThumbnail} alt="" />
          }
          <div className="p-5">
            <div className="flex items-center gap-2">
              <img className="w-3.5" src={assets.time_left_clock_icon} alt="time left clock icon" />
              <p className="text-red-500">
                <span className="font-medium">
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </span> left at this price!
              </p>
            </div>
            <div className="flex gap-3 items-center pt-2">
              <p className="text-gray-800 md:text-4xl text-2xl font-semibold">{currency}{(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}</p>
              <p className="md:text-lg text-gray-500 line-through">{currency}{courseData.coursePrice}</p>
              <p className="md:text-lg text-gray-500">0% off</p>
            </div>
            <div className="flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500">
              <div className="flex items-center gap-1">
                <img src={assets.star} alt="star icon" />
                <p>4.5</p>
              </div>
              <div className="h-4 w-px bg-gray-500/40"></div>
              <div className="flex items-center gap-1">
                <img src={assets.time_clock_icon} alt="clock icon" />
                <p>62 minutes</p>
              </div>
              <div className="h-4 w-px bg-gray-500/40"></div>
              <div className="flex items-center gap-1">
                <img src={assets.lesson_icon} alt="clock icon" />
                <p>12 lessons</p>
              </div>
            </div>
            <button onClick={() => setShowPaymentModal(true)} className="md:mt-6 mt-4 w-full py-3 rounded bg-blue-600 text-white font-medium">
              {isAlreadyEnrolled ? "Already Enrolled" : "Enroll Now"}
            </button>
            <div className="pt-6">
              <p className="md:text-xl text-lg font-medium text-gray-800">What's in the course?</p>
              <ul className="ml-4 pt-2 text-sm md:text-default list-disc text-gray-500">
                <li>Lifetime access with free updates.</li>
                <li>Step-by-step, hands-on project guidance.</li>
                <li>Downloadable resources and source code.</li>
                <li>Quizzes to test your knowledge.</li>
                <li>Certificate of completion.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

     
      {/* Certification of Completion */}
      <div className="my-12 px-4 py-10 bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pr-8 md:pl-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            <img src={assets.blue_tick_icon} alt="tick" className="inline-block w-8 h-8 mr-2" />
            Certification of Completion
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
            Complete this course and receive an <span className="font-semibold text-black">industry-recognized certificate</span> to showcase your achievement and boost your career prospects. These certificates are designed to highlight your skills and make you stand out in the competitive job market.
          </p>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Whether you're applying for your dream job or advancing in your career, our certificates provide the credibility and recognition you need to succeed.
          </p>
        </div>

        {/* Certificate Images */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="flex gap-6">
            <img src={certificate1} alt="Certificate 1" className="h-56 w-auto rounded-lg shadow-lg border" />
            <img src={certificate2} alt="Certificate 2" className="h-56 w-auto rounded-lg shadow-lg border" />
          </div>
        </div>
      </div>

       {/* Numbers Section */}
      <div ref={statsRef} className="my-12 px-4 py-10 bg-white rounded-xl shadow-lg text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Let’s Numbers Talk</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Consultants Hired */}
          <div>
            {statsInView && (
              <CountUp start={0} end={12} duration={5} className="text-4xl font-bold text-blue-600" />
            )}
            <p className="text-gray-700 text-lg font-medium mt-2">Consultants Hired</p>
          </div>
          {/* Projects Completed */}
          <div>
            {statsInView && (
              <CountUp start={0} end={90} duration={2.5} className="text-4xl font-bold text-blue-600" />
            )}
            <p className="text-gray-700 text-lg font-medium mt-2">Projects Completed</p>
          </div>
          {/* Employees */}
          <div>
            {statsInView && (
              <CountUp start={0} end={27} duration={3.8} className="text-4xl font-bold text-blue-600" />
            )}
            <p className="text-gray-700 text-lg font-medium mt-2">Employees</p>
          </div>
          {/* Clients */}
          <div>
            {statsInView && (
              <CountUp start={0} end={36} duration={3} className="text-4xl font-bold text-blue-600" />
            )}
            <p className="text-gray-700 text-lg font-medium mt-2">Clients</p>
          </div>
        </div>
      </div>


      {/* Career Support & Job Opportunities */}
      <div className="my-12 px-4 py-10 bg-white rounded-xl shadow-lg flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Career Support & Job Opportunities
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-2xl text-lg font-medium">
          Get Career-Ready with Industry Support
        </p>
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-black mb-2">
              Personalized Job Assistance
            </h3>
            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
              <li>Resume & LinkedIn profile optimization</li>
              <li>Mock interviews & technical screening</li>
              <li>Portfolio & GitHub project reviews</li>
            </ul>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-black mb-2">
              Interview Preparation Toolkit
            </h3>
            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
              <li>Most-asked interview questions</li>
              <li>Role-specific skill assessments</li>
              <li>Insider tips from industry experts</li>
            </ul>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-black mb-2">
              Global Job Market Insights
            </h3>
            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
              <li>Trends in hiring for your field</li>
              <li>Job alerts & recommendations</li>
              <li>Salary guides by experience & region</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Career Paths */}
      <div className="my-12 px-4 py-10 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-6">
          Career Paths You Can Pursue
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Data Science & AI */}
          <div className="bg-white rounded-lg shadow-lg p-5 border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <h4 className="font-semibold text-black mb-2">For Data Science & AI</h4>
            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
              <li>Data Scientist</li>
              <li>Machine Learning Engineer</li>
              <li>AI Analyst</li>
              <li>Business Intelligence Developer</li>
            </ul>
          </div>
          {/* Cybersecurity & Ethical Hacking */}
          <div className="bg-white rounded-lg shadow-lg p-5 border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <h4 className="font-semibold text-black mb-2">For Cybersecurity & Ethical Hacking</h4>
            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
              <li>Security Analyst</li>
              <li>Penetration Tester</li>
              <li>SOC Analyst</li>
              <li>Cybersecurity Consultant</li>
            </ul>
          </div>
          {/* DevOps & Cloud Computing */}
          <div className="bg-white rounded-lg shadow-lg p-5 border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <h4 className="font-semibold text-black mb-2">For DevOps & Cloud Computing</h4>
            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
              <li>DevOps Engineer</li>
              <li>Site Reliability Engineer (SRE)</li>
              <li>Cloud Solutions Architect</li>
              <li>Infrastructure as Code (IaC) Specialist</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Our PROGRAM */}
      <div className="my-12 px-4 py-10 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-6">
          Our PROGRAM
        </h2>
        <h3 className="text-lg md:text-xl font-semibold text-gray-700 text-center mb-12">
          What We Offer
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
          {/* Graduation Degree */}
          <div className="relative group">
            <img
              src={assets.details5}
              alt="Mock-Interviews"
              className="w-full h-90 object-cover rounded-lg shadow-md transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">Mock-Interviews</p>
            </div>
          </div>

          {/* Masters Degree */}
          <div className="relative group">
            <img
              src={assets.details2}
              alt="Skills-based-Development"
              className="w-full h-90 object-cover rounded-lg shadow-md transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">Skill-based-Development</p>
            </div>
          </div>

          {/* Post Graduation */}
          <div className="relative group">
            <img
              src={assets.details3}
              alt="Industrial-Training"
              className="w-full h-90 object-cover rounded-lg shadow-md transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">Industry-Ready</p>
            </div>
          </div>
        </div>
      </div> 
      
      
      {/* Top Companies */}
      <div className="my-12 px-4 py-10 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Top Companies Hiring in This Domain
        </h2>

        {/* Google */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={assets.google_logo} // Replace with the actual Google logo path
              alt="Google"
              className="h-auto max-w-full"
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-700 text-lg font-medium">
            <h3 className="text-2xl font-bold text-black mb-4">Google</h3>
            <p>
              V-EDU graduates have landed roles at Google by showcasing expertise in machine learning, cloud platforms (GCP), and scalable systems design. Our advanced coursework and project-based learning mirror Google’s rigorous hiring expectations — preparing learners for roles in AI, data engineering, and product development.
            </p>
          </div>
        </div>

        {/* Amazon */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={assets.amazon_logo} // Replace with the actual Amazon logo path
              alt="Amazon"
              className="h-auto max-w-full"
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-700 text-lg font-medium">
            <h3 className="text-2xl font-bold text-black mb-4">Amazon</h3>
            <p>
              With a strong focus on problem-solving, AWS cloud architecture, and data-driven thinking, our students have successfully transitioned into tech roles at Amazon. V-EDU’s curriculum includes real-world simulations that align with Amazon’s Leadership Principles and technical assessments.
            </p>
          </div>
        </div>

        {/* Microsoft */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={assets.microsoft_logo} // Replace with the actual Microsoft logo path
              alt="Microsoft"
              className="h-auto md:w-48"
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-700 text-lg font-medium">
            <h3 className="text-2xl font-bold text-black mb-4">Microsoft</h3>
            <p>
              Microsoft hires professionals skilled in Azure, full-stack development, data science, and cybersecurity — all key pillars of V-EDU’s programs. Through hands-on projects, students gain the confidence and technical fluency needed to excel at Microsoft’s fast-paced, innovation-driven culture.
            </p>
          </div>
        </div>

        {/* IBM */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={assets.ibm_logo} // Replace with the actual IBM logo path
              alt="IBM"
              className="h-auto max-w-full"
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-700 text-lg font-medium">
            <h3 className="text-2xl font-bold text-black mb-4">IBM</h3>
            <p>
              IBM values professionals who combine technical depth with analytical thinking, especially in areas like AI, automation, and cloud computing. V-EDU’s courses equip learners with real-time lab experience and IBM-aligned tools, enabling smooth integration into roles like AI engineer or cloud consultant.
            </p>
          </div>
        </div>

        {/* Deloitte */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={assets.deloitte_logo} // Replace with the actual Deloitte logo path
              alt="Deloitte"
              className="h-auto max-w-full"
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-700 text-lg font-medium">
            <h3 className="text-2xl font-bold text-black mb-4">Deloitte</h3>
            <p>
              As one of the Big Four, Deloitte seeks tech talent for consulting, data analytics, cloud transformation, and cybersecurity strategy. Our career coaching, case-study simulations, and soft skills training help V-EDU graduates thrive in client-facing, high-impact roles at Deloitte.
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT V-EDU.us LLC */}
      <div className="my-12 px-4 py-10 bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={assets.details4}
            alt="About University"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            ABOUT V-EDU.us LLC
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Empowering Tomorrow’s Tech Talent Today
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            At V-EDU.us LLC, we recognize a major shift in today’s job market — where practical skills now speak louder than traditional degrees. That’s why we’re focused on bridging the gap between education and employment with hands-on, industry-aligned tech training.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mt-4">
            As a US-based learning platform, we deliver career-focused programs in Data Science, Machine Learning, React, Cybersecurity, and other high-demand fields — built specifically to meet the expectations of today’s top tech employers.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mt-4">
            Whether you're a recent graduate, a professional pivoting into tech, or someone ready to upskill, our expert-led training, combined with real-world projects and career support, ensures you're ready to hit the ground running.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-4">
            Why V-EDU Stands Out
          </h3>
          <ul className="list-disc ml-5 text-gray-600 text-base space-y-2">
            <li>🧠 <strong>Skills Over Degrees:</strong> We focus on what employers actually want — job-ready skills, not academic theory.</li>
            <li>💼 <strong>Career-Driven Learning:</strong> Includes resume-building, mock interviews, and direct job assistance to get you hired faster.</li>
            <li>👩‍🏫 <strong>Mentorship by Experts:</strong> Learn from professionals currently working in the tech industry.</li>
            <li>📈 <strong>Flexible Online Learning:</strong> Study on your time, at your pace, with both full-time and part-time options.</li>
          </ul>

          <p className="text-gray-600 text-base leading-relaxed mt-6">
            At V-EDU, we’re not just an online course provider — we’re your career launch partner in the modern tech economy.
          </p>
        </div>
      </div>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        coursePrice={courseData.coursePrice}
        discountAmount={discountAmount}
        onApplyCoupon={handleApplyCoupon}
        couponError={couponError}
        onStripePay={handleStripePay}
        onPaypalPay={handlePaypalPay}
      />

      <Footer />
    </>
  ) : <Loading />
};

export default CourseDetails;