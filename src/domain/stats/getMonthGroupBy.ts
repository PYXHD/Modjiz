import type { ChartPoint } from "./getMonthChart";
import type { EmotionLevel } from "@/types/EmotionLevel";

export function getMonthGroupBy(
  array: ChartPoint[],
): { value: EmotionLevel; count: number } | null {
  if (array.length === 0) return null;

  const counts: Partial<Record<EmotionLevel, number>> = {};

  for (const { value } of array) {
    if (value === null) continue;
    counts[value as EmotionLevel] = (counts[value as EmotionLevel] || 0) + 1;
  }

  if (Object.keys(counts).length === 0) return null;

  let maxCount = 0;
  let maxValue: EmotionLevel | null = null;

  for (const key in counts) {
    const value = Number(key) as EmotionLevel;
    const count = counts[value]!;

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
    value: maxValue!,
    count: maxCount,
  };
}
