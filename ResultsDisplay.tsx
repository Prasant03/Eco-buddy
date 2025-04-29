import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ResultsDisplayProps {
  transportationEmissions: number;
  waterEmissions: number;
  totalEmissions: number;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  transportationEmissions,
  waterEmissions,
  totalEmissions,
}) => {
  const data = {
    labels: ['Transportation', 'Water Usage'],
    datasets: [
      {
        data: [transportationEmissions, waterEmissions],
        backgroundColor: ['#4CAF50', '#2196F3'],
        borderColor: ['#388E3C', '#1976D2'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Your Carbon Footprint Results</h2>
      
      <div className="mb-6">
        <div className="text-3xl font-bold text-green-600">
          {totalEmissions.toFixed(2)} kg CO₂/month
        </div>
        <p className="text-gray-600">Total Carbon Emissions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Breakdown by Category</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Transportation:</span>
              <span className="font-medium">{transportationEmissions.toFixed(2)} kg CO₂</span>
            </div>
            <div className="flex justify-between">
              <span>Water Usage:</span>
              <span className="font-medium">{waterEmissions.toFixed(2)} kg CO₂</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Distribution</h3>
          <div className="w-full max-w-xs mx-auto">
            <Pie data={data} options={options} />
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Tips to Reduce Your Footprint</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Consider using public transportation or carpooling</li>
          <li>Switch to energy-efficient vehicles or electric vehicles</li>
          <li>Reduce water heating time and use cold water when possible</li>
          <li>Install water-saving fixtures and fix leaks</li>
          <li>Consider implementing rainwater harvesting</li>
        </ul>
      </div>
    </div>
  );
};

export default ResultsDisplay; 