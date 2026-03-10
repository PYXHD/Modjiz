import type { Entry } from "@/types/Entry";

export function getLastDaysMood(entries: Entry[], today: Date, days = 5) {
  const result: number[] = [];

  for (let i = 0; i < days; i++) {
    const day = new Date(today);
    day.setDate(today.getDate() - (days - 1 - i));

    let level = 0;

    for (const entry of entries) {
      const entryDate = new Date(entry.date);

      if (entryDate.toDateString() === day.toDateString()) {
        level = entry.value;
      }
    }

    result.push(level);
  }

  return result;
}
