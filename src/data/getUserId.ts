import { cookies } from "next/headers";

export async function getUserId(): Promise<string> {
  const cookieStore = await cookies();

  let userId = cookieStore.get("mock-user-id")?.value;

  if (!userId) {
    throw new Error("mock-user-id is missing");
  }

  return userId;
}
