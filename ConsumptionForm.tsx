import React from 'react';

interface ConsumptionFormProps {
  formData: {
    foodConsumption: string;
    shoppingFrequency: string;
    wasteAmount: number;
    recycling: boolean;
  };
  onChange: (name: string, value: number | string | boolean) => void;
}

const ConsumptionForm: React.FC<ConsumptionFormProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Consumption Habits</h3>
        
        {/* Food Consumption Patterns */}
        <div className="mb-4">
          <label htmlFor="foodConsumption" className="block text-sm font-medium text-gray-700">
            Food Consumption Pattern
          </label>
          <select
            id="foodConsumption"
            name="foodConsumption"
            value={formData.foodConsumption}
            onChange={(e) => onChange('foodConsumption', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm"
          >
            <option value="">Select your diet type</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="omnivore">Omnivore</option>
          </select>
          <p className="mt-1 text-sm text-gray-500">
            Your primary diet type
          </p>
        </div>

        {/* Shopping Habits */}
        <div className="mb-4">
          <label htmlFor="shoppingFrequency" className="block text-sm font-medium text-gray-700">
            Shopping Frequency
          </label>
          <select
            id="shoppingFrequency"
            name="shoppingFrequency"
            value={formData.shoppingFrequency}
            onChange={(e) => onChange('shoppingFrequency', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm"
          >
            <option value="">Select shopping frequency</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <p className="mt-1 text-sm text-gray-500">
            How often do you shop for groceries?
          </p>
        </div>

        {/* Waste Management */}
        <div className="mb-4">
          <label htmlFor="wasteAmount" className="block text-sm font-medium text-gray-700">
            Monthly Waste Production (kg)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              id="wasteAmount"
              name="wasteAmount"
              value={formData.wasteAmount}
              onChange={(e) => onChange('wasteAmount', parseFloat(e.target.value) || 0)}
              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm"
              min="0"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">kg</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Estimated amount of waste produced per month
          </p>
        </div>

        {/* Recycling */}
        <div className="flex items-center">
          <input
            id="recycling"
            name="recycling"
            type="checkbox"
            checked={formData.recycling}
            onChange={(e) => onChange('recycling', e.target.checked)}
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label htmlFor="recycling" className="ml-2 block text-sm text-gray-900">
            Do you recycle regularly?
          </label>
        </div>
      </div>

      {/* Consumption Tips */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-green-700">
              Tip: Consider buying local and seasonal produce to reduce your carbon footprint.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumptionForm; 