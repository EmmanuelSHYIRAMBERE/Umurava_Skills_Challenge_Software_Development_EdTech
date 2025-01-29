import { Layers, CheckCircle, Lock, Clock } from "lucide-react";
import StatCard from "./StatCard";

const StatsSection: React.FC = () => {
  const stats = [
    {
      label: "All Challenge",
      count: 12,
      icon: <Layers className="w-5 h-5 text-blue-600" />,
    },
    {
      label: "Completed",
      count: 4,
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
    },
    {
      label: "Open",
      count: 6,
      icon: <Lock className="w-5 h-5 text-blue-600" />,
    },
    {
      label: "Recent Challenge",
      count: 2,
      icon: <Clock className="w-5 h-5 text-blue-600" />,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsSection;
