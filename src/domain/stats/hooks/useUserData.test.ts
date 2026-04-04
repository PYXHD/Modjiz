vi.mock("@/data/getUserData", () => ({
  getUserData: vi.fn(),
}));
import { demoUserData } from "@/data/sources/mock/demoUserData";
import { useUserData } from "./useUserData";
import { getUserData } from "@/data/getUserData";

import { renderHook, waitFor } from "@testing-library/react";

describe("useUserData()", () => {
  const mockData = demoUserData.slice(0, 2);
  const mockedGetUserData = vi.mocked(getUserData);

  beforeEach(() => {
    vi.clearAllMocks();
    mockedGetUserData.mockResolvedValue(mockData);
  });

  describe("normal cases", () => {
    test("should fetch and return user data", async () => {
      const { result } = renderHook(() => useUserData());

      expect(result.current).toEqual([]);

      await waitFor(() => {
        expect(result.current).toEqual(mockData);
      });
    });

    test("calls getUserData on mount", async () => {
      renderHook(() => useUserData());

      await waitFor(() => {
        expect(mockedGetUserData).toHaveBeenCalled();
      });
    });
  });

  describe("error case", () => {
    test("handles error when getUserData fails", async () => {
      mockedGetUserData.mockRejectedValue(new Error("API error"));

      const consoleSpy = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      const { result } = renderHook(() => useUserData());

      await waitFor(() => {
        expect(consoleSpy).toHaveBeenCalled();
      });

      expect(result.current).toEqual([]);

      consoleSpy.mockRestore();
    });
  });
});
