import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

interface BackgroundStepProps {
  onNext: () => void;
  onBack: () => void;
}

const skillOptions = [
  'HTML/CSS', 'JavaScript', 'React', 'Python', 'SQL', 'Figma', 
  'UX Research', 'Data Analysis', 'Excel', 'Project Management',
  'SEO', 'Digital Marketing', 'Content Writing', 'UI Design'
];

const BackgroundStep = ({ onNext, onBack }: BackgroundStepProps) => {
  const [hasExperience, setHasExperience] = useState<boolean | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  
  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };
  
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">What's your background?</h2>
        <p className="text-gray-600 mb-6">Tell us about your relevant experience and skills.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Do you have any experience in this field?
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setHasExperience(true)}
                className={`py-2 px-4 rounded-lg border text-center transition-all ${
                  hasExperience === true 
                    ? 'border-primary bg-primary/5 text-primary' 
                    : 'border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setHasExperience(false)}
                className={`py-2 px-4 rounded-lg border text-center transition-all ${
                  hasExperience === false 
                    ? 'border-primary bg-primary/5 text-primary' 
                    : 'border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                No
              </button>
            </div>
          </div>
          
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              What skills do you already have? (Select all that apply)
            </label>
            
            <div className="mb-3">
              {selectedSkills.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedSkills.map(skill => (
                    <div 
                      key={skill}
                      className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm flex items-center"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        className="ml-1.5 text-primary/70 hover:text-primary"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skillOptions.map(skill => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    selectedSkills.includes(skill)
                      ? 'bg-primary/10 text-primary'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {skill}
                </button>
              ))}
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

export default BackgroundStep;