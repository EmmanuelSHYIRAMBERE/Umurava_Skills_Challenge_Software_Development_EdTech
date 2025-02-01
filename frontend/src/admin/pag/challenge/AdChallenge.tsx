import ChallengeCard from "@/components/reusable/ChallengeCard";
import { Challenge } from "@/types/challenge";
import { FileText, Clock, Plus } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdChallenge = () => {
  const tasks = [
    {
      label: "All Challenge",
      count: 0,
      icon: FileText,
      className: "bg-blue-50 text-blue-600",
    },
    {
      label: "Completed Challenge",
      count: 0,
      icon: FileText,
      className: "bg-gray-50 text-gray-600",
    },
    {
      label: "Open Challenge",
      count: 0,
      icon: FileText,
      className: "bg-gray-50 text-gray-600",
    },
    {
      label: "Ongoing Challenge",
      count: 0,
      icon: Clock,
      className: "bg-gray-50 text-gray-600",
    },
  ];

  const navigate = useNavigate();
  const [filter] = React.useState("all");
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 3;

  const challenges = React.useMemo<Challenge[]>(
    () => [
      {
        id: "1",
        title: "Design a Dashboard for SaasFund, Fintech Product",
        status: "Ongoing",
        skills: ["UI/UX", "Figma", "Design System"],
        seniority: "(Junior, Mid-Level, Senior)",
        timeline: "2 weeks",
      },
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
    ],
    []
  );

  const filteredChallenges = React.useMemo(() => {
    if (filter === "all") return challenges;
    return challenges.filter((challenge) => challenge.status === filter);
  }, [filter, challenges]);

  const paginatedChallenges = filteredChallenges.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredChallenges.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <section className="py-4 mb-4">
        <div className="flex items-center gap-2 min-w-max px-8 ml-8 ">
          {tasks.map((challenge, index) => (
            <button
              key={index}
              className={`flex items-center border gap-1.5 px-3 py-1.5 rounded-lg ${challenge.className} transition-colors duration-200 hover:bg-gray-100 text-sm whitespace-nowrap flex-1`}
            >
              <challenge.icon size={14} className="flex-shrink-0" />
              <span className="font-medium">{challenge.label}</span>
              <span className="bg-white px-1.5 py-0.5 rounded-full text-xs flex-shrink-0">
                {challenge.count}
              </span>
            </button>
          ))}

          <button
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 text-sm whitespace-nowrap flex-shrink-0"
            onClick={() => navigate("create")}
          >
            <Plus size={14} />
            <span>Create New Challenge</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 ml-8 px-8">
          {paginatedChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
        <div className="flex justify-between mt-4 ml-8 px-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default AdChallenge;
