import React from "react";

interface RequirementsListProps {
  title: string;
  items: string[];
}

const RequirementsList: React.FC<RequirementsListProps> = ({
  title,
  items,
}) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="list-disc list-inside space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RequirementsList;
