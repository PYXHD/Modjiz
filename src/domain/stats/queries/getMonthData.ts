import type { Entry } from "@/types/Entry";
import type { Year, Month } from "@/types/DateTypes";

export function getMonthData(entries: Entry[], month: Month, year: Year) {
  const monthEntries = entries.filter((entry) => {
    const entryYear = entry.date.slice(0, 4);
    const entryMonth = entry.date.slice(5, 7);

    return entryYear === year && entryMonth === month;
  });

  return monthEntries;
}
