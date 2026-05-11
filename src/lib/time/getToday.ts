import { getAppMode } from "../init/getAppMode";

export async function getToday(): Promise<Date> {
  const mode = await getAppMode();

  const today = mode === "mock" ? new Date(2026, 2, 5) : new Date();

  today.setHours(0, 0, 0, 0);

  return today;
}
