import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Send } from "lucide-react";
import CommunityButton from "./CommunityButton";
import { WhatsAppModalProps } from "@/types/community";

const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-12 rounded-md mt-12">
        <div className="flex flex-col items-center space-y-8">
          <div className="p-12 bg-blue-100 rounded-full">
            <Send className="w-8 h-w-8 text-blue-600" />
          </div>
          <div className="grid">
            <h2 className="text-xl font-bold text-center">
              Join our WhatsApp community
            </h2>

            <p className="text-gray-600 text-center">
              Get notified on the latest projects
              <br />
              and hackathons
            </p>
          </div>

          <CommunityButton className="px-12">Join</CommunityButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppModal;
