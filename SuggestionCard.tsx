import React from 'react';
import { Suggestion, SuggestionPriority } from '../../utils/suggestions';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface SuggestionCardProps {
  suggestion: Suggestion;
  onFeedback?: (suggestionId: string, helpful: boolean) => void;
  showDetails?: boolean;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ 
  suggestion, 
  onFeedback,
  showDetails = false
}) => {
  // Get priority badge color
  const getPriorityBadgeColor = (priority: SuggestionPriority) => {
    switch (priority) {
      case SuggestionPriority.HIGH:
        return 'bg-red-100 text-red-800';
      case SuggestionPriority.MEDIUM:
        return 'bg-yellow-100 text-yellow-800';
      case SuggestionPriority.LOW:
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Handle feedback
  const handleFeedback = (helpful: boolean) => {
    if (onFeedback) {
      onFeedback(suggestion.id, helpful);
    }
  };

  return (
    <Card variant="elevated" className="mb-4 hover:transform hover:scale-[1.02] transition-transform">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-primary-700">{suggestion.title}</h3>
        <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityBadgeColor(suggestion.priority)}`}>
          {suggestion.priority.toUpperCase()}
        </span>
      </div>
      
      <p className="text-gray-600 mt-2">{suggestion.description}</p>
      
      <div className="mt-2 text-sm text-primary-600 font-medium">
        Potential reduction: {suggestion.impact} kg CO₂/month
      </div>
      
      {showDetails && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="font-medium text-gray-700 mb-2">Implementation Tips:</h4>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            <li>Start with small changes and gradually increase</li>
            <li>Track your progress over time</li>
            <li>Share your success with friends and family</li>
          </ul>
        </div>
      )}
      
      {onFeedback && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Was this suggestion helpful?</p>
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant="primary"
              onClick={() => handleFeedback(true)}
            >
              Yes
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleFeedback(false)}
            >
              No
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default SuggestionCard; 