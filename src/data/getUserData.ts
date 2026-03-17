import { getAppMode } from "@/lib/init/getAppMode";
import { demoUserData } from "./sources/mock/demoUserData";

const STORAGE_KEY = "moodtrack-data";

export async function getUserData() {
  const mode = getAppMode();

  if (mode === "mock") {
    const stored = sessionStorage.getItem(STORAGE_KEY);

    if (stored) {
      return JSON.parse(stored);
    }

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(demoUserData));

    return structuredClone(demoUserData);
  }
  return [];

  // API structure
}
