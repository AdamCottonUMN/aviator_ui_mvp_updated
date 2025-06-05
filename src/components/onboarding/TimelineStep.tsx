import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TimelineStepProps {
  onNext: () => void;
  onBack: () => void;
}

const TimelineStep = ({ onNext, onBack }: TimelineStepProps) => {
  const [months, setMonths] = useState(6);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2">When do you want to get hired?</h2>
        <p className="text-gray-600 mb-6">We'll adjust your learning pace based on your timeline.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label htmlFor="timelineSlider" className="block text-sm font-medium text-gray-700 mb-4">
              Target timeline: <span className="text-primary font-medium">{months} months</span>
            </label>
            
            <div className="relative">
              <input
                type="range"
                id="timelineSlider"
                min="1"
                max="24"
                value={months}
                onChange={(e) => setMonths(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>1 month</span>
                <span>6 months</span>
                <span>12 months</span>
                <span>18 months</span>
                <span>24 months</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">Timeline Recommendation</h4>
                <p className="text-sm text-gray-600">
                  {months <= 3 
                    ? "This is an aggressive timeline. You'll need to dedicate significant time each week." 
                    : months <= 6 
                    ? "This is a balanced timeline. You'll need regular, consistent effort." 
                    : "This timeline allows for a more relaxed pace with steady progress."}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={onBack}
              className="btn-secondary flex items-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn-primary flex items-center"
            >
              Continue
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default TimelineStep;