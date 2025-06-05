import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface JobTitleStepProps {
  onNext: () => void;
}

const JobTitleStep = ({ onNext }: JobTitleStepProps) => {
  const [jobTitle, setJobTitle] = useState('');
  const jobSuggestions = ['Software Engineer', 'UX Designer', 'Data Scientist', 'Product Manager', 'Digital Marketer'];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (jobTitle.trim()) {
      onNext();
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2">What's your dream job?</h2>
        <p className="text-gray-600 mb-6">We'll create a personalized roadmap to help you get there.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="e.g. UX Designer"
              className="input-field"
              required
            />
          </div>
          
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-3">Popular choices:</p>
            <div className="flex flex-wrap gap-2">
              {jobSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setJobTitle(suggestion)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1.5 rounded-full transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end">
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

export default JobTitleStep;