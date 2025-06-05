import { motion } from 'framer-motion';
import { MapPin, Calendar, UserCheck } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Choose Your Path",
    description: "Tell us your career goal and we'll map out the perfect journey to get you there."
  },
  {
    icon: <Calendar className="h-6 w-6 text-primary" />,
    title: "Get Weekly Plans",
    description: "Receive actionable weekly tasks tailored to your timeline and learning style."
  },
  {
    icon: <UserCheck className="h-6 w-6 text-primary" />,
    title: "Apply with Confidence",
    description: "Build your skills methodically until you're fully prepared for your dream role."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works\" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI co-pilot guides you through every step of your career journey
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card hover:border-primary/20 hover:border"
            >
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;