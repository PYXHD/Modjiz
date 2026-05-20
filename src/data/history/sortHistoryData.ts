import type { ISODate } from "@/types/Time";

export function sortHistoryData(data: ISODate[]): ISODate[] {
  const sortedData = [...data].sort((a, b) => a.localeCompare(b));

  return sortedData;
}
