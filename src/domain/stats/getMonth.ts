import { demoEntries } from "@/data/demoUserData";

function getMonthData(month: string, year: string) {
  const monthEntries = demoEntries.filter((entry) => {
    const entryYear = entry.date.slice(0, 4);
    const entryMonth = entry.date.slice(5, 7);

    return entryYear === year && entryMonth === month;
  });

  return monthEntries;
}

export default getMonthData;
