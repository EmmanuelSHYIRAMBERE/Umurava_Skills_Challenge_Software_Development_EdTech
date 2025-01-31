import React from "react";
import { FileText, Users } from "lucide-react";

const MetricCard = ({ title, value, percentage, period, icon: Icon }) => (
  <div className="bg-white rounded-lg p-4 border border-gray-200">
    <div className="flex justify-end mb-4">
      <div className="text-sm text-gray-500 flex items-center gap-1">
        {period}
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
    <div className="space-y-1">
      <div className="flex items-center gap-8">
        <div className="bg-blue-100 p-2 rounded-lg">
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
        <div>
          <span className="text-sm text-gray-500 block">{title}</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold">
              {value.toLocaleString()}
            </span>
            <span className="text-emerald-500 text-sm flex items-center">
              ↑ {percentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MetricsDashboard = () => {
  const topRowMetrics = [
    {
      title: "Total Challenge",
      value: 29405,
      percentage: 15,
      period: "This Week",
      icon: FileText,
    },
    {
      title: "Total Participants",
      value: 29405,
      percentage: 15,
      period: "This Week",
      icon: Users,
    },
  ];

  const bottomRowMetrics = [
    {
      title: "Completed Challenges",
      value: 5837,
      percentage: 15,
      period: "Last 30 days",
      icon: FileText,
    },
    {
      title: "Open Challenges",
      value: 5837,
      percentage: 15,
      period: "Last 30 days",
      icon: FileText,
    },
    {
      title: "Ongoing Challenges",
      value: 5837,
      percentage: 15,
      period: "Last 30 days",
      icon: FileText,
    },
  ];

  return (
    <div className="">
      <div>
        <h1 className="text-1xl font-medium mb-">Welcome back Hilaire,</h1>
        <p className="text-sm text-gray-600 mb-6">
          Build Work Experience through Skills Challenges
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Top row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topRowMetrics.map((metric, index) => (
            <MetricCard key={`top-${index}`} {...metric} />
          ))}
        </div>

        {/* Bottom row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomRowMetrics.map((metric, index) => (
            <MetricCard key={`bottom-${index}`} {...metric} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsDashboard;
