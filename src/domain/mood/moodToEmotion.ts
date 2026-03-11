import type { Emotion } from "@/types/Emotion";
import type { EmotionLevel } from "@/types/EmotionLevel";

export function moodToEmotion(level: EmotionLevel): Emotion {
  switch (level) {
    case 0:
      return "pensive";
    case 1:
      return "sad";
    case 2:
      return "meh";
    case 3:
      return "ok";
    case 4:
      return "good";
    case 5:
      return "great";
    default: {
      const exhaustiveCheck: never = level;
      throw new Error(`Unhandled emotion level: ${exhaustiveCheck}`);
    }
  }
}
