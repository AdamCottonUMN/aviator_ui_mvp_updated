import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';

interface LocationStepProps {
  onNext: () => void;
  onBack: () => void;
}

const LocationStep = ({ onNext, onBack }: LocationStepProps) => {
  const [workType, setWorkType] = useState<'remote' | 'onsite' | 'hybrid'>('remote');
  const [location, setLocation] = useState('');
  
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Where do you want to work?</h2>
        <p className="text-gray-600 mb-6">This helps us find relevant job opportunities for you.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Work Preference
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setWorkType('remote')}
                className={`py-2 px-4 rounded-lg border text-center transition-all ${
                  workType === 'remote' 
                    ? 'border-primary bg-primary/5 text-primary' 
                    : 'border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                Remote
              </button>
              <button
                type="button"
                onClick={() => setWorkType('onsite')}
                className={`py-2 px-4 rounded-lg border text-center transition-all ${
                  workType === 'onsite' 
                    ? 'border-primary bg-primary/5 text-primary' 
                    : 'border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                Onsite
              </button>
              <button
                type="button"
                onClick={() => setWorkType('hybrid')}
                className={`py-2 px-4 rounded-lg border text-center transition-all ${
                  workType === 'hybrid' 
                    ? 'border-primary bg-primary/5 text-primary' 
                    : 'border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                Hybrid
              </button>
            </div>
          </div>
          
          {(workType === 'onsite' || workType === 'hybrid') && (
            <div className="mb-8">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Your Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City or ZIP code"
                  className="input-field pl-10"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We'll use this to find relevant job opportunities in your area.
              </p>
            </div>
          )}
          
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

export default LocationStep;