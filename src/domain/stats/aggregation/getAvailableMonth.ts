import type { Entry } from "@/types/Entry";
import { MonthEntries } from "@/types/DateTypes";

export function getAvailableMonths(data: Entry[]) {
  const result: MonthEntries[] = [];

  data.forEach((entry) => {
    const d = new Date(entry.date);

    const exists = result.some(
      (r) => r.year === d.getFullYear() && r.month === d.getMonth(),
    );

    if (!exists) {
      result.push({
        year: d.getFullYear(),
        month: d.getMonth(),
      });
    }
  });

  return result;
}
