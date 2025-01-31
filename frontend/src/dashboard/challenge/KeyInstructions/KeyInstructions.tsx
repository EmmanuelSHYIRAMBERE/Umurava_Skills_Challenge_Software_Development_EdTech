import { Mail, Globe, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InstructionCard } from "./InstructionCard";

export const KeyInstructions = () => {
  const instructions = [
    {
      icon: <Mail className="text-blue-600" />,
      title: "talent@umurava.africa",
      subtitle: "Contact Email",
    },
    {
      icon: <Globe className="text-blue-600" />,
      title: "Web design",
      subtitle: "Challenge Category",
    },
    {
      icon: <Calendar className="text-blue-600" />,
      title: "7 Days",
      subtitle: "Duration",
    },
    {
      icon: <DollarSign className="text-blue-600" />,
      title: "$150 - $400",
      subtitle: "Money Prize",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-bold text-xl mb-4">Key Instructions:</h2>
        <div className="space-y-4">
          {instructions.map((instruction, index) => (
            <InstructionCard key={index} {...instruction} />
          ))}
        </div>
      </div>
      <Button className="w-full" size="lg">
        Submit your work
      </Button>
    </div>
  );
};
