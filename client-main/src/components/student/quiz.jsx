import { useState } from 'react';
import { assets } from '../../assets/assets'; // Background image
import './quiz.css';

const allQuestions = {
	DataScience: [
		{
			question: 'What is the main purpose of a data warehouse?',
			options: [
				'Data visualization',
				'Data storage for analytics',
				'Running web servers',
				'Building mobile apps',
			],
			answer: 1,
		},
		{
			question: 'Which algorithm is most commonly used in supervised machine learning?',
			options: ['K-Means', 'Linear Regression', 'Apriori', 'PCA'],
			answer: 1,
		},
		{
			question: 'Which programming language is widely used for data science?',
			options: ['C++', 'Python', 'Java', 'Swift'],
			answer: 1,
		},
		{
			question: 'What does a confusion matrix help evaluate?',
			options: [
				'Database performance',
				'Model accuracy for classification tasks',
				'Website load times',
				'Neural network structure',
			],
			answer: 1,
		},
		{
			question: 'What is overfitting in machine learning?',
			options: [
				'When a model performs well on new data',
				'When a model is too simple',
				'When a model memorizes the training data',
				'When data is not normalized',
			],
			answer: 2,
		},
		{
			question: 'Which library is commonly used for data manipulation in Python?',
			options: ['NumPy', 'TensorFlow', 'Pandas', 'Scikit-learn'],
			answer: 2,
		},
		{
			question: 'What does PCA stand for in data analysis?',
			options: [
				'Principal Component Analysis',
				'Primary Component Arrangement',
				'Predictive Clustering Algorithm',
				'Principal Cluster Adjustment',
			],
			answer: 0,
		},
		{
			question: 'Which plot is most commonly used to show the distribution of a dataset?',
			options: ['Bar Plot', 'Scatter Plot', 'Histogram', 'Line Chart'],
			answer: 2,
		},
		{
			question: 'What is the role of feature scaling in machine learning?',
			options: [
				'To reduce model size',
				'To convert data into images',
				'To normalize input features for better training',
				'To reduce overfitting',
			],
			answer: 2,
		},
		{
			question: 'What does the term "Big Data" refer to?',
			options: [
				'Data that is stored in spreadsheets',
				'Small sets of structured data',
				'Extremely large and complex data sets',
				'Data used in video games',
			],
			answer: 2,
		},
	],
	CyberSecurity: [
		{
			question: 'What is the primary function of a firewall?',
			options: ['Encrypt data', 'Prevent unauthorized access', 'Backup files', 'Increase bandwidth'],
			answer: 1,
		},
		{
			question: 'Which of these is a common cyber threat?',
			options: ['Phishing', 'Caching', 'Encoding', 'Indexing'],
			answer: 0,
		},
		{
			question: 'What does “malware” stand for?',
			options: ['Major alert warning', 'Manual alert response', 'Malicious software', 'Machine alert software'],
			answer: 2,
		},
		{
			question: 'Which of these is used to secure communication over a network?',
			options: ['SSL/TLS', 'HTML', 'HTTP', 'SMTP'],
			answer: 0,
		},
		{
			question: 'What is the strongest type of password?',
			options: ['12345678', 'Your name', 'Random string of letters, numbers, and symbols', 'Date of birth'],
			answer: 2,
		},
		{
			question: 'Which of the following is a method of social engineering?',
			options: ['Brute force attack', 'Phishing email', 'Firewall breach', 'Code injection'],
			answer: 1,
		},
		{
			question: 'Which protocol is commonly used for secure remote login?',
			options: ['FTP', 'SSH', 'Telnet', 'HTTP'],
			answer: 1,
		},
		{
			question: 'Which of these best defines a DDoS attack?',
			options: ['Accessing files illegally', 'Overloading a system with traffic', 'Data encryption by ransomware', 'Unauthorized access to a network'],
			answer: 1,
		},
		{
			question: 'What is two-factor authentication (2FA)?',
			options: ['A type of firewall', 'An encryption technique', 'A security process using two different types of credentials', 'A virus scanner'],
			answer: 2,
		},
		{
			question: 'What does VPN stand for?',
			options: ['Virtual Private Network', 'Verified Protocol Network', 'Virtual Proxy Node', 'Very Private Net'],
			answer: 0,
		},
	],
	CloudComputing: [
		{
			question: 'What is the core benefit of cloud computing?',
			options: ['Better graphics', 'Unlimited bandwidth', 'Scalability', 'Offline access'],
			answer: 2,
		},
		{
			question: 'Which cloud service model provides virtual machines and storage?',
			options: ['SaaS', 'PaaS', 'IaaS', 'DaaS'],
			answer: 2,
		},
		{
			question: 'What does SaaS stand for?',
			options: ['System as a Service', 'Software as a Service', 'Storage as a Service', 'Solution as a Service'],
			answer: 1,
		},
		{
			question: 'Which of the following is a deployment model in cloud computing?',
			options: ['Public cloud', 'Dedicated cloud', 'Open cloud', 'Local cloud'],
			answer: 0,
		},
		{
			question: 'Which company is a major provider of cloud services?',
			options: ['Oracle', 'IBM', 'Amazon Web Services', 'Dell'],
			answer: 2,
		},
		{
			question: 'Which cloud model offers the most control over resources?',
			options: ['SaaS', 'PaaS', 'IaaS', 'BaaS'],
			answer: 2,
		},
		{
			question: 'What is elasticity in cloud computing?',
			options: ['The speed of the network', 'The ability to scale resources up or down', 'Storage durability', 'Availability of backups'],
			answer: 1,
		},
		{
			question: 'What is the benefit of multi-tenancy in cloud environments?',
			options: ['Better graphics', 'Resource isolation', 'Cost efficiency and shared resources', 'Offline functionality'],
			answer: 2,
		},
		{
			question: 'Which of these is a key concern in cloud computing?',
			options: ['Game development', 'UI design', 'Data security', 'Printing speed'],
			answer: 2,
		},
		{
			question: 'What does the term “cloud bursting” refer to?',
			options: ['Downloading data from the cloud', 'Temporary offline access', 'Switching between cloud providers', 'Scaling to public cloud when private resources are exceeded'],
			answer: 3,
		},
	],
};

export default function QuizSection() {
	const [started, setStarted] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [questions, setQuestions] = useState([]);
	const [current, setCurrent] = useState(0);
	const [selected, setSelected] = useState(null);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);

	const handleOptionClick = (i) => {
		if (selected !== null) return;
		setSelected(i);
		if (i === questions[current].answer) setScore(score + 1);
		setTimeout(() => {
			if (current + 1 < questions.length) {
				setCurrent(current + 1);
				setSelected(null);
			} else {
				setShowResult(true);
			}
		}, 1000);
	};

	const resetQuiz = () => {
		setStarted(false);
		setSelectedCategory(null);
		setQuestions([]);
		setCurrent(0);
		setSelected(null);
		setScore(0);
		setShowResult(false);
	};

	return (
		<div
			className={`relative flex items-center justify-center ${started ? 'backdrop-blur-md' : ''}`}
			style={{
				width: '100vw',
				height: '100vh',
				backgroundImage: `url(${assets.bgquiz})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div
				className={`bg-gradient-to-b from-blue-500 to-blue-800 bg-opacity-80 text-white rounded-2xl p-6 w-full max-w-lg shadow-2xl ${
					!started ? 'animate-floating' : ''
				}`}
			>
				{/* Category selection UI */}
				{!started && !selectedCategory ? (
					<div className="text-center space-y-4">
						<h2 className="text-3xl font-bold">Think You're Tech-Savvy? Let's find out!</h2>
						<button
							onClick={() => setStarted(true)}
							className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-full shadow-lg hover:bg-blue-100 transition"
						>
							Start The Quiz
						</button>
					</div>
				) : started && !selectedCategory ? (
					<div className="text-center space-y-4">
						<h3 className="text-xl font-semibold mb-4">Choose a Category</h3>
						<div className="flex flex-col gap-3">
							{Object.keys(allQuestions).map((cat) => (
								<button
									key={cat}
									onClick={() => {
										setSelectedCategory(cat);
										setQuestions(allQuestions[cat]);
									}}
									className="px-6 py-2 bg-white text-blue-800 font-semibold rounded-full hover:bg-blue-100"
								>
									{cat.replace(/([A-Z])/g, ' $1').trim()}
								</button>
							))}
						</div>
					</div>
				) : showResult ? (
					<div className="text-center">
						<h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
						<p className="text-xl">
							Your Score: {((score / questions.length) * 100).toFixed(2)}%
							{((score / questions.length) * 100) > 80 ? ' 🏆' : ''}
						</p>
						<button
							onClick={resetQuiz}
							className="mt-6 px-6 py-2 bg-white text-blue-800 font-semibold rounded-full hover:bg-blue-100"
						>
							Retry
						</button>
					</div>
				) : (
					<div>
						<h3 className="text-xl font-semibold mb-4">{questions[current].question}</h3>
						<div className="space-y-2">
							{questions[current].options.map((opt, i) => (
								<button
									key={i}
									onClick={() => handleOptionClick(i)}
									className={`block w-full text-left px-4 py-2 rounded-lg border transition font-medium ${
										selected !== null
											? i === questions[current].answer
												? 'bg-green-500 border-green-700'
												: i === selected
												? 'bg-red-500 border-red-700'
												: 'bg-white text-blue-900'
											: 'bg-white text-blue-900 hover:bg-blue-100'
									}`}
								>
									{opt}
								</button>
							))}
						</div>
						<div className="mt-6 text-center">
							<button
								onClick={resetQuiz}
								className="px-6 py-2 bg-white text-blue-800 font-semibold rounded-full hover:bg-blue-100"
							>
								Back
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
