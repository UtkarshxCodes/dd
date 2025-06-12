import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';

const CourseCard = ({ course, courseVideo }) => {
    const { currency } = useContext(AppContext);
    const navigate = useNavigate();

    // Utility function to calculate discounted price
    const calculateDiscountedPrice = (price, discount) => {
        return (price - (discount * price) / 100).toFixed(2);
    };

    return (
        <div className="course-card border border-gray-500/30 pb-6 overflow-hidden rounded-lg">
            <Link onClick={() => window.scrollTo(0, 0)} to={`/course/${course?._id}`} className="block">
                {/* Video Player */}
                {courseVideo ? (
                    <video
                        className="w-full h-64 object-contain" // Adjust height and prevent cropping
                        loop
                        autoPlay
                        muted
                    >
                        <source src={courseVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        className="w-full h-64 object-cover"
                        src={assets.fallback_image}
                        alt="Course thumbnail"
                    />
                )}
                <div className="p-3 text-left">
                    <h3 className="text-base font-semibold">{course?.courseTitle || 'Untitled Course'}</h3>
                    <p className="text-gray-500">David Watts</p>
                    <div className="flex items-center space-x-2">
                        <p>4.5</p>
                        <div className="flex">
                            {[...Array(4)].map((_, i) => (
                                <img
                                    key={i}
                                    className="w-3.5 h-3.5"
                                    src={assets.star}
                                    alt="star"
                                />
                            ))}
                            <img
                                className="w-3.5 h-3.5"
                                src={assets.star_half || assets.star}
                                alt="half star"
                            />
                        </div>
                    </div>
                    {course?.coursePrice && course?.discount ? (
                        <>
                            <p className="text-base font-semibold text-gray-800">
                                {currency}{calculateDiscountedPrice(course.coursePrice, course.discount)}
                            </p>
                            <p className="md:text-lg text-gray-500">
                                60% off {/* Explicitly display the discount */}
                            </p>
                        </>
                    ) : (
                        <p className="text-gray-500">Price not available</p>
                    )}
                    <div className="flex items-center gap-1">
                        <img src={assets.time_clock_icon} alt="Clock icon" />
                        <p>{course?.duration || '90'} minutes</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={assets.lesson_icon} alt="Lesson icon" />
                        <p>{course?.lessons || '18'} lessons</p>
                    </div>
                </div>
            </Link>
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        navigate(`/course/${course?._id}`);
                    }}
                    className="bg-blue-600 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-700 transition transform hover:scale-105"
                >
                    Enroll Now
                </button>
            </div>
        </div>
    );
};

export default CourseCard;