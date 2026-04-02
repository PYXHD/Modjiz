import type { Entry } from "@/types/Entry";

export function getAvailableYears(data: Entry[]) {
  const result: number[] = [];

  data.forEach((entry) => {
    const year = new Date(entry.date).getFullYear();

    const exists = result.includes(year);

    if (isNaN(year)) return;

    if (!exists) {
      result.push(year);
    }
  });

  return result;
}
