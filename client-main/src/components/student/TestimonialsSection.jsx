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
      image: assets.aisha,
    },
    {
      name: "Michael Zhang",
      role: "Cloud Solutions Architect @ IBM",
      feedback:
        "V-EDU’s Cloud & DevOps program covered everything from AWS to CI/CD pipelines. The flexible learning schedule allowed me to study while working full time — and the job support was phenomenal.",
      rating: 5,
      image: assets.michael,
    },
    {
      name: "Priya Menon",
      role: "Data Analyst @ Infosys",
      feedback:
        "I joined V-EDU with a non-tech background. The way they broke down complex topics like SQL and Python made learning easy. I now work as a data analyst at Infosys and I love it!",
      rating: 4,
      image: assets.priya,
    },
    {
      name: "Jamal Thompson",
      role: "DevOps Engineer @ Accenture",
      feedback:
        "V-EDU's hands-on labs and real-world projects were game changers. Learning tools like Docker, Kubernetes, and Jenkins gave me a massive edge. I landed a DevOps role just 2 weeks after completing the course.",
      rating: 5,
      image: assets.jamal,
    },
    {
      name: "Elena Garcia",
      role: "Cybersecurity Consultant @ PwC",
      feedback:
        "Coming from a legal background, I was intimidated by cybersecurity. V-EDU’s mentorship and clear roadmap made it approachable. The blue team labs and threat simulation exercises were especially useful.",
      rating: 4.5,
      image: assets.elena,
    },
    {
      name: "Ravi Patel",
      role: "Cloud Engineer @ Google Cloud Partner Network",
      feedback:
        "I was already working in IT support, but wanted to break into cloud. V-EDU’s AWS-focused track and certification prep helped me pivot into a cloud engineering role. Highly recommend their career support.",
      rating: 5,
      image: assets.ravi,
    },
    {
      name: "Sophia Nguyen",
      role: "Security Operations Center (SOC) Analyst @ Cisco",
      feedback:
        "I had zero IT experience before joining V-EDU. Their beginner-friendly Cybersecurity track, along with hands-on labs and weekly check-ins, helped me build confidence and land a SOC analyst role.",
      rating: 4,
      image: assets.sophia,
    },
    {
      name: "Daniel Okoro",
      role: "Site Reliability Engineer (SRE) @ Microsoft",
      feedback:
        "The DevOps & Cloud course at V-EDU was incredibly practical. Learning infrastructure as code and monitoring tools gave me the skills needed for my SRE role. The career coaching was top-notch.",
      rating: 5,
      image: assets.daniel,
    },
    {
      name: "Meera Srinivasan",
      role: "Business Intelligence Analyst @ TCS",
      feedback:
        "I always thought tech wasn't for me, but V-EDU proved otherwise. Their Data Science program helped me master Power BI, SQL, and storytelling with data. I landed my first analytics job within 3 months.",
      rating: 4.5,
      image: assets.meera,
    },
    {
      name: "Carlos Jimenez",
      role: "Cloud Support Associate @ Amazon Web Services (AWS)",
      feedback:
        "V-EDU’s cloud bootcamp gave me more than just knowledge — it gave me direction. The AWS modules, combined with resume workshops and mock interviews, made me stand out during hiring rounds.",
      rating: 5,
      image: assets.carlos,
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
                src={testimonial.image}
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
