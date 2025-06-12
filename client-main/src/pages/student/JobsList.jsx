import React from 'react';
import './JobsList.css';

const jobData = [
  {
    company: "NVIDIA",
    location: "USA",
    role: "AI Research Scientist",
    description: "Work on cutting-edge artificial intelligence research projects focused on deep learning, computer vision, and model optimization.",
    positions: "5 Positions",
    type: "Full Time",
    salary: "$160,000/Year",
    hourly: "$76.92/hr",
    link: "https://www.nvidia.com" // NVIDIA's official website
  },
  {
    company: "IBM",
    location: "USA",
    role: "Cloud Solutions Architect",
    description: "Design, implement, and manage cloud-based systems and services with a focus on scalable architecture and performance.",
    positions: "8 Positions",
    type: "Full Time",
    salary: "$142,000/Year",
    hourly: "$68.27/hr",
    link: "https://www.ibm.com" // IBM's official website
  },
  {
    company: "CrowdStrike",
    location: "Remote - USA",
    role: "Cybersecurity Analyst",
    description: "Monitor, analyze, and respond to cybersecurity threats using state-of-the-art tools and incident response practices.",
    positions: "10 Positions",
    type: "Full Time",
    salary: "$120,000/Year",
    hourly: "$57.69/hr",
    link: "https://www.crowdstrike.com" // CrowdStrike's official website
  },
  {
    company: "Meta",
    location: "USA",
    role: "Data Scientist",
    description: "Analyze large datasets to generate business insights and build predictive models to support data-driven decisions.",
    positions: "7 Positions",
    type: "Full Time",
    salary: "$155,000/Year",
    hourly: "$74.52/hr",
    link: "https://www.meta.com" // Meta's official website
  },
  {
    company: "Oracle",
    location: "USA",
    role: "Cloud DevOps Engineer",
    description: "Build and automate infrastructure for cloud platforms with a focus on continuous integration and deployment pipelines.",
    positions: "4 Positions",
    type: "Full Time",
    salary: "$138,000/Year",
    hourly: "$66.35/hr",
    link: "https://www.oracle.com" // Oracle's official website
  },
  {
    company: "Cisco",
    location: "Canada (Remote Friendly)",
    role: "Network Security Engineer",
    description: "Design and implement secure network infrastructures and provide real-time monitoring of potential cyber threats.",
    positions: "6 Positions",
    type: "Full Time",
    salary: "$110,000/Year",
    hourly: "$52.88/hr",
    link: "https://www.cisco.com" // Cisco's official website
  },
  {
    company: "Google DeepMind",
    location: "USA",
    role: "AI Research Engineer",
    description: "Contribute to large-scale AI systems research, focusing on reinforcement learning, neural architecture search, and ethical AI deployment strategies.",
    positions: "6 Positions",
    type: "Full Time",
    salary: "$165,000/Year",
    hourly: "$79.33/hr",
    link: "https://www.deepmind.com" // Google DeepMind's official website
  },
  {
    company: "Amazon Web Services (AWS)",
    location: "USA",
    role: "Cloud Infrastructure Engineer",
    description: "Develop and maintain cloud-native infrastructure using Kubernetes, Terraform, and serverless technologies to support high-availability environments.",
    positions: "9 Positions",
    type: "Full Time",
    salary: "$148,000/Year",
    hourly: "$71.15/hr",
    link: "https://aws.amazon.com" // AWS's official website
  },
  {
    company: "Netflix",
    location: "Remote - USA",
    role: "Senior Data Scientist",
    description: "Drive innovation using predictive analytics and recommendation engines to personalize the user experience across millions of subscribers.",
    positions: "5 Positions",
    type: "Full Time",
    salary: "$158,000/Year",
    hourly: "$75.96/hr",
    link: "https://www.netflix.com" // Netflix's official website
  },
  {
    company: "Palo Alto Networks",
    location: "USA",
    role: "Cybersecurity Threat Analyst",
    description: "Identify, analyze, and neutralize sophisticated cyber threats. Collaborate with the threat intelligence team to develop advanced detection strategies.",
    positions: "7 Positions",
    type: "Full Time",
    salary: "$125,000/Year",
    hourly: "$60.10/hr",
    link: "https://www.paloaltonetworks.com" // Palo Alto Networks' official website
  },
  {
    company: "Microsoft Azure",
    location: "USA",
    role: "Cloud Security Architect",
    description: "Design secure, scalable cloud infrastructure by implementing industry-leading security frameworks and best practices across Azure environments.",
    positions: "4 Positions",
    type: "Full Time",
    salary: "$152,000/Year",
    hourly: "$73.08/hr",
    link: "https://azure.microsoft.com" // Microsoft Azure's official website
  },
  {
    company: "Tesla AI",
    location: "USA",
    role: "Machine Learning Engineer",
    description: "Build real-time machine learning models to power autonomous driving systems. Focus on perception, localization, and predictive planning algorithms.",
    positions: "3 Positions",
    type: "Full Time",
    salary: "$162,000/Year",
    hourly: "$77.88/hr",
    link: "https://www.tesla.com" // Tesla's official website
  },
  {
    company: "FireEye (Trellix)",
    location: "Remote - USA",
    role: "Incident Response Specialist",
    description: "Lead cyber incident response engagements, perform forensic investigations, and guide remediation strategies for enterprise clients.",
    positions: "6 Positions",
    type: "Full Time",
    salary: "$130,000/Year",
    hourly: "$62.50/hr",
    link: "https://www.fireeye.com" // FireEye's official website
  }
];

const JobsList = () => {
  return (
    <section className="jobs-list-section">
      <div className="jobs-list-container">
        <h2 className="jobs-list-title">All Job Openings</h2>
        <div className="jobs-list-vertical">
          {jobData.map((job, index) => (
            <div key={index} className="jobs-list-card">
              <div className="jobs-list-card-main">
                <h3>{job.role} <span className="company">@ {job.company}</span></h3>
                <p className="location">{job.location} — {job.type}</p>
                <p className="desc">{job.description}</p>
                <div className="jobs-list-meta">
                  <span>{job.positions}</span>
                  <span className="salary">💰 {job.salary}</span>
                  <span className="hourly">⏱ {job.hourly}</span>
                </div>
              </div>
              <button
                className="apply-btn"
                onClick={() => window.open(job.link, '_blank')} // Open the company's website in a new tab
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsList;