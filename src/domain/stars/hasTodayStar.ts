import type { Entry } from "@/types/Entry";

function hasTodayStar(entries: Entry[]): boolean {
  const today = new Date().toISOString().slice(0, 10);

  return entries.some((entry) => entry.date === today);
}

export default hasTodayStar;
