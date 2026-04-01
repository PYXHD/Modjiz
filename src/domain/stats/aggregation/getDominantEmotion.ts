import type { Entry } from "@/types/Entry";
import type { EmotionLevel } from "@/types/EmotionLevel";

export function getDominantEmotion(
  array: Entry[],
): { value: EmotionLevel; count: number } | null {
  if (array.length === 0) return null;

  const counts: Partial<Record<EmotionLevel, number>> = {};

  for (const { value } of array) {
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
      (count === maxCount && (maxValue === null || value > maxValue))
    ) {
      maxCount = count;
      maxValue = value;
    }
  }

  return {
    value: maxValue!,
    count: maxCount,
  };
}
