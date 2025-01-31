export interface ChallengeCardProps {
  title: string;
  status: string;
  skills: string[];
  deadline: string;
}

export interface StatCardProps {
  label: string;
  count: number;
  icon: React.ReactNode;
}

export interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface CommunityButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "secondary";
  className?: string;
}
