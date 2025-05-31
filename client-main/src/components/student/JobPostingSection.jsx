import React from 'react';
import { Link } from 'react-router-dom';
import './JobPostingSection.css';

const jobs = [
	{
		company: 'NVIDIA',
		location: 'USA',
		role: 'AI Research Scientist',
		description:
			'Work on cutting-edge artificial intelligence research projects focused on deep learning, computer vision, and model optimization.',
		positions: '5 Positions',
		type: 'Full Time',
		salary: '$160,000/Year ($76.92/hr)',
		link: '/jobs/nvidia-ai-research-scientist',
	},
	{
		company: 'Tesla',
		location: 'USA',
		role: 'Embedded Systems Engineer',
		description:
			'Design and develop embedded software for automotive control systems.',
		positions: '4 Positions',
		type: 'Full Time',
		salary: '$142,000/year',
		link: '/jobs/tesla-embedded-systems-engineer',
	},
	{
		company: 'Stripe',
		location: 'Remote',
		role: 'Software Engineer, Payments',
		description:
			'Build and maintain systems that power global online payments.',
		positions: '5 Positions',
		type: 'Full Time',
		salary: '$150,000/year',
		link: '/jobs/stripe-software-engineer-payments',
	},
	{
		company: 'Red Hat',
		location: 'USA',
		role: 'Automation Engineer',
		description:
			'Develop automation solutions to streamline infrastructure operations.',
		positions: '3 Positions',
		type: 'Full Time',
		salary: '$132,000/year',
		link: '/jobs/red-hat-automation-engineer',
	},
	{
		company: 'Atlassian',
		location: 'Remote',
		role: 'Site Reliability Engineer',
		description:
			'Ensure reliability and scalability of Atlassian’s services and systems.',
		positions: '4 Positions',
		type: 'Full Time',
		salary: '$144,000/year',
		link: '/jobs/atlassian-site-reliability-engineer',
	},
	{
		company: 'Shopify',
		location: 'Canada (Remote)',
		role: 'Product Data Analyst',
		description:
			'Analyze product metrics to support strategic business decisions.',
		positions: '3 Positions',
		type: 'Full Time',
		salary: '$138,000/year',
		link: '/jobs/shopify-product-data-analyst',
	},
	{
		company: 'Snap Inc.',
		location: 'USA',
		role: 'Android Developer',
		description:
			'Build high-performance features for Snapchat’s Android app.',
		positions: '2 Positions',
		type: 'Full Time',
		salary: '$137,000/year',
		link: '/jobs/snap-android-developer',
	},
	{
		company: 'Twilio',
		location: 'Remote',
		role: 'DevOps Engineer',
		description:
			'Maintain CI/CD pipelines and automate cloud infrastructure tasks.',
		positions: '4 Positions',
		type: 'Full Time',
		salary: '$139,000/year',
		link: '/jobs/twilio-devops-engineer',
	},
	{
		company: 'Intel',
		location: 'USA',
		role: 'Systems Software Engineer',
		description:
			'Develop low-level software to support next-gen hardware.',
		positions: '5 Positions',
		type: 'Full Time',
		salary: '$141,000/year',
		link: '/jobs/intel-systems-software-engineer',
	},
	{
		company: 'Asana',
		location: 'USA',
		role: 'Engineering Manager',
		description:
			'Lead and mentor a team of engineers to deliver scalable products.',
		positions: '2 Positions',
		type: 'Full Time',
		salary: '$160,000/year',
		link: '/jobs/asana-engineering-manager',
	},
	{
		company: 'GitLab',
		location: 'Remote',
		role: 'Technical Program Manager',
		description:
			'Coordinate cross-functional initiatives across engineering and product teams.',
		positions: '3 Positions',
		type: 'Full Time',
		salary: '$145,000/year',
		link: '/jobs/gitlab-technical-program-manager',
	},
	{
		company: 'Amazon',
		location: 'USA',
		role: 'Cloud Solutions Engineer',
		description:
			'Design and deploy scalable cloud solutions for enterprise clients.',
		positions: '6 Positions',
		type: 'Full Time',
		salary: '$150,000/year',
		link: '/jobs/amazon-cloud-solutions-engineer',
	},
	{
		company: 'Google',
		location: 'USA',
		role: 'AI Product Manager',
		description:
			'Lead the development of AI-driven products and features.',
		positions: '3 Positions',
		type: 'Full Time',
		salary: '$155,000/year',
		link: '/jobs/google-ai-product-manager',
	},
	{
		company: 'Facebook',
		location: 'USA',
		role: 'Machine Learning Engineer',
		description:
			'Develop machine learning models to improve user engagement.',
		positions: '4 Positions',
		type: 'Full Time',
		salary: '$145,000/year',
		link: '/jobs/facebook-machine-learning-engineer',
	},
	{
		company: 'Netflix',
		location: 'USA',
		role: 'Data Scientist',
		description:
			'Analyze data to optimize content recommendations and user experience.',
		positions: '5 Positions',
		type: 'Full Time',
		salary: '$150,000/year',
		link: '/jobs/netflix-data-scientist',
	},
	{
		company: 'Spotify',
		location: 'USA',
		role: 'Data Engineer',
		description:
			'Build and maintain data pipelines for analytics and reporting.',
		positions: '3 Positions',
		type: 'Full Time',
		salary: '$145,000/year',
		link: '/jobs/spotify-data-engineer',
	},
	{
		company: 'Airbnb',
		location: 'USA',
		role: 'Machine Learning Engineer',
		description:
			'Develop machine learning models to enhance user experience.',
		positions: '2 Positions',
		type: 'Full Time',
		salary: '$150,000/year',
		link: '/jobs/airbnb-machine-learning-engineer',
	},
	{
		company: 'Adobe',
		location: 'USA',
		role: 'Frontend Engineer',
		description:
			'Implement user interfaces with a focus on performance and usability.',
		positions: '4 Positions',
		type: 'Full Time',
		salary: '$135,000/year',
		link: '/jobs/adobe-frontend-engineer',
	},
	{
		company: 'Slack',
		location: 'USA',
		role: 'Backend Engineer',
		description:
			'Build scalable backend services to support Slack\'s platform.',
		positions: '3 Positions',
		type: 'Full Time',
		salary: '$138,000/year',
		link: '/jobs/slack-backend-engineer',
	},
	{
		company: 'Zoom',
		location: 'USA',
		role: 'Software Engineer',
		description:
			'Develop features and improvements for Zoom\'s communication platform.',
		positions: '5 Positions',
		type: 'Full Time',
		salary: '$142,000/year',
		link: '/jobs/zoom-software-engineer',
	},
	{
		company: 'LinkedIn',
		location: 'USA',
		role: 'Business Intelligence Analyst',
		description:
			'Provide data-driven insights to support business decisions.',
		positions: '4 Positions',
		type: 'Full Time',
		salary: '$135,000/year',
		link: '/jobs/linkedin-business-intelligence-analyst',
	},
	{
		company: 'Dropbox',
		location: 'Remote',
		role: 'Cloud Infrastructure Engineer',
		description:
			'Design and maintain scalable cloud infrastructure for Dropbox services.',
		positions: '3 Positions',
		type: 'Full Time',
		salary: '$140,000/year',
		link: '/jobs/dropbox-cloud-infrastructure-engineer',
	},
	{
		company: 'Pinterest',
		location: 'USA',
		role: 'Data Visualization Specialist',
		description:
			'Create interactive visualizations to help teams understand complex data.',
		positions: '2 Positions',
		type: 'Full Time',
		salary: '$135,000/year',
		link: '/jobs/pinterest-data-visualization-specialist',
	},
	{
		company: 'Uber',
		location: 'USA',
		role: 'Mobile App Developer',
		description:
			'Develop and optimize Uber’s mobile applications for iOS and Android.',
		positions: '4 Positions',
		type: 'Full Time',
		salary: '$145,000/year',
		link: '/jobs/uber-mobile-app-developer',
	},
	{
		company: 'Twitter',
		location: 'Remote',
		role: 'Platform Engineer',
		description:
			'Build and maintain scalable systems for Twitter’s platform.',
		positions: '3 Positions',
		type: 'Full Time',
		salary: '$140,000/year',
		link: '/jobs/twitter-platform-engineer',
	},
	{
		company: 'Salesforce',
		location: 'USA',
		role: 'CRM Solutions Architect',
		description:
			'Design and implement CRM solutions for enterprise clients.',
		positions: '5 Positions',
		type: 'Full Time',
		salary: '$150,000/year',
		link: '/jobs/salesforce-crm-solutions-architect',
	},
];

const JobPostingSection = () => (
	<section className="section__container job__container" id="job">
		<h2 className="job-heading" data-text="Latest & Top Job Openings">
			Latest & Top Job Openings
		</h2>
		<p className="job-subheading">
			Discover exciting new opportunities in Data Science, AI, Cloud,
			Cybersecurity, and more — across top companies worldwide.
		</p>
		<div className="job__grid">
			{jobs.map((job, idx) => (
				<Link
					to="/jobs"
					key={idx}
					className="job__card block hover:shadow-lg transition"
				>
					<div className="job__card__header-nologo">
						<div>
							<h5 className="job__company">{job.company}</h5>
							<h6 className="job__location">{job.location}</h6>
						</div>
					</div>
					<h4 className="job__role">{job.role}</h4>
					<p className="job__desc">{job.description}</p>
					<div className="job__card__footer">
						<span>{job.positions}</span>
						<span>{job.type}</span>
						<span>{job.salary}</span>
					</div>
				</Link>
			))}
		</div>
	</section>
);

export default JobPostingSection;