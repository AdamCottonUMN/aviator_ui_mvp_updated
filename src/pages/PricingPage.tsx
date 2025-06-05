import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started with your career journey',
    features: [
      'Basic career roadmap',
      'Weekly task suggestions',
      'Access to learning resources',
      'Community forum access',
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: '$19.99',
    description: 'Everything you need to accelerate your career growth',
    features: [
      'Everything in Free',
      'AI career assistant',
      'Personalized learning paths',
      'Mock interview practice',
      'Priority support',
      'Job application tracking',
    ],
    cta: 'Start Pro Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$49.99',
    description: 'Advanced features for teams and organizations',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Advanced analytics',
      'Dedicated account manager',
      'Custom training modules',
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Career Journey
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the plan that best fits your career goals and let Aviator guide you to success
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                  tier.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  
                  <button className={`w-full ${
                    tier.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}>
                    {tier.cta}
                  </button>
                </div>
                
                <div className="border-t border-gray-100 p-8">
                  <ul className="space-y-4">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <p className="text-sm text-gray-500">
              Need a custom plan? <a href="#" className="text-primary hover:underline">Contact us</a>
            </p>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;