import { MOODS, Emotion, EmotionLevel } from "./config/moods";

export function moodToEmotion(level: EmotionLevel): Emotion {
  return MOODS.find((m) => m.value === level)?.emotion ?? "pensive";
}
