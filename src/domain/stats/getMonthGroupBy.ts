import type { ChartPoint } from "./getMonthChart";

export function getMonthGroupBy(array: ChartPoint[]) {
  if (array.length === 0) return null;

  const counts: Record<number, number> = {};

  for (const { value } of array) {
    if (value === null) continue;
    counts[value] = (counts[value] || 0) + 1;
  }

  if (Object.keys(counts).length === 0) return null;

  let maxCount = 0;
  let maxValue: number | null = null;

  for (const key in counts) {
    const value = Number(key);
    const count = counts[value];

    if (
      count > maxCount ||
      (count === maxCount && value > (maxValue ?? -Infinity))
    ) {
      maxCount = count;
      maxValue = value;
    }
  }

  if (maxCount === 1) return null;

  return {
    value: maxValue,
    count: maxCount,
  };
}
