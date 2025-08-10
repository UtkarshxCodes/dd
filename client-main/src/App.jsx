import React, { useState } from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'
import Navbar from './components/student/Navbar'
import Home from './pages/student/Home'
import CourseDetails from './pages/student/CourseDetails'
import CoursesList from './pages/student/CoursesList'
import 'quill/dist/quill.snow.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Player from './pages/student/Player'
import MyEnrollments from './pages/student/MyEnrollments'
import Loading from './components/student/Loading'
import AboutUs from './components/student/Aboutus';
import ContactUs from './components/student/ContactUs';
import JobsList from './pages/student/JobsList';
import CourseRegistration from './components/student/CourseRegistration';
import LMSLoginPage from './pages/student/LMSLoginPage';
import LMSDashboard from './pages/student/LMSDashboard';
import QuizSection from './components/student/quiz';
import PrivacyPolicyPage from "./pages/student/PrivacyPolicyPage";
import ReturnPolicyPage from "./pages/student/ReturnPolicyPage";

const App = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
  });

  const isEducatorRoute = false; // Educator routes removed

  return (
    <div className="text-default min-h-screen bg-white">
      <ToastContainer />
      {/* Render Student Navbar only */}
      {!isEducatorRoute && <Navbar />}
      <Routes>
        <Route path="/" element={
          <Home
            showRegistration={showRegistration}
            setShowRegistration={setShowRegistration}
            formData={formData}
            setFormData={setFormData}
          />
        } />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/jobs" element={
          <JobsList
            showRegistration={showRegistration}
            setShowRegistration={setShowRegistration}
            formData={formData}
            setFormData={setFormData}
          />
        } />
        <Route path="/register" element={<CourseRegistration />} />
        <Route path="/lms-login" element={<LMSLoginPage />} />
        <Route path="/lms-dashboard" element={<LMSDashboard />} />
        <Route path="/quiz" element={<QuizSection />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/return-policy" element={<ReturnPolicyPage />} />
      </Routes>
      <CourseRegistration
        isOpen={showRegistration}
        setIsOpen={setShowRegistration}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  )
}

export default App
