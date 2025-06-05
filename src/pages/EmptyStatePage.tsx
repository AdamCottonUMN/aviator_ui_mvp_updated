import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EmptyStatePage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4 py-16">
          <motion.div 
            className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <Plane className="text-primary h-12 w-12" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Ready to take off?</h1>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              You haven't created a career roadmap yet. Let's build one to help you reach your dream job.
            </p>
            
            <Link to="/onboarding" className="btn-primary inline-flex items-center">
              Create Your Roadmap
            </Link>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EmptyStatePage;