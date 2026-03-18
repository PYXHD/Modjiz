import type { Entry } from "@/types/Entry";

export function upsertEntry(entries: Entry[] | null, entry: Entry): Entry[] {
  if (!entries) return [entry];

  const exists = entries.some((e) => e.date === entry.date);

  if (exists) {
    return entries.map((e) => (e.date === entry.date ? entry : e));
  }

  return [...entries, entry];
}
