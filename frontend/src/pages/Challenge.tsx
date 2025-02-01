import ChallengeCard from "@/components/reusable/ChallengeCard";
import type { Challenge } from "@/types/challenge";
export default function HomeChallenge() {
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

 

  return (
    <div className="container mx-auto px-4 py-8 my-14">
    

   

      {/* Challenge Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>

   
      
    </div>
  );
}
