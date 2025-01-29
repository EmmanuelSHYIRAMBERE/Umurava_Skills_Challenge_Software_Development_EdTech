import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ChallengeCard from "@/components/reusable/ChallengeCard";
import type { Challenge } from "@/types/challenge";
export default function Challenge() {
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

  const [currentPage, setCurrentPage] = React.useState(1);
  const [filter, setFilter] = React.useState("all");

  const filteredChallenges = React.useMemo(() => {
    if (filter === "all") return challenges;
    return challenges.filter((challenge) => challenge.status === filter);
  }, [filter]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Challenges</h1>
        <p className="text-gray-600">
          Join a challenge or a hackathon to gain valuable work experience
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
          <TabsTrigger value="all" onClick={() => setFilter("all")}>
            All Challenge
          </TabsTrigger>
          <TabsTrigger value="completed" onClick={() => setFilter("completed")}>
            Completed
          </TabsTrigger>
          <TabsTrigger value="open" onClick={() => setFilter("open")}>
            Open
          </TabsTrigger>
          <TabsTrigger value="ongoing" onClick={() => setFilter("ongoing")}>
            Ongoing
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Challenge Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredChallenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          className={currentPage === 1 ? "bg-blue-50" : ""}
        >
          1
        </Button>
        <Button
          variant="outline"
          className={currentPage === 2 ? "bg-blue-50" : ""}
        >
          2
        </Button>
        <Button
          variant="outline"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === 2}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
