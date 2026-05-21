import type { Entry } from "@/types/Entry";

export function sortUserData(data: Entry[]): Entry[] {
  const sortedData = [...data].sort((a, b) => a.date.localeCompare(b.date));

  return sortedData;
}
