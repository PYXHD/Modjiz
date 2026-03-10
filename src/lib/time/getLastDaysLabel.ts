const weekdayLabels = ["L", "Ma", "Me", "J", "V", "S", "D"] as const;

export function getLastDaysLabels(today: Date, days: number) {
  const labels: string[] = [];

  for (let i = days - 1; i >= 0; i--) {
    const day = new Date(today);
    day.setDate(today.getDate() - i);

    const jsDay = day.getDay();
    const index = (jsDay + 6) % 7;

    labels.push(weekdayLabels[index]);
  }

  return labels;
}
