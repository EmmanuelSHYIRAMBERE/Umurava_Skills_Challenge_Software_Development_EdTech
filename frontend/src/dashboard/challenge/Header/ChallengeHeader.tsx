import { Separator } from "@/components/ui/separator";
import { BackButton } from "./BackButton";
import { BreadcrumbPath } from "./BreadcrumbPath";

export const ChallengeHeader = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <BackButton />
        <BreadcrumbPath />
      </div>
      <Separator className="my-4" />
    </div>
  );
};
