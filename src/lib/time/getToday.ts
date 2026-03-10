import { getAppMode } from "../init/getAppMode";

export function getToday(): Date {
  const mode = getAppMode();

  const today = mode === "mock" ? new Date("2026-03-05") : new Date();

  today.setHours(0, 0, 0, 0);

  return today;
}
