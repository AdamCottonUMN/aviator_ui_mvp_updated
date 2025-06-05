import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Plane } from 'lucide-react';

interface FinishStepProps {
  onNext: () => void;
  onBack: () => void;
}

const FinishStep = ({ onNext, onBack }: FinishStepProps) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onNext(), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 180);
    
    return () => clearInterval(interval);
  }, [onNext]);
  
  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <motion.div 
          className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0, -10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <Plane className="text-primary h-10 w-10" />
        </motion.div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Building your roadmap</h2>
        <p className="text-gray-600 mb-8">Our AI is creating your personalized career plan...</p>
        
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <motion.div 
            className="bg-primary h-2.5 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-500 mb-6">
            Analyzing job market data, identifying skills gaps, and creating weekly action plans...
          </p>
          
          <button
            type="button"
            onClick={onBack}
            className="text-gray-500 hover:text-gray-700 text-sm flex items-center"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Go back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FinishStep;