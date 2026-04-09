export function getMoodLevel(value: number | null) {
  if (value === null || value === 0) return "neutral";
  if (value < 3) return "medium";
  if (value < 4) return "good";
  return "great";
}
