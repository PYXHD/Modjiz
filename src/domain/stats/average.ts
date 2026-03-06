import type { Entry } from "@/types/Entry";

function average(entries: Entry[]): number {
  if (entries.length === 0) return 0;

  const sum = entries.reduce((acc, entry) => acc + entry.value, 0);
  return sum / entries.length;
}

export default average;
