import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

const HeroImage = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <motion.div 
        className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="relative">
        <motion.div 
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="px-8 pt-8 pb-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Your Career Roadmap</h3>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Frontend Developer
              </span>
            </div>
            
            <div className="space-y-4">
              <RoadmapItem 
                title="Learn Fundamentals" 
                date="Weeks 1-4"
                isActive={true}
              />
              <RoadmapItem 
                title="Build Portfolio" 
                date="Weeks 5-8"
              />
              <RoadmapItem 
                title="Network & Apply" 
                date="Weeks 9-12"
              />
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center">
                <motion.div 
                  className="p-2 bg-primary rounded-full"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Plane className="h-5 w-5 text-white" />
                </motion.div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800">Next Steps</p>
                  <p className="text-xs text-gray-500">Complete HTML/CSS basics</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary to-accent p-4">
            <div className="flex items-center justify-between">
              <div className="text-white">
                <p className="text-sm font-medium">Projected Timeline</p>
                <p className="text-xs opacity-80">12 weeks to job-ready</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary rounded-full px-4 py-1 text-sm font-medium"
              >
                View Details
              </motion.button>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center space-x-2">
            <div className="bg-primary/10 rounded-full p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16V12L14 10" stroke="#6A4FB6" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="9" stroke="#6A4FB6" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Time Saved</p>
              <p className="text-xs text-gray-500">4 months vs self-guided</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface RoadmapItemProps {
  title: string;
  date: string;
  isActive?: boolean;
}

const RoadmapItem = ({ title, date, isActive = false }: RoadmapItemProps) => {
  return (
    <div className="flex items-center space-x-3">
      <div className={`w-4 h-4 rounded-full ${isActive ? 'bg-primary' : 'bg-gray-200'} flex-shrink-0`}>
        {isActive && (
          <motion.div 
            className="w-4 h-4 rounded-full bg-primary/30 absolute"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>
      <div className="flex-1">
        <p className={`text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-700'}`}>{title}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default HeroImage;