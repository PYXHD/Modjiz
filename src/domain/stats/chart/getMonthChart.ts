import type { Entry } from "@/types/Entry";
import { ChartPoint } from "./chart.types";
import { getDaysInMonth } from "../core/getDaysInMonth";

export function getMonthChart(
  entries: Entry[],
  month: number,
  year: number,
): ChartPoint[] {
  const daysInMonth = getDaysInMonth(year, month);

  const map = new Map(
    entries.map((e) => [Number(e.date.slice(8, 10)), e.value]),
  );

  const result: ChartPoint[] = [];

  for (let day = 1; day <= daysInMonth; day++) {
    result.push({
      day,
      value: map.get(day) ?? null,
    });
  }

  return result;
}
