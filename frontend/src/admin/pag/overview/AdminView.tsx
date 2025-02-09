import Dashboard1 from "@/admin/comp/StatisticCard";
import ChallengeCard from "@/components/reusable/ChallengeCard";
import { SERVER_BASE_URL } from "@/constansts/constants";
import { Challenge } from "@/types/challenge";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import  { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

export default function AdminView() {
   const [challenges, setChallenges] = useState<Challenge[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

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

       // Sort challenges by createdAt, newest first
       const sortedChallenges = response.data.challenges.sort(
         (a: Challenge, b: Challenge) => {
           return (
             new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
           );
         }
       );

       setChallenges(sortedChallenges);
     } catch (error) {
       console.error("Error fetching challenges:", error);
       setError("Failed to fetch challenges. Please try again later.");
     } finally {
       setIsLoading(false);
     }
   };

   fetchChallenges();
 }, []);

   if (isLoading) {
     return (
       <div className="flex items-center justify-center h-screen">
         <Oval color="#00BFFF" height={40} width={40} />
       </div>
     );
   }

   if (error) {
     return <div>{error}</div>;
   }



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
      <div className="container mx-auto px-4 py-8">
        {challenges.length === 0 ? (
          <div>No available challenges.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8  max-w-6xl mx-auto">
            {challenges.map((challenge) => (
              <ChallengeCard key={challenge._id} challenge={challenge} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
