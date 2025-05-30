import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './CoursesSection.css'; // Import the CSS file

const CoursesSection = ({ onEnroll }) => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="relative">
      {/* Content Section */}
      <div className="relative py-16 md:px-40 px-8 text-center bg-cover bg-center overflow-hidden z-20">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-blue-700">
          Learn from the best
        </h2>

        {/* Subheading */}
        <p className="md:text-base text-sm text-black mt-3 max-w-3xl mx-auto">
          Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.
        </p>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center px-4 md:px-0 md:my-16 my-10">
          {allCourses.slice(0, 3).map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
              style={{ maxWidth: '350px', margin: '0 auto' }}
            >
              <CourseCard
                course={course}
                onEnroll={onEnroll} // Pass down the handler
              />
            </div>
          ))}
        </div>

        {/* Show All Courses Button */}
        <div className="flex justify-end mt-8">
          <Link
            to={'/course-list'}
            onClick={() => scrollTo(0, 0)}
            className="text-blue-700 border border-blue-700 px-10 py-3 rounded hover:bg-blue-700 hover:text-white transition inline-block"
          >
            Show all courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
