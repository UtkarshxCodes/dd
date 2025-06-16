import React, { useState, useEffect } from 'react';
import { FaHome, FaBook, FaChartLine, FaTasks, FaVideo, FaComments, FaCertificate, FaSignOutAlt, FaBell, FaUserCircle } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import MyEnrollments from '../../components/MyEnrollments';
import ProgressAnalytics from '../../components/ProgressAnalytics';
import LiveSessions from '../../components/LiveSessions';
import AssignmentsTasks from '../../components/AssignmentsTasks';
import AskMentor from '../../components/AskMentor';

const LMSDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [user, setUser] = useState('');
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);

  useEffect(() => {
    const authUser = sessionStorage.getItem('authUser');
    if (!authUser) {
      navigate('/lms-login');
    } else {
      const queryParams = new URLSearchParams(location.search);
      const userParam = queryParams.get('user');
      setUser(authUser === 'christiano' ? 'christiano' : userParam || 'default');
    }
  }, [location, navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('authUser');
    navigate('/lms-login');
  };

  const handleNotificationClick = () => {
    setShowNotificationPopup(true);
    setTimeout(() => {
      setShowNotificationPopup(false);
    }, 5000);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col fixed top-20 left-0 h-[calc(100%-5rem)]">
        <div className="p-6 text-center border-b border-blue-700">
          <h1 className="text-xl font-bold">V-EDU.us</h1>
          <p className="text-sm">Learning Management System</p>
          {user === 'christiano' && <p className="text-sm mt-2">Welcome, Christiano!</p>}
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
            <h2 className="text-xl font-bold">Welcome back, {user === 'christiano' ? 'Christiano 👋' : 'Learner 👋'}</h2>
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
                <li>Welcome to V-EDU LMS, Christiano! Your personalized learning journey begins here.</li>
                <li>Stay tuned! One of our expert instructors will shortly assist you.</li>
                <li>Don't forget to check out your Dashboard for assignments and progress analytics.</li>
              </ul>
            </div>
          )}
        </header>

        {/* Dynamic Content */}
        <section className="mt-6">
          {activeSection === 'Dashboard' && user === 'christiano' && (
            <div>
              <h3 className="text-lg font-bold mb-4">Dashboard</h3>
              <p>Welcome to your personalized dashboard, Christiano!</p>
              <MyEnrollments />
            </div>
          )}
          {activeSection === 'Dashboard' && user !== 'christiano' && (
            <div>
              <h3 className="text-lg font-bold mb-4">Dashboard</h3>
              {/* Personalized content for Christiano */}
              {user === 'christiano' ? (
                <div>
                  <p>Welcome to your personalized dashboard, Christiano!</p>
                  {/* Add Christiano-specific content here */}
                </div>
              ) : (
                <div>
                  {/* Default content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* My Enrollments */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h3 className="text-lg font-bold mb-4">My Enrollments</h3>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-bold">Data Science & AI</h4>
                          <p className="text-sm text-gray-500">Progress: 0%</p>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2">Resume</button>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-bold">Cybersecurity & EthicalHacking</h4>
                          <p className="text-sm text-gray-500">Progress: 0%</p>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2">Resume</button>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-bold">DevOps & Cloud</h4>
                          <p className="text-sm text-gray-500">Progress: 0%</p>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2">Resume</button>
                        </div>
                      </div>
                    </div>

                    {/* Progress Analytics */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h3 className="text-lg font-bold mb-4">Progress Analytics</h3>
                      <p className="text-sm text-gray-500">Track your weekly study hours and module completion rates.</p>
                      {/* Placeholder for Chart */}
                      <div className="h-40 bg-gray-200 rounded-lg"></div>
                    </div>

                    {/* Upcoming Events */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h3 className="text-lg font-bold mb-4">Upcoming Events</h3>
                      <ul className="space-y-2">
                        <li className="text-sm text-gray-500">🔔 Live session: Data Science (Tomorrow, 10 AM)</li>
                        <li className="text-sm text-gray-500">📝 Assignment due: Cybersecurity (Next Monday)</li>
                        <li className="text-sm text-gray-500">📢 Announcement: DevOps workshop (Next Friday)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {activeSection === 'My Enrollments' && user === 'christiano' && (
            <MyEnrollments /> // Render the MyEnrollments component for Christiano
          )}
          {activeSection === 'My Enrollments' && user !== 'christiano' && (
            <div>
              <h3 className="text-lg font-bold mb-4">My Enrollments</h3>
              <p>Here are your enrolled courses:</p>
              <ul>
                <li>Data Science & AI</li>
                <li>Cybersecurity & Ethical Hacking</li>
                <li>DevOps & Cloud</li>
              </ul>
            </div>
          )}
          {activeSection === 'Progress Analytics' && (
            <div>
              
            </div>
          )}
          {activeSection === 'Assignments / Tasks' && (
            <div>
             
            </div>
          )}
          {activeSection === 'Live Sessions / Recordings' && (
            <div>
          
            </div>
          )}
          {activeSection === 'Ask Mentor (Doubt Forum)' && (
            <div>
              <h3 className="text-lg font-bold mb-4">Ask Mentor (Doubt Forum)</h3>
              <p>Post your doubts and get answers from mentors.</p>
            </div>
          )}
          {activeSection === 'Certificates' && (
            <div>
              <h3 className="text-lg font-bold mb-4">Certificates</h3>
              <p>Download your course completion certificates here when Unlocked .</p>
            </div>
          )}
          {activeSection === 'Progress Analytics' && <ProgressAnalytics />}
          {activeSection === 'Live Sessions / Recordings' && <LiveSessions />}
          {activeSection === 'Assignments / Tasks' && <AssignmentsTasks />}
          {activeSection === 'Ask Mentor (Doubt Forum)' && <AskMentor />}
        </section>
      </main>
    </div>
  );
};

export default LMSDashboard;