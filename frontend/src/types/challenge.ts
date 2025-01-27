export interface Challenge {
  id: string;
  title: string;
  skills: string[];
  seniority: "Junior" | "Intermediate" | "Senior";
  timeline: string;
}
export interface ChallengeCount {
  status: "Completed" | "Open" | "Ongoing";
  count: number;
}
