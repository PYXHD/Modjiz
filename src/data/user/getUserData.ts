import { Entry } from "@/types/Entry";

import { getAppMode } from "@/lib/init/getAppMode";
import { sortUserData } from "./sortUserData";
import { fetchMockUserData } from "./fetchMockUserData";
import { initializeMockUserData } from "./initializeMockUserData";
import { fetchRealUserData } from "./fetchRealUserData";

export async function getUserData(userId: string) {
  const mode = await getAppMode();

  if (mode === null) {
    throw new Error("App mode is not initialized");
  }

  let data: Entry[] = [];

  if (mode === "mock") {
    data = await fetchMockUserData(userId);

    if (data.length === 0) {
      data = await initializeMockUserData(userId);
    }
  } else {
    data = await fetchRealUserData(userId);
  }

  const entries = data.map((item) => ({
    date: item.date,
    value: item.value,
  }));

  return sortUserData(entries);
}
