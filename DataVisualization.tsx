import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { CalculatorResult, AVERAGE_VALUES } from '../../utils/calculatorUtils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface DataVisualizationProps {
  results: CalculatorResult[];
}

const DataVisualization: React.FC<DataVisualizationProps> = ({ results }) => {
  if (results.length === 0) {
    return null;
  }

  // Prepare data for the bar chart (comparison with average)
  const barChartData = {
    labels: ['Electricity', 'Heating', 'Transport', 'Food', 'Waste'],
    datasets: [
      {
        label: 'Your Usage',
        data: [
          results[results.length - 1].electricity,
          results[results.length - 1].heating,
          results[results.length - 1].transport,
          results[results.length - 1].food,
          results[results.length - 1].waste,
        ],
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 1,
      },
      {
        label: 'Average',
        data: [
          AVERAGE_VALUES.electricity,
          AVERAGE_VALUES.heating,
          AVERAGE_VALUES.transport,
          AVERAGE_VALUES.food,
          AVERAGE_VALUES.waste,
        ],
        backgroundColor: 'rgba(156, 163, 175, 0.5)',
        borderColor: 'rgb(156, 163, 175)',
        borderWidth: 1,
      },
    ],
  };

  // Prepare data for the pie chart (contribution to total)
  const pieChartData = {
    labels: ['Electricity', 'Heating', 'Transport', 'Food', 'Waste'],
    datasets: [
      {
        data: [
          results[results.length - 1].electricity * 0.5,
          results[results.length - 1].heating * 2.5,
          results[results.length - 1].transport * 2.0,
          results[results.length - 1].food * 1.5,
          results[results.length - 1].waste * 0.8,
        ],
        backgroundColor: [
          'rgba(34, 197, 94, 0.5)',
          'rgba(59, 130, 246, 0.5)',
          'rgba(245, 158, 11, 0.5)',
          'rgba(239, 68, 68, 0.5)',
          'rgba(139, 92, 246, 0.5)',
        ],
        borderColor: [
          'rgb(34, 197, 94)',
          'rgb(59, 130, 246)',
          'rgb(245, 158, 11)',
          'rgb(239, 68, 68)',
          'rgb(139, 92, 246)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Comparison with Average',
      },
    },
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Contribution to Total Carbon Footprint',
      },
    },
  };

  return (
    <div className="mt-8 space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Visualization</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Bar data={barChartData} options={barChartOptions} />
          </div>
          <div>
            <Pie data={pieChartData} options={pieChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization; 