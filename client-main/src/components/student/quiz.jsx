import { useState } from 'react';
import { assets } from '../../assets/assets'; // Import assets
import './quiz.css'; // Import the CSS file

const questions = [
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
		question: 'What does AI stand for?',
		options: [
			'Artificial Intelligence',
			'Advanced Integration',
			'Automated Interface',
			'Applied Internet',
		],
		answer: 0,
	},
	{
		question: 'What is the core benefit of cloud computing?',
		options: ['Better graphics', 'Unlimited bandwidth', 'Scalability', 'Offline access'],
		answer: 2,
	},
	{
		question: 'Which type of database is best suited for handling large volumes of unstructured data?',
		options: ['Relational Database', 'Graph Database', 'NoSQL Database', 'Spreadsheet'],
		answer: 2,
	},
	{
		question: 'What is the primary function of an API?',
		options: ['Designing web pages', 'Connecting software components', 'Securing websites', 'Creating animations'],
		answer: 1,
	},
	{
		question: 'Which cloud service model provides virtual machines and storage?',
		options: ['SaaS', 'PaaS', 'IaaS', 'DaaS'],
		answer: 2,
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
		question: 'Which technology is used to deploy containerized applications?',
		options: ['Terraform', 'GitHub', 'Kubernetes', 'Jenkins'],
		answer: 2,
	},
	{
		question: 'What is the key advantage of using Git?',
		options: [
			'Creating video content',
			'Managing and tracking code changes',
			'Editing images',
			'Testing network speed',
		],
		answer: 1,
	},
];

export default function QuizSection() {
	const [started, setStarted] = useState(false);
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
		setCurrent(0);
		setSelected(null);
		setScore(0);
		setShowResult(false);
	};

	return (
		<div
			className={`relative flex items-center justify-center ${
				started ? 'backdrop-blur-md' : ''
			}`}
			style={{
				width: '100vw', // Full width of the viewport
				height: '100vh', // Full height of the viewport
				backgroundImage: `url(${assets.bgquiz})`,
				backgroundSize: 'cover', // Ensure the image covers the entire screen
				backgroundPosition: 'center', // Center the image
				backgroundRepeat: 'no-repeat', // Prevent repetition
			}}
		>
			<div
				className={`bg-gradient-to-b from-blue-500 to-blue-800 bg-opacity-80 text-white rounded-2xl p-6 w-full max-w-lg shadow-2xl ${
					!started ? 'animate-floating' : ''
				}`}
			>
				{!started ? (
					<div className="text-center space-y-4">
						<h2 className="text-3xl font-bold">Think you know AI, Cloud & Data? Let's find out!</h2>
						<button
							onClick={() => setStarted(true)}
							className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-full shadow-lg hover:bg-blue-100 transition"
						>
							Start The Quiz
						</button>
					</div>
				) : showResult ? (
					<div className="text-center">
						<h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
						<p className="text-xl">
							Your Score: {((score / questions.length) * 100).toFixed(2)}% {/* Limit score to 2 decimal places */}
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
						{/* Back Button */}
						<div className="mt-6 text-center">
							<button
								onClick={() => setStarted(false)}
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
