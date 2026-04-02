import type { Entry } from "@/types/Entry";
import type { Year } from "@/types/DateTypes";

export function getYearData(entries: Entry[], year: Year) {
  const yearEntries = entries.filter((entry) => {
    const entryYear = entry.date.slice(0, 4);
    return entryYear === year;
  });

  return yearEntries;
}
