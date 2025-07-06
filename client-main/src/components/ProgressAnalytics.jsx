import React from 'react';
import { PieChart, Pie, Cell, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';

const ProgressAnalytics = () => {
  const pieData = [
    { name: 'Completed', value: 10 },
    { name: 'In Progress', value: 11 },
    { name: 'Not Started', value: 79},
  ];

  const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

  const lineData = [
    { week: 'Week 1', hours: 1},
    { week: 'Week 2', hours: 1 },
    { week: 'Week 3', hours: 1 },
    { week: 'Week 4', hours: 0.55 },
    { week: 'Week 5', hours: 0 },
  ];

  const barData = [
    { assignment: 'Assignment 1', completion: 0 },
    { assignment: 'Assignment 2', completion: 0 },
    { assignment: 'Assignment 3', completion: 0 },
    { assignment: 'Assignment 4', completion: 0 },
    { assignment: 'Assignment 5', completion: 0 },
    { assignment: 'Assignment 6', completion: 0 },
    { assignment: 'Assignment 7', completion: 0 },
    { assignment: 'Assignment 8', completion: 0 },
    { assignment: 'Assignment 9', completion: 0 },
  ];

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Progress Analytics</h3>
      <p className="mb-6">Track your weekly study hours and module completion rates.</p>
      <div className="flex gap-8">
        {/* Pie Chart */}
        <div>
          <PieChart width={250} height={250}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>

        {/* Line Chart */}
        <div>
          <LineChart width={400} height={250} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="hours" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </div>

        {/* Bar Chart */}
        <div>
          <BarChart width={400} height={250} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="assignment" tick={{ fontSize: 10 }} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="completion" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default ProgressAnalytics;