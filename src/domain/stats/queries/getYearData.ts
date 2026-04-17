import type { Entry } from "@/types/Entry";

export function getYearData(entries: Entry[], year: number) {
  return entries.filter((entry) => {
    const entryYear = Number(entry.date.slice(0, 4));
    return entryYear === year;
  });
}
