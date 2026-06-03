import { cookies } from "next/headers";

export type AppMode = "mock" | "real" | null;

export async function getAppMode(): Promise<AppMode> {
  const cookieStore = await cookies();

  const value = cookieStore.get("app-mode")?.value;

  if (value === "mock") return "mock";
  if (value === "real") return "real";

  return null;
}
