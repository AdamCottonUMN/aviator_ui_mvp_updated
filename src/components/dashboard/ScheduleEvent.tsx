import { DivideIcon as LucideIcon } from 'lucide-react';

interface ScheduleEventProps {
  title: string;
  type: string;
  date: string;
  duration: string;
  icon: React.ReactNode;
}

const ScheduleEvent = ({ title, type, date, duration, icon }: ScheduleEventProps) => {
  return (
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="bg-primary/10 text-primary rounded-lg p-2 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{type}</p>
        <div className="flex items-center space-x-3 mt-1 text-sm text-gray-500">
          <span>{date}</span>
          <span>•</span>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default ScheduleEvent;