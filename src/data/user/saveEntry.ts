import type { Entry } from "@/types/Entry";

export async function saveEntry(entry: Entry): Promise<void> {
  console.time("saveEntry");

  const response = await fetch("/api/entry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry),
  });

  if (!response.ok) {
    throw new Error("Failed to save entry");
  }

  console.timeEnd("saveEntry");
}
