import { getAppMode } from "@/lib/init/getAppMode";
import { upsertEntry } from "@/domain/mood/upsertEntry";
import type { Entry } from "@/types/Entry";

const STORAGE_KEY = "moodtrack-data";

export async function saveEntry(entry: Entry): Promise<Entry[]> {
  const mode = getAppMode();

  if (mode === "mock") {
    if (typeof window === "undefined") return [];

    const stored = localStorage.getItem(STORAGE_KEY);
    const data: Entry[] = stored ? JSON.parse(stored) : [];

    const updated = upsertEntry(data, entry);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    window.dispatchEvent(new Event("mood-updated"));

    return updated;
  }

  if (mode === "real") {
    await fetch("/api/entry", {
      method: "POST",
      body: JSON.stringify(entry),
    });

    const res = await fetch("/api/entry");
    return res.json();
  }

  return [];
}
