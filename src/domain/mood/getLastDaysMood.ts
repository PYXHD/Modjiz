import type { Entry } from "@/types/Entry";
import { EmotionLevel } from "./config/moods";

export function getLastDaysMood(entries: Entry[], today: Date, days = 5) {
  const result: EmotionLevel[] = [];

  for (let i = 0; i < days; i++) {
    const day = new Date(today);
    day.setDate(today.getDate() - (days - 1 - i));

    let level: EmotionLevel = 0;

    for (const entry of entries) {
      const entryDate = new Date(entry.date);

      if (entryDate.toDateString() === day.toDateString()) {
        level = entry.value as EmotionLevel;
      }
    }

    result.push(level);
  }

  return result;
}
