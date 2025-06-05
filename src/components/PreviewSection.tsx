import { motion } from 'framer-motion';
import { Code, Calendar, Users } from 'lucide-react';

const PreviewSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">See Aviator in Action</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get a glimpse of how our AI helps you navigate your career journey
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-gray-500">Aviator Terminal</div>
              </div>
              
              <div className="space-y-2 text-gray-800">
                <div><span className="text-primary">Goal:</span> UX Designer in 12 months</div>
                <div><span className="text-primary">Week 1:</span></div>
                <div className="pl-4">→ Complete "Intro to Figma"</div>
                <div className="pl-4">→ Connect with 2 UX designers</div>
                <div className="pl-4">→ Apply to 3 remote internships</div>
                <div><span className="text-primary">Week 2:</span></div>
                <div className="pl-4">→ Finish UI fundamentals course</div>
                <div className="pl-4">→ Start first practice project</div>
                <motion.div 
                  className="inline-block w-2 h-5 bg-primary ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-1/2 space-y-6"
          >
            <FeatureCard 
              icon={<Code />}
              title="Personalized Skill Path"
              description="AI analyzes in-demand skills for your target role and creates a tailored learning path."
            />
            <FeatureCard 
              icon={<Calendar />}
              title="Weekly Action Plans"
              description="Break down your big career goal into manageable weekly tasks and milestones."
            />
            <FeatureCard 
              icon={<Users />}
              title="Network Intelligence"
              description="Get smart recommendations on who to connect with and how to approach them."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-primary/10 rounded-lg p-3 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default PreviewSection;