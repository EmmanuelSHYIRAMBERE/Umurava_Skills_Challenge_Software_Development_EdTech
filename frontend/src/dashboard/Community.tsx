import { useState } from "react";
import WhatsAppModal from "./community/WhatsAppModal";
import StatsSection from "./community/StatsSection";
import ChallengesGrid from "./community/ChallengesGrid";
import { Challenge } from "@/types/challenge";

const Community = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const challengesData: Challenge[] = [
    {
      id: "1",
      title: "Design a Dashboard",
      status: "Open",
      skills: ["UI/UX", "Figma", "Design System"],
      timeline: "2 weeks",
      seniority: "Mid-Level",
    },
    {
      id: "2",
      title: "Build an API",
      status: "Open",
      skills: ["Node.js", "Express", "MongoDB"],
      timeline: "3 weeks",
      seniority: "Senior",
    },
    {
      id: "3",
      title: "Mobile App",
      status: "Completed",
      skills: ["React Native", "TypeScript", "Firebase"],
      timeline: "4 weeks",
      seniority: "Senior",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div>
        <h1 className="text-2xl font-bold mb-2">Challenges</h1>
        <p className="text-gray-600">
          Explore and participate in our community challenges
        </p>

        <StatsSection />

        <ChallengesGrid challenges={challengesData} />
      </div>
    </div>
  );
};

export default Community;
