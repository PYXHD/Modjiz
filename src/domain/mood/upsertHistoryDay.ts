export async function saveHistoryView(date: string): Promise<void> {
  await fetch("/api/history-view", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date }),
  });
}
