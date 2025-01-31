import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative w-[275px] md:w-full max-w-xl left-12 lg:left-0">
      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input placeholder="Search..." className="w-full pl-8 bg-background" />
    </div>
  );
};
