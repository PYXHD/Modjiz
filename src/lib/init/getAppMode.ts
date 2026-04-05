type AppMode = "mock" | "real";

export function getAppMode(): AppMode {
  if (typeof window === "undefined") return "mock";

  return localStorage.getItem("app-mode") === "real" ? "real" : "mock";
}
