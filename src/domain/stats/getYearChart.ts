import type { Entry } from "@/types/Entry";
import { Year } from "@/types/DateTypes";

import { getYearData } from "./getYearData";
import { average } from "./average";

export type YearChart = {
  month: number;
  value: number | null;
};

export function getYearChart(entries: Entry[], year: Year): YearChart[] {
  const yearEntries = getYearData(entries, year);

  const map = new Map<number, Entry[]>();

  for (const entry of yearEntries) {
    const month = Number(entry.date.slice(5, 7)) - 1;

    if (!map.has(month)) {
      map.set(month, []);
    }

    map.get(month)!.push(entry);
  }

  const result = [];

  for (let month = 0; month < 12; month++) {
    const monthEntries = map.get(month);

    const label = new Date(Number(year), month).toLocaleString("fr-FR", {
      month: "short",
    });

    result.push({
      month,
      label,
      value: monthEntries?.length ? average(monthEntries) : null,
    });
  }

  return result;
}
