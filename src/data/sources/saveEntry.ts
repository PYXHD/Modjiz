import { getAppMode } from "@/lib/init/getAppMode";

import type { Entry } from "@/types/Entry";

export async function saveEntry(entry: Entry) {
  const mode = getAppMode();

  if (mode === "mock") {
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
