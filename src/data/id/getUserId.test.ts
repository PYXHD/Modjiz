/* eslint-disable @typescript-eslint/no-explicit-any */
vi.mock("@/lib/supabase/server", () => ({
  createClient: vi.fn(),
}));

import { describe, expect, test, vi, afterEach } from "vitest";

import { createClient } from "@/lib/supabase/server";
import { getUserId } from "./getUserId";

type CreateClientReturn = Awaited<ReturnType<typeof createClient>>;

const mockSupabaseUser = (user: { id: string } | null) => ({
  auth: {
    getUser: vi.fn().mockResolvedValue({
      data: { user },
    }),
  },
});

describe("getUserId()", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("returns userId", async () => {
    vi.mocked(createClient).mockResolvedValue(
      mockSupabaseUser({ id: "1234" }) as unknown as CreateClientReturn,
    );

    const result = await getUserId();

    expect(result).toBe("1234");
  });

  test("returns null if no user", async () => {
    vi.mocked(createClient).mockResolvedValue(
      mockSupabaseUser(null) as unknown as CreateClientReturn,
    );

    const result = await getUserId();

    expect(result).toBeNull();
  });
});
