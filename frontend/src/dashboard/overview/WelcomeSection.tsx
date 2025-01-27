import { Button } from "@/components/ui/button";

export default function WelcomeSection() {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">Welcome back Hilaire,</h1>
      <Button variant="default">View Profile</Button>
    </div>
  );
}
