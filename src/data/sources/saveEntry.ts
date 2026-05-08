import type { Entry } from "@/types/Entry";

export async function saveEntry(entry: Entry): Promise<void> {
  await fetch("/api/entry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry),
  });
}
