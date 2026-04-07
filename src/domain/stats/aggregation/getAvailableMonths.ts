import type { Entry } from "@/types/Entry";
import { YearMonth } from "@/types/YearMonth";

export function getAvailableMonths(data: Entry[]) {
  const result: YearMonth[] = [];

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
