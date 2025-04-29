import React from 'react';

interface EnergyUsageFormProps {
  formData: {
    electricity: number;
    heating: number;
    renewable: number;
  };
  onChange: (name: string, value: number) => void;
}

const EnergyUsageForm: React.FC<EnergyUsageFormProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Energy Usage</h3>
        
        {/* Electricity Consumption */}
        <div className="mb-4">
          <label htmlFor="electricity" className="block text-sm font-medium text-gray-700">
            Monthly Electricity Consumption (kWh)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              id="electricity"
              name="electricity"
              value={formData.electricity}
              onChange={(e) => onChange('electricity', parseFloat(e.target.value) || 0)}
              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm"
              min="0"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">kWh</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            You can find this on your electricity bill
          </p>
        </div>

        {/* Heating/Cooling Usage */}
        <div className="mb-4">
          <label htmlFor="heating" className="block text-sm font-medium text-gray-700">
            Monthly Heating/Cooling Usage (units)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              id="heating"
              name="heating"
              value={formData.heating}
              onChange={(e) => onChange('heating', parseFloat(e.target.value) || 0)}
              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm"
              min="0"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">units</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Based on your heating/cooling system usage
          </p>
        </div>

        {/* Renewable Energy Usage */}
        <div>
          <label htmlFor="renewable" className="block text-sm font-medium text-gray-700">
            Monthly Renewable Energy Usage (kWh)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              id="renewable"
              name="renewable"
              value={formData.renewable}
              onChange={(e) => onChange('renewable', parseFloat(e.target.value) || 0)}
              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm"
              min="0"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">kWh</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            If you use solar panels or other renewable sources
          </p>
        </div>
      </div>

      {/* Energy Saving Tips */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-green-700">
              Tip: Consider using LED bulbs and energy-efficient appliances to reduce your electricity consumption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyUsageForm; 