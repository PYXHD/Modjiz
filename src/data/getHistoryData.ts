import { getAppMode } from "@/lib/init/getAppMode";
import { demoHistoryViews } from "./sources/mock/demoHistoryViews";

const STORAGE_KEY = "history-data";

export async function getHistoryData() {
  const mode = getAppMode();

  if (mode === "mock") {
    const stored = sessionStorage.getItem(STORAGE_KEY);

    if (stored) {
      return JSON.parse(stored);
    }

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(demoHistoryViews));

    return structuredClone(demoHistoryViews);
  }
  return [];

  // API structure
}
