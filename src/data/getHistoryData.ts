import { getAppMode } from "@/lib/init/getAppMode";
import { demoHistoryViews } from "./sources/mock/demoHistoryViews";

import { sortHistoryData } from "./sortHistoryData";

const STORAGE_KEY = "history-data";

export async function getHistoryData() {
  const mode = getAppMode();

  if (mode === "mock") {
    const stored = sessionStorage.getItem(STORAGE_KEY);

    if (stored) {
      return sortHistoryData(JSON.parse(stored));
    }

    const initialData = structuredClone(demoHistoryViews);

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));

    return sortHistoryData(initialData);
  }
  return [];

  // API structure
}
