import { getAppMode } from "@/lib/init/getAppMode";
import { demoUserData } from "./sources/mock/demoUserData";

const STORAGE_KEY = "moodtrack-data";

export async function getUserData() {
  const mode = getAppMode();

  if (mode === "mock") {
    if (typeof window === "undefined") return [];

    let stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      const initialData = structuredClone(demoUserData);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
      return initialData;
    }

    return JSON.parse(stored);
  }

  return [];

  // API structure
}
