import type { Entry } from "@/types/Entry";
import { MonthEntries } from "@/types/DateTypes";

export function getAvailableMonths(data: Entry[]) {
  const result: MonthEntries[] = [];

  data.forEach((entry) => {
    const d = new Date(entry.date);

    const year = d.getFullYear();
    const month = d.getMonth();

    if (isNaN(year) || isNaN(month)) return;

    const exists = result.some((r) => r.year === year && r.month === month);

    if (!exists) {
      result.push({ month, year });
    }
  });

  return result;
}
