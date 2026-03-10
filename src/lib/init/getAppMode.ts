import type { AppModeType } from "@/types/AppModeType";

export function getAppMode(): AppModeType {
  if (typeof window === "undefined") return "mock";

  return localStorage.getItem("app-mode") === "real" ? "real" : "mock";
}
