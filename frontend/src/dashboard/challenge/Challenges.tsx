import { Card, CardContent } from "@/components/ui/card";
import ProjectHeader from "./ProjectHeader";
import RequirementsList from "./RequirementsList";
import InstructionsCard from "./InstructionsCard";

const Challenges = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <ProjectHeader />

              {/* Project Brief */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Project Brief</h2>
                <p className="text-gray-700">
                  A Fintech company that is developing a Digital Financial
                  Platform designed to streamline and automate all their
                  Financial and HR Operations. Their aim is to serve Large
                  Companies across Africa. The Product Developed will be a
                  subscription-based software that will help them manage their
                  payroll services and process to Employee and pay Workers
                  across Africa.
                </p>
              </section>

              {/* Requirements Sections */}
              <RequirementsList
                title="Product Requirements"
                items={[
                  "UI based on a consistent Design System/tools",
                  "Responsive across multiple devices",
                  "Interactive transitions between pages",
                  "Consistent Design Language",
                ]}
              />

              <RequirementsList
                title="Product Design"
                items={[
                  "Create a Hi-Fi Design for each step",
                  "Design final wireframes to illustrate the basic structure and layout of the web screens",
                  "Design the mobile, tablet/iPad, and web version",
                  "Designing profile, searching and user friendly interfaces for the web and mobile",
                  "Improving user experience through visual designs",
                  "Creating the UED application using appropriate tooling",
                  "Work with the dev team to ensure implementation",
                  "Provide a feedback service for UI development guidance",
                ]}
              />

              <RequirementsList
                title="Tools"
                items={[
                  "Figma",
                  "Material Design System OR Custom Design System",
                ]}
              />

              <RequirementsList
                title="Deliverables"
                items={[
                  "User Interface designs",
                  "Clean Interactive Website",
                  "UED Design using Clean Interactive Designs",
                  "CSS and UI Modern Design Languages",
                ]}
              />

              {/* Notes Section */}
              <section className="mt-8">
                <h2 className="text-xl font-semibold mb-4">NOTES</h2>
                <p className="text-gray-700">
                  The Product Measurement, Accuracy and Release Description for
                  Next three USPs
                </p>
              </section>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Instructions */}
        <div className="lg:col-span-1">
          <InstructionsCard />
        </div>
      </div>
    </div>
  );
};

export default Challenges;
