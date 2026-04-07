import { YearChart } from "../chart/chart.types";

export function getBestMonth(data: YearChart[]) {
  let best: YearChart | null = null;

  for (const item of data) {
    if (item.value == null) continue;

    if (!best || item.value > best.value!) {
      best = item;
    }
  }

  return best;
}
