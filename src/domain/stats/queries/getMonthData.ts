import type { Entry } from "@/types/Entry";

export function getMonthData(entries: Entry[], month: number, year: number) {
  return entries.filter((entry) => {
    const entryYear = Number(entry.date.slice(0, 4));
    const entryMonth = Number(entry.date.slice(5, 7)) - 1;

    return entryYear === year && entryMonth === month;
  });
}
