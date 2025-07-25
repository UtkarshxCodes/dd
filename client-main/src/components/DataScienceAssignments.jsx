import React, { useState } from 'react';

const DataScienceAssignments = ({ userEmail }) => {
  // Allow assignments for Lucretia, Veemal, and Mushfiq
  const isLucretia = userEmail === 'lucretiahenry@rocketmail.com';
  const isVeemal = userEmail === 'veemal16@gmail.com';
  const isMushfiq = userEmail === 'mushfiqrhmn1@gmail.com';

  const assignments = [
    {
      title: '🧩 Assignment 1: Introduction to Data Science',
      details: [
        'Define Data Science and its real-world applications.',
        'Differentiate between Data Science, AI, and Machine Learning.',
        'List and describe the steps of a typical Data Science workflow.',
        'What are structured and unstructured data? Provide examples.',
        'Mention three industries using Data Science extensively.',
        'Explain the role of a Data Scientist.',
      ],
    },
    {
      title: '📊 Assignment 2: Statistics & Probability for Data Analysis',
      details: [
        'Define mean, median, and mode with examples.',
        'What is the difference between standard deviation and variance?',
        'Explain probability distribution with at least two types.',
        'How is correlation different from causation?',
        "Solve: If a coin is tossed 3 times, what's the probability of getting exactly two heads?",
        'Describe the importance of sampling in data analysis.',
      ],
    },
    {
      title: '🐍 Assignment 3: Python Programming & Data Handling',
      details: [
        'Write a Python program to read a CSV file and display the first 5 rows.',
        'What are Pandas Series and DataFrames?',
        'Demonstrate missing data handling using Pandas.',
        'Explain the use of groupby() with an example.',
        'What are NumPy arrays and why are they important in data science?',
        'Differentiate between list, tuple, and dictionary in Python.',
      ],
    },
    {
      title: '📈 Assignment 4: Exploratory Data Analysis & Visualization',
      details: [
        'Describe the purpose of Exploratory Data Analysis (EDA).',
        'Generate a boxplot using Matplotlib or Seaborn and interpret it.',
        'What are outliers and how do you detect them?',
        'Explain correlation heatmaps and their usage.',
        'Create a histogram to show the distribution of numerical data.',
        'List any two real-life datasets and describe how you would analyze them.',
      ],
    },
    {
      title: '🤖 Assignment 5: Machine Learning Algorithms',
      details: [
        'What is the difference between supervised and unsupervised learning?',
        'Describe any 3 commonly used ML algorithms.',
        'What is model overfitting and how can it be prevented?',
        'Explain the concept of train-test split with code.',
        'Implement a Linear Regression model using scikit-learn.',
        'Define accuracy, precision, recall, and F1-score.',
      ],
    },
    {
      title: '🧠 Assignment 6: AI Concepts & Deep Learning Basics',
      details: [
        'Define Artificial Intelligence and Deep Learning.',
        'Compare neural networks with traditional machine learning models.',
        'What is an activation function? Name any two.',
        'Explain the concept of forward and backpropagation.',
        'Describe overfitting in deep learning and how dropout helps.',
        'What is the role of epochs and batch size in training?',
      ],
    },
    {
      title: '🛠️ Assignment 7: Model Deployment & Evaluation',
      details: [
        'What is model deployment and why is it important?',
        'Compare Flask and Streamlit for model deployment.',
        'Write a basic Flask app that returns predictions.',
        'How do you monitor model performance post-deployment?',
        'Explain the purpose of confusion matrix.',
        'What is A/B testing in ML and how is it performed?',
      ],
    },
    {
      title: '💼 Assignment 8: Industry Use Cases & Case Studies',
      details: [
        'Pick a domain (e.g. healthcare, finance) and describe a DS use case.',
        'What data challenges arise in real-world business settings?',
        'How would you solve class imbalance in a fraud detection model?',
        "Describe a machine learning pipeline in a company you've read about.",
        'What is data drift and how can it impact predictions?',
        'Research and summarize a Kaggle competition case study.',
      ],
    },
    {
      title: '🧪 Assignment 9: Final Capstone Project Proposal',
      details: [
        'Define the objective of your project clearly.',
        'Identify your dataset and its source.',
        'Outline your preprocessing and EDA steps.',
        'Specify which models you plan to use and why.',
        'Describe your success metrics (e.g., accuracy, RMSE).',
        'How would you present your findings to a non-technical audience?',
      ],
    },
  ];

  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const handleAssignmentClick = (assignment) => {
    setSelectedAssignment(assignment);
  };

  const closePopup = () => {
    setSelectedAssignment(null);
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Assignments / Tasks</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assignments.map((assignment, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded shadow-md cursor-pointer hover:bg-gray-100"
            onClick={() => handleAssignmentClick(assignment)}
          >
            <h4 className="font-semibold">{assignment.title}</h4>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedAssignment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-3/4 max-h-[80vh] overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-red-600 font-bold text-lg"
              onClick={closePopup}
            >
              ✖
            </button>
            <h3 className="text-xl font-bold mb-4">{selectedAssignment.title}</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {selectedAssignment.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            {/* Bottom Text */}
            <p className="text-sm text-gray-600 mt-6 text-right">
              Complete assignments weekly and send the file through mail - <strong>Support@v-edu.us</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataScienceAssignments;