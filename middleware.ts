// middleware.ts

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const mode = request.cookies.get("app-mode")?.value ?? "mock";

  if (mode === "mock") {
    const hasMockUserId = request.cookies.has("mock-user-id");

    if (!hasMockUserId) {
      response.cookies.set("mock-user-id", crypto.randomUUID(), {
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 365,
      });
    }
  }

  if (mode === "real") {
    response.cookies.delete("mock-user-id");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
