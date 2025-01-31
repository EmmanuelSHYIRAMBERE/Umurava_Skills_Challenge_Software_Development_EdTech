import { StatCardProps } from "@/types/community";

const StatCard: React.FC<StatCardProps> = ({ label, count, icon }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow">
      <div className="p-2 bg-blue-100 rounded-lg">{icon}</div>
      <div className="ml-4">
        <h3 className="text-sm font-medium text-gray-900">{label}</h3>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {count}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
