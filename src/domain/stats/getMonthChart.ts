import type { Entry } from "@/types/Entry";

export type ChartPoint = {
  day: number;
  value: number | null;
};

export function getMonthChart(entries: Entry[]): ChartPoint[] {
  const daysInMonth = 31;

  const result: ChartPoint[] = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const entry = entries.find((e) => Number(e.date.slice(8, 10)) === day);

    result.push({
      day,
      value: entry ? entry.value : null,
    });
  }

  return result;
}
