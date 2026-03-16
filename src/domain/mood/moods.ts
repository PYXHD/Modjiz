import type { EmotionLevel } from "@/types/EmotionLevel";

export type MoodOption = {
  value: EmotionLevel;
  color: string;
};

export const MOODS: MoodOption[] = [
  { value: 0, color: "var(--color-emotion-bad)" },
  { value: 1, color: "var(--color-emotion-bad)" },
  { value: 2, color: "var(--color-emotion-meh)" },
  { value: 3, color: "var(--color-emotion-ok)" },
  { value: 4, color: "var(--color-emotion-good)" },
  { value: 5, color: "var(--color-emotion-great)" },
];
