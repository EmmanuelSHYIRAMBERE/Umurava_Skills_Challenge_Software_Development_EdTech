import { Card } from "@/components/ui/card";
import { LogoCard } from "./LogoCard";
import { ListSection } from "./ListSection";

export const ProjectCard = () => {
  const requirements = [
    "UX research to understand Project Requirements",
    "Understanding User Needs",
    "Understanding Business Goals",
    "Interview Stakeholders and potential users",
    "Requirements Catalog",
  ];

  const productDesign = [
    "User interface Design for each step",
    "Creating wireframes to outline the basic structure and layout of the web app",
    "Developing highly appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience",
    "Ensuring the web application works seamlessly across web, mobile, and tablet devices",
    "Provide a feedback session for in-development guidance",
  ];

  const deliverables = [
    "User interface Design and User Interaction Diagram",
    "User Interface Mockups",
    "Payroll and HR System design Completed",
  ];

  return (
    <Card className="p-3 space-y-3">
      <LogoCard />

      <div className="space-y-2">
        <h2 className="font-bold text-xl">
          Project Brief - Payroll and HR Management System
        </h2>
        <p className="text-gray-700">
          A Fintech company that is developing a Digital Financial Platform
          designed to revolutionize financial services across Africa. The
          company would like to run a Skills Challenge for Product Design. This
          Fintech Company offers Payroll Management System for Employers and
          Embedded Financial services that connects to employees and tag
          business across Africa.
        </p>

        <ListSection title="Tasks" items={requirements} />
        <ListSection title="Product Design" items={productDesign} />
        <ListSection title="Deliverables" items={deliverables} />

        <div className="space-y-2">
          <h3 className="font-bold text-lg">NOTE:</h3>
          <p className="text-gray-700">
            Fill a Product Requirements Summary and Features Description for
            every UX/UI SKS
          </p>
        </div>
      </div>
    </Card>
  );
};
