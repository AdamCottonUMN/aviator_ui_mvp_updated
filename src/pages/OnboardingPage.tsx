import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Plane } from 'lucide-react';

// Step components
import JobTitleStep from '../components/onboarding/JobTitleStep';
import TimelineStep from '../components/onboarding/TimelineStep';
import LearningStyleStep from '../components/onboarding/LearningStyleStep';
import LocationStep from '../components/onboarding/LocationStep';
import BackgroundStep from '../components/onboarding/BackgroundStep';
import FinishStep from '../components/onboarding/FinishStep';

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;
  const navigate = useNavigate();
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // When all steps are completed, navigate to dashboard
      navigate('/dashboard');
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <JobTitleStep onNext={nextStep} />;
      case 2:
        return <TimelineStep onNext={nextStep} onBack={prevStep} />;
      case 3:
        return <LearningStyleStep onNext={nextStep} onBack={prevStep} />;
      case 4:
        return <LocationStep onNext={nextStep} onBack={prevStep} />;
      case 5:
        return <BackgroundStep onNext={nextStep} onBack={prevStep} />;
      case 6:
        return <FinishStep onNext={nextStep} onBack={prevStep} />;
      default:
        return <JobTitleStep onNext={nextStep} />;
    }
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="py-4 px-6 flex items-center justify-between border-b border-gray-200">
        <Link to="/" className="flex items-center space-x-2">
          <Plane className="text-primary h-6 w-6" />
          <span className="text-xl font-semibold text-gray-900">Aviator</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2">
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <div 
                key={idx} 
                className={`w-2.5 h-2.5 rounded-full ${
                  idx + 1 === currentStep ? 'bg-primary' : 
                  idx + 1 < currentStep ? 'bg-primary/60' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          
          <div className="text-sm text-gray-600">
            Step {currentStep} of {totalSteps}
          </div>
        </div>
      </header>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div 
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-xl"
        >
          {renderStep()}
        </motion.div>
      </div>
    </div>
  );
};

export default OnboardingPage;