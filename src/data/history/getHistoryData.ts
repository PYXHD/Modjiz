import { getAppMode } from "@/lib/init/getAppMode";
import { sortHistoryData } from "./sortHistoryData";
import { fetchMockHistoryViews } from "./fetchMockHistoryViews";
import { initializeMockHistoryViews } from "./initializeMockHistoryViews";

export async function getHistoryData(userId: string) {
  const mode = await getAppMode();

  if (mode === "mock") {
    let data = await fetchMockHistoryViews(userId);

    if (data.length === 0) {
      data = await initializeMockHistoryViews(userId);
    }

    const history = data.map((item) => item.date);

    return sortHistoryData(history);
  }

  return [];

  // API structure
}
