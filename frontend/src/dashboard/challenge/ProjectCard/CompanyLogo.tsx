import logo from "@/assets/White Logo.png";

export const CompanyLogo = () => {
  return (
    <div className="relative">
      <div className="bg-blue-600 rounded-lg p-2 h-36 w-full relative overflow-hidden group hover:shadow-md hover:scale-105 transition duration-2000 flex justify-center items-center">
        <img src={logo} alt="Logo" className="w-48" />
      </div>
    </div>
  );
};
