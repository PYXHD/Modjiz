import { getAppMode } from "@/lib/init/getAppMode";
import type { Entry } from "@/types/Entry";

const STORAGE_KEY = "moodtrack-data";

export async function saveEntry(entry: Entry) {
  const mode = getAppMode();

  if (mode === "mock") {
    if (typeof window === "undefined") return entry;

    const stored = sessionStorage.getItem(STORAGE_KEY);
    const data: Entry[] = stored ? JSON.parse(stored) : [];

    const updated = data.some((e) => e.date === entry.date)
      ? data.map((e) => (e.date === entry.date ? entry : e))
      : [...data, entry];

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    window.dispatchEvent(new Event("mood-updated"));
    return entry;
  }

  if (mode === "real") {
    await fetch("/api/entry", {
      method: "POST",
      body: JSON.stringify(entry),
    });

    return entry;
  }
}
