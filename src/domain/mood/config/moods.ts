export const MOODS = [
  {
    emotion: "pensive",
    value: 0,
    color: "var(--color-emotion-pensive)",
    threeColor: "#f4f6fb",
    label: "",
  },
  {
    emotion: "sad",
    value: 1,
    color: "var(--color-emotion-sad)",
    threeColor: "#1f355c",
    label: "pas ouf...",
  },
  {
    emotion: "meh",
    value: 2,
    color: "var(--color-emotion-meh)",
    threeColor: "#3554c5",
    label: "bof",
  },
  {
    emotion: "ok",
    value: 3,
    color: "var(--color-emotion-ok)",
    threeColor: "#6f82d9",
    label: "ça va.",
  },
  {
    emotion: "good",
    value: 4,
    color: "var(--color-emotion-good)",
    threeColor: "#f08bc3",
    label: "bien.",
  },
  {
    emotion: "great",
    value: 5,
    color: "var(--color-emotion-great)",
    threeColor: "#ffb703",
    label: "au top !",
  },
] as const;

export const emotionColors: Record<Emotion, string> = Object.fromEntries(
  MOODS.map((m) => [m.emotion, m.threeColor] as const),
) as Record<Emotion, string>;

export const emotionColorsByValue: Record<`${EmotionLevel}`, string> =
  Object.fromEntries(MOODS.map((m) => [m.value, m.color] as const)) as Record<
    EmotionLevel,
    string
  >;

export type Mood = (typeof MOODS)[number];
export type Emotion = Mood["emotion"];
export type EmotionLevel = Mood["value"];
