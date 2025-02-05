import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Copy } from "lucide-react";

import { useToast } from "@/hooks/use-toast";


interface ReferLinkProps {
  isAdmin: boolean;
  isActive: (path: string) => string;
}

const ReferLink: React.FC<ReferLinkProps> = ({ isAdmin, isActive }) => {
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [copied, setCopied] = useState(false);
const { toast } = useToast();
  const referralLink = `${window.location.origin}/refer/${crypto.randomUUID()}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowShareDialog(true);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "The referral link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying the link manually.",
        variant: "destructive",
      });
      console.error(err);
    }
  };

  return (
    <>
      <Link
        to={isAdmin ? "/admin/refer" : "/dashboard/refer"}
        onClick={handleClick}
      >
        <div
          className={`flex items-center p-2 rounded-md hover:bg-white hover:text-blue-500 ${isActive(
            isAdmin ? "/admin/refer" : "/dashboard/refer"
          )}`}
        >
          <FaUserFriends className="mr-2" />
          Refer family & friends
        </div>
      </Link>

      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Share Referral Link
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="flex items-center space-x-2">
              <Input
                readOnly
                value={referralLink}
                className="flex-1 px-3 py-2 text-sm"
              />
              <Button
                size="icon"
                variant="outline"
                onClick={copyToClipboard}
                className="px-3"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>

            <div className="flex justify-between space-x-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({
                        title: "Join me!",
                        text: "Check out this platform",
                        url: referralLink,
                      })
                      .catch(console.error);
                  }
                }}
              >
                Share
              </Button>
              <Button className="flex-1" onClick={copyToClipboard}>
                Copy Link
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReferLink;
