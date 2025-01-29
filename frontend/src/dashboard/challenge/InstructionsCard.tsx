import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Globe, Clock, DollarSign } from "lucide-react";

const InstructionItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-3 mb-6">
    <div className="bg-blue-100 p-2 rounded-full">
      <Icon className="w-5 h-5 text-blue-600" />
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const InstructionsCard = () => {
  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>Key Instructions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <InstructionItem
            icon={Mail}
            title="Contact Email"
            description="talent@umurava.africa"
          />
          <InstructionItem
            icon={Globe}
            title="Web design"
            description="Create sleek and modern UI"
          />
          <InstructionItem icon={Clock} title="Timeline" description="7 Days" />
          <InstructionItem
            icon={DollarSign}
            title="Budget Range"
            description="$100 - $400"
          />

          <Button className="w-full">Submit your work</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstructionsCard;
