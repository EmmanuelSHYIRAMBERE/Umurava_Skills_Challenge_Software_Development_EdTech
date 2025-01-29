import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "@/shared/Sidebar";
import Navbar from "@/shared/Navbar";

const TalentDashboardLayout: React.FC = () => {
  return (
    <div className="flex h-full absolute top-0 left-0 bottom-0 right-0 overflow-hidden bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <main className="flex-1 overflow-y-auto px-3">
          <div className="max-w-[1920px] mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default TalentDashboardLayout;
