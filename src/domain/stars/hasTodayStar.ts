import type { Entry } from "@/types/Entry";

export function hasTodayStar(entries: Entry[]): boolean {
  const today = new Date().toLocaleDateString("en-CA");

  return entries.some((entry) => entry.date === today);
}
