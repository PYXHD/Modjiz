vi.mock("next/headers", () => ({
  cookies: vi.fn(),
}));

import { getUserId } from "./getUserId";
import { cookies } from "next/headers";

const mockedCookie = vi.mocked(cookies);
const userId = {
  get: () => ({ value: "1234" }),
} as any;
const noUserId = {
  get: () => undefined,
} as any;

describe("getUserId()", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("returns userId", async () => {
    mockedCookie.mockResolvedValue(userId);
    const result = await getUserId();

    expect(result).toBe("1234");
  });

  test("throws an error if no userId", async () => {
    mockedCookie.mockResolvedValue(noUserId);

    await expect(getUserId()).rejects.toThrow("mock-user-id is missing");
  });
});
