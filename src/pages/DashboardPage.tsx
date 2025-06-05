import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, Menu, User, Settings, LogOut, 
  Home, Calendar, Users, Briefcase, Check,
  FileText, Play, BookOpen, Star, Clock,
  MessageSquare, Building, GraduationCap,
  Award, ChevronRight, Mail
} from 'lucide-react';
import ScheduleEvent from '../components/dashboard/ScheduleEvent';
import StatCard from '../components/dashboard/StatCard';
import ConnectionCard from '../components/dashboard/ConnectionCard';
import JobCard from '../components/dashboard/JobCard';

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [activeTab, setActiveTab] = useState('dashboard');

  const weeklyTasks = {
    1: [
      { id: 1, text: "Complete HTML & CSS fundamentals", isCompleted: true },
      { id: 2, text: "Learn JavaScript basics", isCompleted: false },
      { id: 3, text: "Build a simple landing page", isCompleted: false },
      { id: 4, text: "Set up development environment", isCompleted: true },
      { id: 5, text: "Create GitHub account", isCompleted: true },
      { id: 6, text: "Research local tech meetups", isCompleted: false },
      { id: 7, text: "Join Discord communities", isCompleted: true },
      { id: 8, text: "Set up LinkedIn profile", isCompleted: false }
    ],
    2: [
      { id: 9, text: "Master JavaScript ES6+ features", isCompleted: false },
      { id: 10, text: "Complete React fundamentals course", isCompleted: false },
      { id: 11, text: "Practice with React hooks", isCompleted: false },
      { id: 12, text: "Build a todo app with React", isCompleted: false },
      { id: 13, text: "Add responsive design", isCompleted: false },
      { id: 14, text: "Connect with 3 React developers", isCompleted: false },
      { id: 15, text: "Attend virtual React meetup", isCompleted: false },
      { id: 16, text: "Update portfolio with new skills", isCompleted: false }
    ],
    3: [
      { id: 17, text: "Learn state management (Redux)", isCompleted: false },
      { id: 18, text: "Study React Router", isCompleted: false },
      { id: 19, text: "Explore TypeScript basics", isCompleted: false },
      { id: 20, text: "Build an e-commerce project", isCompleted: false },
      { id: 21, text: "Add authentication features", isCompleted: false },
      { id: 22, text: "Apply to junior dev positions", isCompleted: false },
      { id: 23, text: "Prepare for technical interviews", isCompleted: false },
      { id: 24, text: "Schedule mock interviews", isCompleted: false }
    ],
    4: [
      { id: 25, text: "Master TypeScript with React", isCompleted: false },
      { id: 26, text: "Learn Next.js fundamentals", isCompleted: false },
      { id: 27, text: "Study testing with Jest", isCompleted: false },
      { id: 28, text: "Create full-stack project", isCompleted: false },
      { id: 29, text: "Deploy to Vercel", isCompleted: false },
      { id: 30, text: "Contribute to open source", isCompleted: false },
      { id: 31, text: "Review job offers", isCompleted: false },
      { id: 32, text: "Negotiate compensation", isCompleted: false }
    ]
  };

  const [tasks, setTasks] = useState(weeklyTasks[1]);

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const handleWeekChange = (week: number) => {
    setSelectedWeek(week);
    setTasks(weeklyTasks[week as keyof typeof weeklyTasks]);
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'schedule':
        return <ScheduleContent />;
      case 'network':
        return <NetworkContent />;
      case 'jobs':
        return <JobsContent />;
      default:
        return (
          <>
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Career Roadmap</h1>
              <p className="text-gray-600">Track your progress and complete weekly tasks to reach your goal.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left panel: Career Path Overview */}
              <div className="lg:col-span-1">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-sm p-6 sticky top-[85px]"
                >
                  <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-lg text-white mb-6">
                    <h3 className="font-semibold mb-1">Frontend Developer</h3>
                    <p className="text-sm opacity-90">Target: 3 months</p>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-4">Career Milestones</h3>
                  
                  <div className="relative pl-6">
                    <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    
                    <Milestone 
                      title="Foundations" 
                      date="Weeks 1-4" 
                      description="Master HTML, CSS and basic JavaScript"
                      isCompleted={true}
                      isActive={false}
                    />
                    
                    <Milestone 
                      title="Core Skills" 
                      date="Weeks 5-8" 
                      description="Learn React and build projects"
                      isCompleted={false}
                      isActive={true}
                    />
                    
                    <Milestone 
                      title="Portfolio Building" 
                      date="Weeks 9-10" 
                      description="Create portfolio website and projects"
                      isCompleted={false}
                      isActive={false}
                    />
                    
                    <Milestone 
                      title="Job Application" 
                      date="Weeks 11-12" 
                      description="Apply to jobs and interview prep"
                      isCompleted={false}
                      isActive={false}
                    />
                  </div>
                  
                  <button className="btn-secondary w-full mt-6 text-sm">
                    Adjust Your Roadmap
                  </button>
                </motion.div>
              </div>
              
              {/* Right panel: Weekly Action Plan */}
              <div className="lg:col-span-2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <h3 className="text-lg font-semibold">Weekly Plan</h3>
                      <div className="flex flex-wrap gap-2">
                        {[1, 2, 3, 4].map(week => (
                          <button 
                            key={week}
                            onClick={() => handleWeekChange(week)}
                            className={`px-3 py-1 rounded-full text-sm ${
                              selectedWeek === week 
                                ? 'bg-primary text-white' 
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            Week {week}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <WeeklyTaskSection 
                        title="Learning" 
                        icon={<BookOpen size={20} />}
                        tasks={tasks.slice(0, 3)}
                        onToggle={toggleTask}
                      />
                      
                      <WeeklyTaskSection 
                        title="Projects" 
                        icon={<FileText size={20} />}
                        tasks={tasks.slice(3, 5)}
                        onToggle={toggleTask}
                      />
                      
                      <WeeklyTaskSection 
                        title="Job Search" 
                        icon={<Briefcase size={20} />}
                        tasks={tasks.slice(5, 8)}
                        onToggle={toggleTask}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <h3 className="text-lg font-semibold mb-4">Learning Resources</h3>
                      <ul className="space-y-3">
                        <ResourceItem 
                          title="React Official Documentation" 
                          type="Documentation"
                          icon={<FileText size={16} />}
                          url="#"
                        />
                        <ResourceItem 
                          title="Building a Real World App with React" 
                          type="Video Course"
                          icon={<Play size={16} />}
                          url="#"
                        />
                        <ResourceItem 
                          title="Frontend Developer Roadmap 2025" 
                          type="Article"
                          icon={<BookOpen size={16} />}
                          url="#"
                        />
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <h3 className="text-lg font-semibold mb-4">Upcoming Opportunities</h3>
                      <ul className="space-y-3">
                        <OpportunityItem 
                          title="Frontend Developer (Entry Level)" 
                          company="TechCorp"
                          deadline="In 2 weeks"
                        />
                        <OpportunityItem 
                          title="React Developer Internship" 
                          company="Startup Labs"
                          deadline="In 3 weeks"
                        />
                        <OpportunityItem 
                          title="Frontend Hackathon" 
                          company="DevNetwork"
                          deadline="Next month"
                        />
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        );
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between fixed top-0 w-full z-40">
        <div className="flex items-center">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="mr-4 text-gray-600 md:hidden"
          >
            <Menu size={24} />
          </button>
          <Link to="/" className="flex items-center space-x-2">
            <Plane className="text-primary h-6 w-6" />
            <span className="text-xl font-semibold text-gray-900">Aviator</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">
            <Settings size={20} />
          </button>
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <User size={18} />
          </div>
        </div>
      </header>
      
      <div className="flex pt-[73px]">
        {/* Sidebar */}
        <aside className={`
          bg-white border-r border-gray-200 w-64 fixed h-[calc(100vh-73px)] z-30
          transition-all duration-300 transform
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static
        `}>
          <div className="p-5">
            <div className="bg-primary/5 rounded-lg p-4 mb-6">
              <h3 className="text-sm font-medium text-gray-600 mb-1">Your Goal</h3>
              <p className="text-lg font-semibold text-gray-900">Frontend Developer</p>
              <div className="flex items-center mt-1">
                <div className="h-1.5 bg-gray-200 rounded-full w-full mr-2">
                  <div className="h-1.5 bg-primary rounded-full w-1/4"></div>
                </div>
                <span className="text-xs font-medium text-gray-600">Week 3/12</span>
              </div>
            </div>
            
            <nav>
              <ul className="space-y-1">
                <SidebarItem 
                  icon={<Home size={18} />} 
                  label="Dashboard" 
                  isActive={activeTab === 'dashboard'}
                  onClick={() => setActiveTab('dashboard')}
                />
                <SidebarItem 
                  icon={<Calendar size={18} />} 
                  label="Schedule" 
                  isActive={activeTab === 'schedule'}
                  onClick={() => setActiveTab('schedule')}
                />
                <SidebarItem 
                  icon={<Users size={18} />} 
                  label="Network" 
                  isActive={activeTab === 'network'}
                  onClick={() => setActiveTab('network')}
                />
                <SidebarItem 
                  icon={<Briefcase size={18} />} 
                  label="Jobs" 
                  isActive={activeTab === 'jobs'}
                  onClick={() => setActiveTab('jobs')}
                />
              </ul>
            </nav>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 p-6 md:ml-64">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
      
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const SidebarItem = ({ icon, label, isActive = false, onClick }: SidebarItemProps) => {
  return (
    <li>
      <button 
        onClick={onClick}
        className={`flex items-center space-x-3 px-3 py-2 rounded-lg w-full transition-colors ${
          isActive 
            ? 'bg-primary/10 text-primary' 
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        <span>{icon}</span>
        <span className="font-medium">{label}</span>
      </button>
    </li>
  );
};

interface MilestoneProps {
  title: string;
  date: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
}

const Milestone = ({ title, date, description, isCompleted, isActive }: MilestoneProps) => {
  return (
    <div className="mb-6 relative">
      <div className={`absolute -left-6 w-4 h-4 rounded-full flex items-center justify-center ${
        isCompleted 
          ? 'bg-primary' 
          : isActive 
            ? 'bg-primary/30 border-2 border-primary' 
            : 'bg-gray-200'
      }`}>
        {isCompleted && <Check className="h-3 w-3 text-white" />}
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-1">
          <h4 className={`font-medium ${
            isActive ? 'text-primary' : isCompleted ? 'text-gray-700' : 'text-gray-500'
          }`}>
            {title}
          </h4>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

interface WeeklyTaskSectionProps {
  title: string;
  icon: React.ReactNode;
  tasks: { id: number; text: string; isCompleted: boolean }[];
  onToggle: (taskId: number) => void;
}

const WeeklyTaskSection = ({ title, icon, tasks, onToggle }: WeeklyTaskSectionProps) => {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-3">
        <div className="text-primary">{icon}</div>
        <h3 className="font-medium text-gray-900">{title}</h3>
      </div>
      
      <div className="space-y-2 pl-7">
        {tasks.map((task) => (
          <motion.div 
            key={task.id}
            className="flex items-start space-x-3"
            initial={false}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.button
              onClick={() => onToggle(task.id)}
              className={`w-5 h-5 rounded-md border flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors ${
                task.isCompleted 
                  ? 'bg-primary border-primary' 
                  : 'border-gray-300 hover:border-primary/50'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence>
                {task.isCompleted && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check className="h-3 w-3 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            <p className={`text-sm transition-colors ${
              task.isCompleted ? 'text-gray-500 line-through' : 'text-gray-800'
            }`}>
              {task.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

interface ResourceItemProps {
  title: string;
  type: string;
  icon: React.ReactNode;
  url: string;
}

const ResourceItem = ({ title, type, icon, url }: ResourceItemProps) => {
  return (
    <li>
      <a 
        href={url} 
        className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg -mx-2 transition-colors"
      >
        <div className="bg-primary/10 text-primary rounded-lg p-2 flex-shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="text-xs text-gray-500">{type}</p>
        </div>
      </a>
    </li>
  );
};

interface OpportunityItemProps {
  title: string;
  company: string;
  deadline: string;
}

const OpportunityItem = ({ title, company, deadline }: OpportunityItemProps) => {
  return (
    <li className="hover:bg-gray-50 p-2 rounded-lg -mx-2 transition-colors">
      <div className="flex items-start space-x-3">
        <div className="bg-primary/10 text-primary rounded-lg p-2 flex-shrink-0">
          <Briefcase size={16} />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="text-xs text-gray-700">{company}</p>
          <p className="text-xs text-gray-500 mt-1">Apply {deadline}</p>
        </div>
      </div>
    </li>
  );
};

const ScheduleContent = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Your Schedule</h1>
        <button className="btn-primary text-sm">Add Event</button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              <ScheduleEvent 
                title="React Workshop"
                type="Learning"
                date="Today, 2:00 PM"
                duration="2 hours"
                icon={<GraduationCap size={16} />}
              />
              <ScheduleEvent 
                title="Mock Interview"
                type="Practice"
                date="Tomorrow, 10:00 AM"
                duration="1 hour"
                icon={<MessageSquare size={16} />}
              />
              <ScheduleEvent 
                title="Tech Meetup"
                type="Networking"
                date="Friday, 6:00 PM"
                duration="3 hours"
                icon={<Users size={16} />}
              />
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Weekly Overview</h2>
            <div className="space-y-3">
              <StatCard 
                title="Learning Hours"
                value="12"
                icon={<Clock size={16} />}
              />
              <StatCard 
                title="Events"
                value="5"
                icon={<Calendar size={16} />}
              />
              <StatCard 
                title="Tasks Completed"
                value="8"
                icon={<Check size={16} />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NetworkContent = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Your Network</h1>
        <button className="btn-primary text-sm">Connect</button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Connections</h2>
            <div className="space-y-4">
              <ConnectionCard 
                name="Sarah Chen"
                role="Senior Frontend Developer"
                company="TechCorp"
                mutualConnections={12}
              />
              <ConnectionCard 
                name="Michael Rodriguez"
                role="UI/UX Designer"
                company="Design Studio"
                mutualConnections={8}
              />
              <ConnectionCard 
                name="Emma Wilson"
                role="Tech Lead"
                company="StartupX"
                mutualConnections={15}
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Network Stats</h2>
            <div className="space-y-3">
              <StatCard 
                title="Total Connections"
                value="45"
                icon={<Users size={16} />}
              />
              <StatCard 
                title="Messages"
                value="12"
                icon={<Mail size={16} />}
              />
              <StatCard 
                title="Profile Views"
                value="89"
                icon={<Star size={16} />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const JobsContent = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Job Search</h1>
        <button className="btn-primary text-sm">Track New Job</button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Active Applications</h2>
            <div className="space-y-4">
              <JobCard 
                title="Frontend Developer"
                company="TechCorp"
                location="San Francisco, CA"
                status="Interview"
                date="Interview on March 15"
              />
              <JobCard 
                title="React Developer"
                company="StartupX"
                location="Remote"
                status="Applied"
                date="Applied 2 days ago"
              />
              <JobCard 
                title="UI Engineer"
                company="DesignCo"
                location="New York, NY"
                status="Screening"
                date="Call scheduled"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Application Stats</h2>
            <div className="space-y-3">
              <StatCard 
                title="Active Applications"
                value="8"
                icon={<Briefcase size={16} />}
              />
              <StatCard 
                title="Interviews"
                value="3"
                icon={<MessageSquare size={16} />}
              />
              <StatCard 
                title="Offers"
                value="1"
                icon={<Award size={16} />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;