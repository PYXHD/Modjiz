import { getAppMode } from "@/lib/init/getAppMode";
import { demoUserData } from "./sources/mock/demoUserData";

import { sortUserData } from "./sortUserData";

const STORAGE_KEY = "moodtrack-data";

export async function getUserData() {
  const mode = getAppMode();

  if (mode === "mock") {
    if (typeof window === "undefined") return [];

    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      const initialData = structuredClone(demoUserData);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
      return sortUserData(initialData);
    }

    const parsed = JSON.parse(stored);
    return sortUserData(parsed);
  }

  return [];

  // API structure
}
