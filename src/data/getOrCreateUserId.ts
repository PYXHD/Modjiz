import { cookies } from "next/headers";

export async function getOrCreateUserId(): Promise<string> {
  const cookieStore = await cookies();

  let userId = cookieStore.get("mock-user-id")?.value;

  if (!userId) {
    userId = crypto.randomUUID();

    cookieStore.set("mock-user-id", userId, {
      path: "/",
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  return userId;
}
