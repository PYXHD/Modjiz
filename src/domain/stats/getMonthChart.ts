import type { Entry } from "@/types/Entry";

export type ChartPoint = {
  day: number;
  value: number;
};

export function getMonthChart(entries: Entry[]): ChartPoint[] {
  return entries.map((e) => ({
    day: Number(e.date.slice(8, 10)),
    value: e.value,
  }));
}
