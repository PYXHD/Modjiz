import { getAppMode } from "@/lib/init/getAppMode";
import type { Entry } from "@/types/Entry";

export async function saveEntry(entry: Entry): Promise<void> {
  const mode = getAppMode();

  if (mode === "mock") {
    await fetch("/api/entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });
  }
}
