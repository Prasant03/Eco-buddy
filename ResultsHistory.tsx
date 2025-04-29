import React from 'react';
import { CalculatorResult, AVERAGE_VALUES, calculatePercentageDifference } from '../../utils/calculatorUtils';

interface ResultsHistoryProps {
  results: CalculatorResult[];
}

const ResultsHistory: React.FC<ResultsHistoryProps> = ({ results }) => {
  if (results.length === 0) {
    return (
      <div className="mt-8 p-6 bg-white rounded-lg shadow">
        <p className="text-gray-600">No saved results yet. Calculate your carbon footprint to see your history.</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Your History</h3>
      <div className="space-y-4">
        {results.map((result) => (
          <div key={result.id} className="p-6 bg-white rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{new Date(result.date).toLocaleDateString()}</p>
                <p className="text-2xl font-bold text-green-600">{result.total.toFixed(2)} kg CO2</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">vs Average</p>
                <p className={`text-lg font-semibold ${
                  result.total < AVERAGE_VALUES.total ? 'text-green-600' : 'text-red-600'
                }`}>
                  {calculatePercentageDifference(result.total, AVERAGE_VALUES.total).toFixed(1)}%
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Electricity</p>
                <p className="text-sm">
                  {result.electricity} kWh
                  <span className={`ml-2 ${
                    result.electricity < AVERAGE_VALUES.electricity ? 'text-green-600' : 'text-red-600'
                  }`}>
                    ({calculatePercentageDifference(result.electricity, AVERAGE_VALUES.electricity).toFixed(1)}%)
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Heating</p>
                <p className="text-sm">
                  {result.heating} units
                  <span className={`ml-2 ${
                    result.heating < AVERAGE_VALUES.heating ? 'text-green-600' : 'text-red-600'
                  }`}>
                    ({calculatePercentageDifference(result.heating, AVERAGE_VALUES.heating).toFixed(1)}%)
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Transport</p>
                <p className="text-sm">
                  {result.transport} km
                  <span className={`ml-2 ${
                    result.transport < AVERAGE_VALUES.transport ? 'text-green-600' : 'text-red-600'
                  }`}>
                    ({calculatePercentageDifference(result.transport, AVERAGE_VALUES.transport).toFixed(1)}%)
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Food</p>
                <p className="text-sm">
                  {result.food} meals
                  <span className={`ml-2 ${
                    result.food < AVERAGE_VALUES.food ? 'text-green-600' : 'text-red-600'
                  }`}>
                    ({calculatePercentageDifference(result.food, AVERAGE_VALUES.food).toFixed(1)}%)
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsHistory; 