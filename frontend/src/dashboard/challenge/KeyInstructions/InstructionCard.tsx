import { Card, CardContent } from "@/components/ui/card";

interface InstructionCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export const InstructionCard = ({
  icon,
  title,
  subtitle,
}: InstructionCardProps) => {
  return (
    <Card className="p-4">
      <CardContent className="flex items-start gap-4 p-0">
        <div className="bg-blue-100 p-2 rounded-full">{icon}</div>
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-gray-600 text-sm">{subtitle}</p>
        </div>
      </CardContent>
    </Card>
  );
};
