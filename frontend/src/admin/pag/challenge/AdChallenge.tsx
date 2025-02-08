import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ChallengeCard from "@/components/reusable/ChallengeCard";
import type { Challenge, ChallengeStatus } from "@/types/challenge";
import ChallengeCountStatusCard from "@/dashboard/challenge/ChallengeCountStatusCard";
import { Oval } from "react-loader-spinner";
import { SERVER_BASE_URL } from "@/constansts/constants";
import axios from "axios";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdChallenge() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<ChallengeStatus>("all");
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChallenges = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `${SERVER_BASE_URL}/api/v1/challenges`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("admin data",response.data.challenges)
        setChallenges(response.data.challenges);
      } catch (error) {
        console.error("Error fetching challenges:", error);
        setError("Failed to fetch challenges. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  const filteredChallenges = React.useMemo(() => {
    if (filter === "all") return challenges;
    return challenges.filter(
      (challenge) => challenge.status.toLowerCase() === filter
    );
  }, [filter, challenges]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Oval color="#00BFFF" height={40} width={40} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600">
        {error}
      </div>
    );
  }

  const getChallengeCount = (status: ChallengeStatus) => {
    if (status === "all") return challenges.length;
    return challenges.filter(
      (challenge) => challenge.status.toLowerCase() === status
    ).length;
  };

  return (
    <div className="min-h-screen flex flex-col  md:px-5 bg-gray-50  ml-8">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <div className="grid grid-cols-2 md:flex text-xs md:flex-row gap-1.5 ">
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
        <button
          className="flex items-center justify-center px-2 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 text-xs shadow-sm"
          onClick={() => navigate("create")}
        >
          <Plus size={16} />
          <span>Create New Challenge</span>
        </button>
      </div>

      <div className="flex-grow">
        {filteredChallenges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredChallenges.map((challenge) => (
              <ChallengeCard key={challenge._id} challenge={challenge} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg shadow-sm h-64">
            <div className="text-gray-600 text-xl font-medium mb-3">
              No Challenges Available
            </div>
            <p className="text-gray-500">
              {filter === "all"
                ? "There are currently no challenges available."
                : `There are no ${filter} challenges at the moment.`}
            </p>
          </div>
        )}
      </div>

      {filteredChallenges.length > 0 && (
        <div className="flex items-center justify-center gap-4 mt-6 pb-4">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-32"
          >
            Previous
          </Button>
          <span className="text-gray-600 font-medium">Page {currentPage}</span>
          <Button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === 2}
            className="w-32 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
