import type { Entry } from "@/types/Entry";

export function getYearData(entries: Entry[], year: string) {
  const yearEntries = entries.filter((entry) => {
    const entryYear = entry.date.slice(0, 4);
    return entryYear === year;
  });

  return yearEntries;
}
