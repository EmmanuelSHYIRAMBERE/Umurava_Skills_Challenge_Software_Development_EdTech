import { Button } from "@/components/ui/button";

export default function WelcomeSection() {
  return (
    <div className="flex items-center justify-between mb-4 lg:mb-2">
      <div className="grid items-center gap-3">
        <h1 className="text-2xl font-bold">Welcome back Hilaire,</h1>
        <h4 className="text-sm text-gray-500">
          Build Work Experience through Skills Challenges
        </h4>
      </div>
      <Button variant="default" className="bg-blue-600 text-white">
        View Profile
      </Button>
    </div>
  );
}
