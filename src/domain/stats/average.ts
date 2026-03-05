import Entry from "@/types/Entry";

function average(entries: Entry[]): number {
  if (entries.length === 0) return 0;

  return entries.reduce((acc, entry) => acc + entry.value, 0) / entries.length;
}

export default average;
