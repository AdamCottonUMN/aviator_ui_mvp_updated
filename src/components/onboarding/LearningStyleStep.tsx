import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, GraduationCap as Graduation, Book, Laptop, Shuffle } from 'lucide-react';

interface LearningStyleStepProps {
  onNext: () => void;
  onBack: () => void;
}

const learningStyles = [
  {
    id: 'college',
    icon: <Graduation className="h-8 w-8 text-primary" />,
    title: 'College / University',
    description: 'Structured academic courses and degree programs'
  },
  {
    id: 'bootcamp',
    icon: <Laptop className="h-8 w-8 text-primary" />,
    title: 'Bootcamp',
    description: 'Intensive, focused learning programs (3-6 months)'
  },
  {
    id: 'self-taught',
    icon: <Book className="h-8 w-8 text-primary" />,
    title: 'Self-Taught',
    description: 'Independent learning through online resources'
  },
  {
    id: 'mixed',
    icon: <Shuffle className="h-8 w-8 text-primary" />,
    title: 'Mixed Approach',
    description: 'Combination of different learning methods'
  }
];

const LearningStyleStep = ({ onNext, onBack }: LearningStyleStepProps) => {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedStyle) {
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">How do you prefer to learn?</h2>
        <p className="text-gray-600 mb-6">We'll tailor your roadmap to match your learning style.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {learningStyles.map((style) => (
              <motion.div
                key={style.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedStyle(style.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedStyle === style.id 
                    ? 'border-primary bg-primary/5' 
                    : 'border-gray-200 hover:border-primary/30'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    {style.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{style.title}</h3>
                    <p className="text-sm text-gray-600">{style.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              disabled={!selectedStyle}
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

export default LearningStyleStep;