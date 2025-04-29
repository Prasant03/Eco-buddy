import React, { useState } from 'react';
import TransportationForm from './TransportationForm';
import WaterUsageForm from './WaterUsageForm';
import ResultsDisplay from './ResultsDisplay';
import SuggestionsDisplay from '../suggestions/SuggestionsDisplay';
import { calculateTransportationEmissions, calculateWaterEmissions } from '../../utils/calculations';
import { validateTransportationData, validateWaterData, ValidationError } from '../../utils/validation';

interface CalculatorData {
  transportation: {
    dailyCommute: number;
    vehicleType: string;
    vehicleUsage: number;
    publicTransport: number;
    airTravelShort: number;
    airTravelLong: number;
    airTravelClass: string;
  };
  water: {
    householdWater: number;
    waterHeating: number;
    gardenWater: number;
    rainwaterHarvesting: boolean;
  };
}

const CarbonCalculator: React.FC = () => {
  const [data, setData] = useState<CalculatorData>({
    transportation: {
      dailyCommute: 0,
      vehicleType: 'gasoline',
      vehicleUsage: 0,
      publicTransport: 0,
      airTravelShort: 0,
      airTravelLong: 0,
      airTravelClass: 'economy',
    },
    water: {
      householdWater: 0,
      waterHeating: 0,
      gardenWater: 0,
      rainwaterHarvesting: false,
    },
  });

  const [errors, setErrors] = useState<ValidationError[]>([]);

  const handleTransportationChange = (name: string, value: number | string) => {
    setData(prev => ({
      ...prev,
      transportation: {
        ...prev.transportation,
        [name]: value,
      },
    }));
  };

  const handleWaterChange = (name: string, value: number | boolean) => {
    setData(prev => ({
      ...prev,
      water: {
        ...prev.water,
        [name]: value,
      },
    }));
  };

  const calculateResults = () => {
    // Validate data
    const transportationErrors = validateTransportationData(data.transportation);
    const waterErrors = validateWaterData(data.water);
    const allErrors = [...transportationErrors, ...waterErrors];
    
    setErrors(allErrors);

    if (allErrors.length > 0) {
      return null;
    }

    // Calculate emissions
    const transportationEmissions = calculateTransportationEmissions(data.transportation);
    const waterEmissions = calculateWaterEmissions(data.water);
    const totalEmissions = transportationEmissions + waterEmissions;

    return {
      transportationEmissions,
      waterEmissions,
      totalEmissions,
    };
  };

  const results = calculateResults();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Carbon Footprint Calculator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <TransportationForm
            formData={data.transportation}
            onChange={handleTransportationChange}
          />
        </div>
        
        <div>
          <WaterUsageForm
            formData={data.water}
            onChange={handleWaterChange}
          />
        </div>
      </div>

      {errors.length > 0 && (
        <div className="mt-4 p-4 bg-red-50 rounded-lg">
          <h3 className="text-red-800 font-semibold mb-2">Please fix the following errors:</h3>
          <ul className="list-disc list-inside text-red-700">
            {errors.map((error, index) => (
              <li key={index}>{error.message}</li>
            ))}
          </ul>
        </div>
      )}

      {results && (
        <>
          <div className="mt-8">
            <ResultsDisplay {...results} />
          </div>
          
          <div className="mt-8">
            <SuggestionsDisplay data={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default CarbonCalculator; 