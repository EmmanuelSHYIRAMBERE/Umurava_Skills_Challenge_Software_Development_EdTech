interface ListSectionProps {
  title: string;
  items: string[];
}

export const ListSection = ({ title, items }: ListSectionProps) => {
  return (
    <div className="space-y-2">
      <h3 className="font-bold text-lg">{title}</h3>
      <ul className="list-disc list-inside space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
