import React from "react";
import { Button } from "@/components/ui/button";
import ChallengeCard from "@/components/reusable/ChallengeCard";
import type { Challenge, ChallengeStatus } from "@/types/challenge";
import ChallengeCountStatusCard from "@/dashboard/challenge/ChallengeCountStatusCard";
export default function ChallengeAndHackathons() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filter, setFilter] = React.useState<ChallengeStatus>("all");

  // Sample data - replace with actual data source
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

  const filteredChallenges = React.useMemo(() => {
    if (filter === "all") return challenges;
    return challenges.filter(
      (challenge) => challenge.status.toLowerCase() === filter
    );
  }, [filter, challenges]);

  const getChallengeCount = (status: ChallengeStatus) => {
    if (status === "all") return challenges.length;
    return challenges.filter(
      (challenge) => challenge.status.toLowerCase() === status
    ).length;
  };

  return (
    <div className="container px-8 ml-8">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-lg font-bold">Challenges</h1>
        <p className="text-gray-600">
          Join a challenge or a hackathon to gain valuable work experience
        </p>
      </div>

    
      <div className="flex flex-col md:flex-row gap-3 mb-3">
        {(["all", "completed", "open", "ongoing"] as ChallengeStatus[]).map(
          (status) => (
            <ChallengeCountStatusCard
              key={status}
              status={status}
              count={getChallengeCount(status)}
              isActive={filter === status}
              onClick={() => setFilter(status)}
            />
          )
        )}
      </div>

      {/* Challenge Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredChallenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between gap-2 px-8">
        <Button
          variant="outline"
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === 2}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
