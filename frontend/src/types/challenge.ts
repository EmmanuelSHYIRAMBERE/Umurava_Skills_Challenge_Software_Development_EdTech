export type ChallengeStatus = "all" | "completed" | "open" | "ongoing";

export interface ChallengeCountStatusCardProps {
  status: ChallengeStatus;
  count: number;
  isActive?: boolean;
  onClick?: () => void;
}
export interface Challenge {
  id: string;
  title: string;
  skills: string[];
  seniority: string;
  status: "Completed" | "Open" | "Ongoing";
  timeline: string;
}
export interface ChallengeCount {
  status: "Completed" | "Open" | "Ongoing";
  count: number;
}

export interface ProjectRequirement {
  text: string;
}

export interface ProductDesign {
  text: string;
}

export interface Deliverable {
  text: string;
}

export interface KeyInstruction {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}
