import React, { useState } from 'react';
import { Suggestion, SuggestionCategory, getApplicableSuggestions, getSuggestionsByCategory, getHighPrioritySuggestions } from '../../utils/suggestions';
import SuggestionCard from './SuggestionCard';

interface SuggestionsDisplayProps {
  data: any; // User data from calculator
}

const SuggestionsDisplay: React.FC<SuggestionsDisplayProps> = ({ data }) => {
  // State for filtering
  const [selectedCategory, setSelectedCategory] = useState<SuggestionCategory | 'all'>('all');
  const [selectedPriority, setSelectedPriority] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  const [showDetails, setShowDetails] = useState(false);
  
  // Get applicable suggestions
  const applicableSuggestions = getApplicableSuggestions(data);
  
  // Get high priority suggestions
  const highPrioritySuggestions = getHighPrioritySuggestions(data);
  
  // Get suggestions by category
  const energySuggestions = getSuggestionsByCategory(SuggestionCategory.ENERGY, data);
  const transportationSuggestions = getSuggestionsByCategory(SuggestionCategory.TRANSPORTATION, data);
  const consumptionSuggestions = getSuggestionsByCategory(SuggestionCategory.CONSUMPTION, data);

  // Filter suggestions based on selected category and priority
  const getFilteredSuggestions = () => {
    let filtered = [...applicableSuggestions];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(suggestion => suggestion.category === selectedCategory);
    }
    
    // Filter by priority
    if (selectedPriority !== 'all') {
      filtered = filtered.filter(suggestion => suggestion.priority === selectedPriority);
    }
    
    return filtered;
  };

  // Handle feedback
  const handleFeedback = (suggestionId: string, helpful: boolean) => {
    console.log(`Feedback for suggestion ${suggestionId}: ${helpful ? 'helpful' : 'not helpful'}`);
    // In a real app, you would send this feedback to a server
  };

  // Render category filter buttons
  const renderCategoryFilter = () => (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2">Filter by Category:</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1 rounded ${
            selectedCategory === 'all' 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory(SuggestionCategory.ENERGY)}
          className={`px-3 py-1 rounded ${
            selectedCategory === SuggestionCategory.ENERGY 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Energy
        </button>
        <button
          onClick={() => setSelectedCategory(SuggestionCategory.TRANSPORTATION)}
          className={`px-3 py-1 rounded ${
            selectedCategory === SuggestionCategory.TRANSPORTATION 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Transportation
        </button>
        <button
          onClick={() => setSelectedCategory(SuggestionCategory.CONSUMPTION)}
          className={`px-3 py-1 rounded ${
            selectedCategory === SuggestionCategory.CONSUMPTION 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Consumption
        </button>
      </div>
    </div>
  );

  // Render priority filter buttons
  const renderPriorityFilter = () => (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2">Filter by Priority:</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedPriority('all')}
          className={`px-3 py-1 rounded ${
            selectedPriority === 'all' 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedPriority('high')}
          className={`px-3 py-1 rounded ${
            selectedPriority === 'high' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          High
        </button>
        <button
          onClick={() => setSelectedPriority('medium')}
          className={`px-3 py-1 rounded ${
            selectedPriority === 'medium' 
              ? 'bg-yellow-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Medium
        </button>
        <button
          onClick={() => setSelectedPriority('low')}
          className={`px-3 py-1 rounded ${
            selectedPriority === 'low' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Low
        </button>
      </div>
    </div>
  );

  // Get filtered suggestions
  const filteredSuggestions = getFilteredSuggestions();

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Sustainability Suggestions</h2>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="px-3 py-1 bg-green-100 text-green-800 rounded text-sm hover:bg-green-200"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      
      {/* Filters */}
      <div className="mb-6">
        {renderCategoryFilter()}
        {renderPriorityFilter()}
      </div>
      
      {/* High Priority Suggestions */}
      {selectedCategory === 'all' && selectedPriority === 'all' && highPrioritySuggestions.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-red-700">High Priority Actions</h3>
          {highPrioritySuggestions.map(suggestion => (
            <SuggestionCard 
              key={suggestion.id} 
              suggestion={suggestion} 
              onFeedback={handleFeedback}
              showDetails={showDetails}
            />
          ))}
        </div>
      )}
      
      {/* Filtered Suggestions */}
      {filteredSuggestions.length > 0 ? (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            {selectedCategory === 'all' ? 'All Suggestions' : `${selectedCategory} Suggestions`}
          </h3>
          {filteredSuggestions.map(suggestion => (
            <SuggestionCard 
              key={suggestion.id} 
              suggestion={suggestion} 
              onFeedback={handleFeedback}
              showDetails={showDetails}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600">No suggestions match your current filters.</p>
          <p className="text-gray-600 mt-2">Try adjusting your filters or input data.</p>
        </div>
      )}
    </div>
  );
};

export default SuggestionsDisplay; 