export function upsertHistoryDay(
  history: string[] | null,
  date: string,
): string[] {
  if (!history) return [date];

  const exists = history.includes(date);

  if (exists) return history;

  return [...history, date];
}
