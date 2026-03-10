import type { Entry } from "@/types/Entry";

export function addTodayEntry(entries: Entry[], entry: Entry): Entry[] {
  const exists = entries.some((e) => e.date === entry.date);

  if (exists) {
    return entries;
  }

  return [...entries, entry];
}
