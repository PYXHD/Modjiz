import type { Entry } from "@/types/Entry";

export function addTodayEntry(entries: Entry[] | null, entry: Entry): Entry[] {
  if (!entries) {
    return [entry];
  }

  const exists = entries.some((e) => e.date === entry.date);

  if (exists) {
    return entries;
  }

  return [...entries, entry];
}
