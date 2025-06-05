interface ConnectionCardProps {
  name: string;
  role: string;
  company: string;
  mutualConnections: number;
}

const ConnectionCard = ({ name, role, company, mutualConnections }: ConnectionCardProps) => {
  return (
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-medium">
        {name.charAt(0)}
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm text-gray-500">{company}</p>
        <p className="text-xs text-gray-500 mt-1">{mutualConnections} mutual connections</p>
      </div>
      <button className="btn-secondary text-sm py-1 px-3">Connect</button>
    </div>
  );
};

export default ConnectionCard;