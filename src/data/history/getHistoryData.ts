import { HistoryViewsDB } from "./types/HistoryViewsDB";

import { getAppMode } from "@/lib/init/getAppMode";
import { sortHistoryData } from "./sortHistoryData";
import { fetchMockHistoryViews } from "./fetchMockHistoryViews";
import { initializeMockHistoryViews } from "./initializeMockHistoryViews";
import { fetchRealHistoryViews } from "./fetchRealHistoryViews";

export async function getHistoryData(userId: string) {
  const mode = await getAppMode();

  if (mode === null) {
    throw new Error("App mode is not initialized");
  }

  let data: HistoryViewsDB[] = [];

  if (mode === "mock") {
    data = await fetchMockHistoryViews(userId);

    if (data.length === 0) {
      data = await initializeMockHistoryViews(userId);
    }
  } else {
    data = await fetchRealHistoryViews(userId);
  }

  const history = data.map((item) => item.date);

  return sortHistoryData(history);
}
