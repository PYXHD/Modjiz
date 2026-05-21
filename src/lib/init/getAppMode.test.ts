vi.mock("next/headers", () => ({
  cookies: vi.fn(),
}));

import { getAppMode } from "./getAppMode";
import { cookies } from "next/headers";

const mockedCookie = vi.mocked(cookies);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fakedMockCookie = {
  get: () => ({ value: "mock" }),
} as any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fakedRealCookie = {
  get: () => ({ value: "real" }),
} as any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const undefinedCookie = {
  get: () => undefined,
} as any;

describe("getAppMode()", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("returns real if app-mode = real", async () => {
    mockedCookie.mockResolvedValue(fakedRealCookie);
    const result = await getAppMode();

    expect(result).toBe("real");
  });

  test("returns mock if app-mode = mock", async () => {
    mockedCookie.mockResolvedValue(fakedMockCookie);
    const result = await getAppMode();

    expect(result).toBe("mock");
  });

  test("returns mock if app-mode is not set", async () => {
    mockedCookie.mockResolvedValue(undefinedCookie);
    const result = await getAppMode();

    expect(result).toBe("mock");
  });
});
