import Dashboard1 from "@/admin/comp/StatisticCard";
import ChallengeCard from "@/components/reusable/ChallengeCard";
import { Challenge } from "@/types/challenge";
import { ChevronRight } from "lucide-react";
import React from "react";

export default function AdminView() {
  const challenges: Challenge[] = [
      {
        id: "1",
        title: "Design a Dashboard for SaasFund, Fintech Product",
        status: "Ongoing",
        skills: ["UI/UX", "Figma", "Design System"],
        seniority: "(Junior, Mid-Level, Senior)",
        timeline: "2 weeks",
      },
      // Duplicate the above challenge 5 more times for demonstration
      {
        id: "2",
        title: "Design a Dashboard for SaasFund, Fintech Product",
        status: "Open",
        skills: ["UI/UX", "Figma", "Design System"],
        seniority: "(Junior, Mid-Level, Senior)",
        timeline: "2 weeks",
      },
      {
        id: "3",
        title: "Design a Dashboard for SaasFund, Fintech Product",
        status: "Open",
        skills: ["UI/UX", "Figma", "Design System"],
        seniority: "(Junior, Mid-Level, Senior)",
        timeline: "2 weeks",
      },
      {
        id: "4",
        title: "Design a Dashboard for SaasFund, Fintech Product",
        status: "Completed",
        skills: ["UI/UX", "Figma", "Design System"],
        seniority: "(Junior, Mid-Level, Senior)",
        timeline: "2 weeks",
      },
      {
        id: "5",
        title: "Design a Dashboard for SaasFund, Fintech Product",
        status: "Ongoing",
        skills: ["UI/UX", "Figma", "Design System"],
        seniority: "(Junior, Mid-Level, Senior)",
        timeline: "2 weeks",
      },
      {
        id: "6",
        title: "Design a Dashboard for SaasFund, Fintech Product",
        status: "Open",
        skills: ["UI/UX", "Figma", "Design System"],
        seniority: "(Junior, Mid-Level, Senior)",
        timeline: "2 weeks",
      },
    ];
  
    
    const [filter, setFilter] = React.useState("all");
  
    const filteredChallenges = React.useMemo(() => {
      if (filter === "all") return challenges;
      return challenges.filter((challenge) => challenge.status === filter);
    }, [filter]);
  
  return (
    <div className="bg-gray-50 px-8 mt-4 ml-8">
      <Dashboard1 />
      <div className="flex justify-between items-center mt-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Challenges
        </h2>
        <a
          href="#"
          className="flex items-center text-blue-600 text-sm hover:underline"
        >
          See all
          <ChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {filteredChallenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
