import { cookies } from "next/headers";

export type AppMode = "mock" | "real";

export async function getAppMode(): Promise<AppMode> {
  const cookieStore = await cookies();

  return cookieStore.get("app-mode")?.value === "real" ? "real" : "mock";
}
