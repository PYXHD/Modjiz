import type { EmotionLevel } from "@/types/EmotionLevel";

export type MoodOption = {
  value: EmotionLevel;
  color: string;
  label?: string;
};

export const MOODS: MoodOption[] = [
  { value: 0, color: "var(--color-emotion-sad)" },
  { value: 1, color: "var(--color-emotion-sad)", label: "pas ouf..." },
  { value: 2, color: "var(--color-emotion-meh)", label: "bof" },
  { value: 3, color: "var(--color-emotion-ok)", label: "ça va." },
  { value: 4, color: "var(--color-emotion-good)", label: "bien." },
  { value: 5, color: "var(--color-emotion-great)", label: "au top !" },
];
