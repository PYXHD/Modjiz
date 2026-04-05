import type { Entry } from "@/types/Entry";

export function getMonthData(entries: Entry[], month: string, year: string) {
  const YearMonth = entries.filter((entry) => {
    const entryYear = entry.date.slice(0, 4);
    const entryMonth = entry.date.slice(5, 7);

    return entryYear === year && entryMonth === month;
  });

  return YearMonth;
}
