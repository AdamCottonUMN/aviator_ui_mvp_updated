import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [name, setName] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setIsAnimating(true);
      await new Promise(resolve => setTimeout(resolve, 1200)); // Increased delay to match longer animation
      navigate('/onboarding');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isAnimating ? [1, 0.8, 0.6, 0.4, 0.2, 0] : 1, // More opacity steps for smoother fade
          x: isAnimating ? [0, -20, window.innerWidth] : 0,
          y: 0 
        }}
        transition={{ 
          duration: isAnimating ? 1.2 : 0.5, // Increased duration
          ease: isAnimating ? [0.4, 0, 0.2, 1] : 'easeOut',
          opacity: { duration: 1.2 } // Match opacity animation duration
        }}
        className="w-full max-w-xl"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.label 
            className="text-xl text-gray-700 font-medium block"
            animate={{ 
              y: [0, -8, 0],
              x: [0, 5, 0],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          >
            Start flying:
          </motion.label>
          <div className="relative">
            <motion.input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-4xl font-light bg-transparent border-b-2 border-gray-300 focus:border-primary outline-none py-2 pr-12 transition-colors"
              placeholder="Enter your name"
              autoFocus
              animate={{ 
                y: [0, -6, 0],
                x: [0, 4, 0],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                delay: 0.5
              }}
            />
            <AnimatePresence>
              {name.trim() && !isAnimating && (
                <motion.button
                  type="submit"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-2 top-2 text-primary group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ 
                      x: [0, 6, 0],
                      y: [0, -4, 0],
                      rotate: [0, 3, 0, -3, 0]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.5, 1]
                    }}
                  >
                    <ArrowRight 
                      size={32}
                      className="transform transition-colors duration-200 group-hover:text-accent"
                    />
                  </motion.div>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
          <motion.div 
            className="h-1 bg-primary/10 rounded-full mt-2"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: name ? 1 : 0,
              y: [0, -4, 0],
              x: [0, 6, 0],
              rotate: [0, 1, 0, -1, 0]
            }}
            transition={{
              scaleX: { duration: 0.3 },
              y: { 
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                delay: 1
              },
              x: {
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                delay: 1
              },
              rotate: {
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
                delay: 1
              }
            }}
            style={{ transformOrigin: "left" }}
          />
        </form>
      </motion.div>
    </div>
  );
};

export default Hero;