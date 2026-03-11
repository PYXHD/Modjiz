import { getAppMode } from "@/lib/init/getAppMode";
import { demoUserData } from "./sources/mock/demoUserData";

export async function getUserData() {
  const mode = getAppMode();

  if (mode === "mock") {
    return structuredClone(demoUserData);
  }
  return [];
  //   const res = await fetch("/api/user");

  //   if (!res.ok) {
  //     throw new Error("Failed to fetch user data");
  //   }

  //   return res.json;
}
