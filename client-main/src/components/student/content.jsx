import React from 'react';

export default function Content() {
  const advantages = [
    {
      title: "Immersive Online Learning",
      description:
        "Step into a live, interactive virtual classroom where experienced instructors walk you through job-ready tech skills using real-world projects and tools. Learn by doing, not just watching.",
    },
    {
      title: "Certifications That Employers Trust",
      description:
        "Our certificates are industry-aligned and built in collaboration with hiring experts. They reflect your practical abilities — not just course completion — and help you stand out in the job market.",
    },
    {
      title: "Learn from Working Professionals",
      description:
        "V-EDU’s mentor-led model connects you with real professionals from top companies. From technical reviews to career tips, our mentors help you gain practical insight and build confidence.",
    },
    {
      title: "Build Real Projects That Get Noticed",
      description:
        "Work on real-world, portfolio-worthy projects using tools from Google, Microsoft, AWS, and more. Your projects are reviewed and assessed by hiring-aligned evaluators.",
    },
    {
      title: "Career Support That Goes Beyond Courses",
      description:
        "We don’t stop at teaching. Get personalized resume reviews, LinkedIn makeovers, mock interviews, job alerts, and direct hiring partner access — all included.",
    },
    {
      title: "A Global, Growing Community",
      description:
        "Learners from 5+ countries have chosen V-EDU to upskill and transform their careers. Join a collaborative, remote-friendly environment that supports your success across borders.",
    },
  ];

  // Split advantages into two groups for a 2x3 layout
  const gridItems = [
    advantages.slice(0, 3), // First row
    advantages.slice(3, 6), // Second row
  ];

  return (
    <div className="w-screen py-16 bg-gray-100">
      <h1 className="text-center text-4xl font-bold mb-12">⚡ The V-EDU Advantage</h1>
      {gridItems.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16 mb-12">
          {row.map((advantage, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:-translate-y-2 hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-4">{advantage.title}</h2>
              <p className="text-gray-700">{advantage.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}