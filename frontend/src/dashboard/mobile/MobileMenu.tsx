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
          className="lg:hidden fixed left-4 z-50 h-10 w-10 bg-gray-100 rounded-full"
        >
          <Menu className="h-12 w-12 text-blue-600" />
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
