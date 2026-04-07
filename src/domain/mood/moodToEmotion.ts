import { MOODS, Emotion, EmotionLevel } from "./config/moods";

export function moodToEmotion(level: EmotionLevel): Emotion {
  const mood = MOODS.find((m) => m.value === level);
  if (!mood) throw new Error(`Invalid mood value: ${level}`);
  return mood.emotion;
}
