import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

const TestimonialsSection = () => {
  const updatedTestimonials = [
    {
      name: "Aisha Rodriguez",
      role: "Cybersecurity Analyst @ Deloitte",
      feedback:
        "As someone who transitioned from finance into cybersecurity, V-EDU’s structured bootcamp and mentorship made all the difference. The mock interviews and resume help really boosted my chances.",
      rating: 5,
    },
    {
      name: "Michael Zhang",
      role: "Cloud Solutions Architect @ IBM",
      feedback:
        "V-EDU’s Cloud & DevOps program covered everything from AWS to CI/CD pipelines. The flexible learning schedule allowed me to study while working full time — and the job support was phenomenal.",
      rating: 5,
    },
    {
      name: "Priya Menon",
      role: "Data Analyst @ Infosys",
      feedback:
        "I joined V-EDU with a non-tech background. The way they broke down complex topics like SQL and Python made learning easy. I now work as a data analyst at Infosys and I love it!",
      rating: 5,
    },
  ];

  return (
    <div className="pb-14 px-8 md:px-0">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-2">Testimonials</h2>
      <p className="md:text-base text-gray-500 mt-3 text-center">
        Hear from our learners as they share their journeys of transformation, success, and how our <br /> platform has made a difference in their lives.
      </p>
      <div className="grid grid-cols-auto gap-8 mt-14">
        {updatedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden"
          >
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10">
              <img
                className="h-12 w-12 rounded-full"
                src={dummyTestimonial[index]?.image || assets.profilePlaceholder} // Keep current photos
                alt={testimonial.name}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-800/80">{testimonial.role}</p>
              </div>
            </div>
            <div className="p-5 pb-7">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <img
                    className="h-5"
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt="star"
                  />
                ))}
              </div>
              <p className="text-gray-500 mt-5">{testimonial.feedback}</p>
            </div>
            <a href="#" className="text-blue-500 underline px-5">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
