export type TrophyType = "stars" | "history" | "month";

export type Trophy = {
  id: string;
  title: string;
  description: string;
  type: TrophyType;
  target: number;
};
