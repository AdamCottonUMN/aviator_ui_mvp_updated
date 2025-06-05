import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, ArrowRight, Star, Users, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BetaPage = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-6">
                <Plane className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Join the Aviator Beta Program
              </h1>
              <p className="text-lg text-gray-600">
                Be among the first to experience the future of AI-powered career guidance
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-12"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="input-field"
                    required
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full flex items-center justify-center">
                  Join Beta Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="inline-block p-3 bg-primary/10 rounded-xl mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Early Access</h3>
                <p className="text-gray-600">Be the first to try new features and shape the future of Aviator</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="inline-block p-3 bg-primary/10 rounded-xl mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Exclusive Community</h3>
                <p className="text-gray-600">Connect with other beta users and share experiences</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="inline-block p-3 bg-primary/10 rounded-xl mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Special Perks</h3>
                <p className="text-gray-600">Get lifetime benefits and discounts for being an early adopter</p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BetaPage;