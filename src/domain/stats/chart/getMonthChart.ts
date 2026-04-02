import type { Entry } from "@/types/Entry";
import { getDaysInMonth } from "../core/getDaysInMonth";

export type ChartPoint = {
  day: number;
  value: number | null;
};

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
