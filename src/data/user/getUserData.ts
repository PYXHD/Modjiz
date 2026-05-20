import { getAppMode } from "@/lib/init/getAppMode";
import { sortUserData } from "./sortUserData";
import { fetchMockUserData } from "./fetchMockUserData";
import { initializeMockUserData } from "./initializeMockUserData";

export async function getUserData(userId: string) {
  const mode = await getAppMode();

  if (mode === "mock") {
    let data = await fetchMockUserData(userId);

    if (data.length === 0) {
      data = await initializeMockUserData(userId);
    }

    return sortUserData(data);
  }

  return [];

  // API structure
}
