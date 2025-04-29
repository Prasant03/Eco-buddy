import React from 'react';

interface TransportationFormProps {
  formData: {
    dailyCommute: number;
    vehicleType: string;
    vehicleUsage: number;
    publicTransport: number;
    airTravelShort: number;
    airTravelLong: number;
    airTravelClass: string;
  };
  onChange: (name: string, value: number | string) => void;
}

const TransportationForm: React.FC<TransportationFormProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Transportation</h3>
        
        {/* Daily Commute */}
        <div className="mb-4">
          <label htmlFor="dailyCommute" className="block text-sm font-medium text-gray-700">
            Daily Commute Distance (km)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              id="dailyCommute"
              name="dailyCommute"
              value={formData.dailyCommute}
              onChange={(e) => onChange('dailyCommute', parseFloat(e.target.value) || 0)}
              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm"
              min="0"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">km</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Round trip distance to work/school
          </p>
        </div>

        {/* Vehicle Type */}
        <div className="mb-4">
          <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
            Primary Vehicle Type
          </label>
          <select
            id="vehicleType"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={(e) => onChange('vehicleType', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm"
          >
            <option value="">Select a vehicle type</option>
            <option value="small">Small Car (Petrol)</option>
            <option value="medium">Medium Car (Petrol)</option>
            <option value="large">Large Car (Petrol)</option>
            <option value="diesel">Diesel Vehicle</option>
            <option value="hybrid">Hybrid Vehicle</option>
            <option value="electric">Electric Vehicle</option>
          </select>
        </div>

        {/* Vehicle Usage */}
        <div className="mb-4">
          <label htmlFor="vehicleUsage" className="block text-sm font-medium text-gray-700">
            Monthly Vehicle Usage (km)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              id="vehicleUsage"
              name="vehicleUsage"
              value={formData.vehicleUsage}
              onChange={(e) => onChange('vehicleUsage', parseFloat(e.target.value) || 0)}
              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm"
              min="0"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">km</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Total distance traveled per month
          </p>
        </div>

        {/* Public Transport */}
        <div>
          <label htmlFor="publicTransport" className="block text-sm font-medium text-gray-700">
            Monthly Public Transport Usage (km)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              id="publicTransport"
              name="publicTransport"
              value={formData.publicTransport}
              onChange={(e) => onChange('publicTransport', parseFloat(e.target.value) || 0)}
              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm"
              min="0"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">km</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Total distance traveled by public transport
          </p>
        </div>

        {/* Air Travel Short Haul */}
        <div className="mb-4">
          <label htmlFor="airTravelShort" className="block text-sm font-medium text-gray-700">
            Short-haul Flights (under 3 hours) per Month
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              id="airTravelShort"
              name="airTravelShort"
              value={formData.airTravelShort}
              onChange={(e) => onChange('airTravelShort', parseFloat(e.target.value) || 0)}
              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm"
              min="0"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">flights</span>
            </div>
          </div>
        </div>

        {/* Air Travel Long Haul */}
        <div className="mb-4">
          <label htmlFor="airTravelLong" className="block text-sm font-medium text-gray-700">
            Long-haul Flights (over 3 hours) per Month
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              id="airTravelLong"
              name="airTravelLong"
              value={formData.airTravelLong}
              onChange={(e) => onChange('airTravelLong', parseFloat(e.target.value) || 0)}
              className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm"
              min="0"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">flights</span>
            </div>
          </div>
        </div>

        {/* Travel Class */}
        <div className="mb-4">
          <label htmlFor="airTravelClass" className="block text-sm font-medium text-gray-700">
            Travel Class
          </label>
          <select
            id="airTravelClass"
            name="airTravelClass"
            value={formData.airTravelClass}
            onChange={(e) => onChange('airTravelClass', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm"
          >
            <option value="">Select travel class</option>
            <option value="economy">Economy</option>
            <option value="premium">Premium Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </select>
          <p className="mt-1 text-sm text-gray-500">
            Higher travel classes have a larger carbon footprint due to space usage
          </p>
        </div>
      </div>

      {/* Transportation Tips */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-green-700">
              Tip: Consider video conferencing instead of short business flights and choose direct flights when possible to reduce emissions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationForm; 