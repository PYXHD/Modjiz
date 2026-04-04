import type { Entry } from "@/types/Entry";

import { getYearData } from "../queries/getYearData";
import { average } from "../core/average";

export type YearChart = {
  month: number;
  label: string;
  value: number | null;
};

export function getYearChart(entries: Entry[], year: string): YearChart[] {
  const yearEntries = getYearData(entries, year);

  const map = new Map<number, Entry[]>();

  for (const entry of yearEntries) {
    const month = Number(entry.date.slice(5, 7)) - 1;

    if (!map.has(month)) {
      map.set(month, []);
    }

    map.get(month)!.push(entry);
  }

  const result: YearChart[] = [];

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
