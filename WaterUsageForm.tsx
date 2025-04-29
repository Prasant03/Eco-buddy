import React from 'react';

interface WaterUsageFormProps {
  formData: {
    householdWater: number;
    waterHeating: number;
    gardenWater: number;
    rainwaterHarvesting: boolean;
  };
  onChange: (name: string, value: number | boolean) => void;
}

const WaterUsageForm: React.FC<WaterUsageFormProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Water Usage</h3>
        
        {/* Household Water Usage */}
        <div className="mb-4">
          <label htmlFor="householdWater" className="block text-sm font-medium text-gray-700">
            Monthly Household Water Usage (m³)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              id="householdWater"
              name="householdWater"
              value={formData.householdWater}
              onChange={(e) => onChange('householdWater', parseFloat(e.target.value) || 0)}
              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm"
              min="0"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">m³</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Check your water bill for this information
          </p>
        </div>

        {/* Water Heating */}
        <div className="mb-4">
          <label htmlFor="waterHeating" className="block text-sm font-medium text-gray-700">
            Hot Water Usage (hours/day)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              id="waterHeating"
              name="waterHeating"
              value={formData.waterHeating}
              onChange={(e) => onChange('waterHeating', parseFloat(e.target.value) || 0)}
              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm"
              min="0"
              max="24"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">hrs</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Estimate daily hot water usage for showers, dishes, etc.
          </p>
        </div>

        {/* Garden Water Usage */}
        <div className="mb-4">
          <label htmlFor="gardenWater" className="block text-sm font-medium text-gray-700">
            Garden/Outdoor Water Usage (L/month)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              id="gardenWater"
              name="gardenWater"
              value={formData.gardenWater}
              onChange={(e) => onChange('gardenWater', parseFloat(e.target.value) || 0)}
              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm"
              min="0"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">L</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Water used for garden, car washing, etc.
          </p>
        </div>

        {/* Rainwater Harvesting */}
        <div className="flex items-center">
          <input
            id="rainwaterHarvesting"
            name="rainwaterHarvesting"
            type="checkbox"
            checked={formData.rainwaterHarvesting}
            onChange={(e) => onChange('rainwaterHarvesting', e.target.checked)}
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label htmlFor="rainwaterHarvesting" className="ml-2 block text-sm text-gray-900">
            Do you use rainwater harvesting?
          </label>
        </div>
      </div>

      {/* Water Conservation Tips */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-green-700">
              Tip: Installing water-efficient fixtures and fixing leaks can significantly reduce your water consumption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterUsageForm; 