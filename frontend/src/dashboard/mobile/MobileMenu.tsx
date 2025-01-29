import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationItems } from "./NavigationItems";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden fixed top-4 left-4 z-50"
        >
          <Menu className="h-5 w-5 text-blue-600" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0 bg-blue-600">
        <div className="px-1 py-6">
          <NavigationItems className="flex flex-col gap-2" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
