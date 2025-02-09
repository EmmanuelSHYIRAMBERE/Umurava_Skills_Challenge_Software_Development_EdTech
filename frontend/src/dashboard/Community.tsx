import { useState } from "react";
import WhatsAppModal from "./community/WhatsAppModal";


const Community = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  

  return (
    <div className="container mx-auto px-8 ml-8">
      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div>
        <h1 className="text-2xl font-bold mb-2">Challenges</h1>
        <p className="text-gray-600">
          Explore and participate in our community challenges
        </p>

      </div>
    </div>
  );
};

export default Community;
