import type { Entry } from "@/types/Entry";
import { YearMonth } from "@/types/YearMonth";

export function getAvailableMonths(data: Entry[]) {
  const result: YearMonth[] = [];

  data.forEach((entry) => {
    const year = Number(entry.date.slice(0, 4));
    const month = Number(entry.date.slice(5, 7)) - 1;

    const exists = result.some((r) => r.year === year && r.month === month);

    if (!exists) {
      result.push({ month, year });
    }
  });

  return result;
}
