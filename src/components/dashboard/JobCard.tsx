interface JobCardProps {
  title: string;
  company: string;
  location: string;
  status: string;
  date: string;
}

const JobCard = ({ title, company, location, status, date }: JobCardProps) => {
  return (
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <span className="text-primary font-medium">{company.charAt(0)}</span>
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{company}</p>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="flex items-center space-x-2 mt-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
            {status}
          </span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;