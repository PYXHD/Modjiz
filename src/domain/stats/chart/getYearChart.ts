import type { Entry } from "@/types/Entry";
import { YearChart } from "./chart.types";

import { getYearData } from "../queries/getYearData";
import { average } from "../core/average";

export function getYearChart(entries: Entry[], year: number): YearChart[] {
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
    const YearMonth = map.get(month);

    const label = new Date(year, month).toLocaleString("fr-FR", {
      month: "short",
    });

    result.push({
      month,
      label,
      value: YearMonth?.length ? average(YearMonth) : null,
    });
  }

  return result;
}
