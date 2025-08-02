import React, { useState, useEffect } from 'react';
import { FaHome, FaBook, FaChartLine, FaTasks, FaVideo, FaComments, FaCertificate, FaSignOutAlt, FaBell, FaUserCircle } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import MyEnrollments from '../../components/MyEnrollments';
import ProgressAnalytics from '../../components/ProgressAnalytics';
import LiveSessions from '../../components/LiveSessions';
import AssignmentsTasks from '../../components/AssignmentsTasks';
import DataScienceAssignments from '../../components/DataScienceAssignments';
import AskMentor from '../../components/AskMentor';

const LMSDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);

  useEffect(() => {
    const authUserEmail = sessionStorage.getItem('authUserEmail');
    const authUserName = sessionStorage.getItem('authUserName');
    if (!authUserEmail) {
      navigate('/lms-login');
    } else {
      setUserEmail(authUserEmail);
      setUserName(authUserName || 'Learner');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('authUserEmail');
    sessionStorage.removeItem('authUserName');
    navigate('/lms-login');
  };

  const handleNotificationClick = () => {
    setShowNotificationPopup(true);
    setTimeout(() => {
      setShowNotificationPopup(false);
    }, 3000);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col fixed top-20 left-0 h-[calc(100%-5rem)]">
        <div className="p-6 text-center border-b border-blue-700">
          <h1 className="text-xl font-bold">V-EDU.us</h1>
          <p className="text-sm">Learning Management System</p>
          <p className="text-sm mt-2">Welcome, {userName}!</p>
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-4">
            <li
              className={`flex items-center gap-3 hover:bg-blue-700 p-2 rounded-md cursor-pointer ${
                activeSection === 'Dashboard' ? 'bg-blue-700' : ''
              }`}
              onClick={() => setActiveSection('Dashboard')}
            >
              <FaHome />
              <span>Dashboard</span>
            </li>
            <li
              className={`flex items-center gap-3 hover:bg-blue-700 p-2 rounded-md cursor-pointer ${
                activeSection === 'My Enrollments' ? 'bg-blue-700' : ''
              }`}
              onClick={() => setActiveSection('My Enrollments')}
            >
              <FaBook />
              <span>My Enrollments</span>
            </li>
            <li
              className={`flex items-center gap-3 hover:bg-blue-700 p-2 rounded-md cursor-pointer ${
                activeSection === 'Progress Analytics' ? 'bg-blue-700' : ''
              }`}
              onClick={() => setActiveSection('Progress Analytics')}
            >
              <FaChartLine />
              <span>Progress Analytics</span>
            </li>
            <li
              className={`flex items-center gap-3 hover:bg-blue-700 p-2 rounded-md cursor-pointer ${
                activeSection === 'Assignments / Tasks' ? 'bg-blue-700' : ''
              }`}
              onClick={() => setActiveSection('Assignments / Tasks')}
            >
              <FaTasks />
              <span>Assignments / Tasks</span>
            </li>
            <li
              className={`flex items-center gap-3 hover:bg-blue-700 p-2 rounded-md cursor-pointer ${
                activeSection === 'Live Sessions / Recordings' ? 'bg-blue-700' : ''
              }`}
              onClick={() => setActiveSection('Live Sessions / Recordings')}
            >
              <FaVideo />
              <span>Live Sessions / Recordings</span>
            </li>
            <li
              className={`flex items-center gap-3 hover:bg-blue-700 p-2 rounded-md cursor-pointer ${
                activeSection === 'Ask Mentor (Doubt Forum)' ? 'bg-blue-700' : ''
              }`}
              onClick={() => setActiveSection('Ask Mentor (Doubt Forum)')}
            >
              <FaComments />
              <span>Ask Mentor (Doubt Forum)</span>
            </li>
            <li
              className={`flex items-center gap-3 hover:bg-blue-700 p-2 rounded-md cursor-pointer ${
                activeSection === 'Certificates' ? 'bg-blue-700' : ''
              }`}
              onClick={() => setActiveSection('Certificates')}
            >
              <FaCertificate />
              <span>Certificates</span>
            </li>
            <li
              className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded-md cursor-pointer"
              onClick={handleLogout}
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6">
        {/* Header */}
        <header className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md relative">
          <div>
            <h2 className="text-xl font-bold">Welcome back, {userName} 👋</h2>
            <p className="text-sm text-gray-500">Your learning journey continues!</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <FaBell
                size={20}
                className="text-gray-700 cursor-pointer"
                onClick={handleNotificationClick}
              />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
            </div>
            <FaUserCircle size={30} className="text-gray-700 cursor-pointer" />
          </div>

          {/* Notification Popup */}
          {showNotificationPopup && (
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 w-64 z-50">
              <h4 className="text-sm font-bold mb-2">🔔 Notifications</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Welcome to V-EDU LMS, {userName}! Your personalized learning journey begins here.</li>
                <li>Stay tuned! One of our expert instructors will shortly assist you.</li>
                <li>Don't forget to check out your Dashboard for assignments and progress analytics.</li>
              </ul>
            </div>
          )}
        </header>

        {/* Dynamic Content */}
        <section className="mt-6">
          {activeSection === 'Dashboard' && <MyEnrollments userEmail={userEmail} />}
          {activeSection === 'My Enrollments' && <MyEnrollments userEmail={userEmail} />}
          {activeSection === 'Progress Analytics' && <ProgressAnalytics />}
          {activeSection === 'Assignments / Tasks' &&
            (userEmail === 'lucretiahenry@rocketmail.com' ||
             userEmail === 'veemal16@gmail.com' ||
             userEmail === 'mushfiqrhmn1@gmail.com' ||
             userEmail === 'conuwa.a@gmail.com' ||
             userEmail === 'russeellmbakers@gmail.com' ? (
              <DataScienceAssignments userEmail={userEmail} />
            ) : (
              <AssignmentsTasks />
            ))}
          {activeSection === 'Live Sessions / Recordings' &&
            (userEmail === 'conuwa.a@gmail.com' || userEmail === 'russeellmbakers@gmail.com' ? (
              <LiveSessions videos={[]} />
            ) : userEmail === 'mushfiqrhmn1@gmail.com' ? (
              <LiveSessions videos={[
                {
                  src: "https://www.youtube.com/embed/_mC7gdoqOf4",
                  title: "Data Science Session",
                },
                {
                  src: "https://www.youtube.com/embed/bt-sfIpT8F0",
                  title: "Data Science Session",
                },
                {
                  src: "https://www.youtube.com/embed/0gI5VkxUpa0",
                  title: "Data Science Session",
                },
              ]} />
            ) : (
              <LiveSessions />
            ))}
          {activeSection === 'Ask Mentor (Doubt Forum)' && <AskMentor />}
          {activeSection === 'Certificates' && (
            <div>
              <h3 className="text-lg font-bold mb-4">Certificates</h3>
              <p>Download your course completion certificates here.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default LMSDashboard;