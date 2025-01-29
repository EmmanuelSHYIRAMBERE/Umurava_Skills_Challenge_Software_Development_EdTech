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
