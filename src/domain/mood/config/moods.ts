export const MOODS = [
  {
    emotion: "pensive",
    value: 0,
    color: "var(--color-emotion-pensive)",
    label: "",
  },
  {
    emotion: "sad",
    value: 1,
    color: "var(--color-emotion-sad)",
    label: "pas ouf...",
  },
  {
    emotion: "meh",
    value: 2,
    color: "var(--color-emotion-meh)",
    label: "bof",
  },
  {
    emotion: "ok",
    value: 3,
    color: "var(--color-emotion-ok)",
    label: "ça va.",
  },
  {
    emotion: "good",
    value: 4,
    color: "var(--color-emotion-good)",
    label: "bien.",
  },
  {
    emotion: "great",
    value: 5,
    color: "var(--color-emotion-great)",
    label: "au top !",
  },
] as const;

export type Mood = (typeof MOODS)[number];

export type Emotion = Mood["emotion"];
export type EmotionLevel = Mood["value"];
