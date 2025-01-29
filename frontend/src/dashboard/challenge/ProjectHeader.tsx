import logo from "@/assets/White Logo.png";

const ProjectHeader = () => {
  return (
    <div className="mb-8">
      <div className="bg-blue-600 rounded-lg p-6 mb-6 flex items-center justify-center">
        <img src={logo} alt="Umurava Logo" className="w-48" />
      </div>
      <h1 className="text-2xl font-bold mb-2">
        Payroll and HR Management System
      </h1>
    </div>
  );
};

export default ProjectHeader;
