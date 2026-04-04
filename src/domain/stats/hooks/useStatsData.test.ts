vi.mock("./useUserData", () => ({
  useUserData: vi.fn(),
}));

vi.mock("../queries/getMonthData", () => ({
  getMonthData: vi.fn(),
}));

vi.mock("../queries/getYearData", () => ({
  getYearData: vi.fn(),
}));

vi.mock("./useStatsNavigation", () => ({
  useStatsNavigation: vi.fn(),
}));

import { useUserData } from "./useUserData";
import { getMonthData } from "../queries/getMonthData";
import { getYearData } from "../queries/getYearData";
import { useStatsNavigation } from "./useStatsNavigation";
import { renderHook } from "@testing-library/react";
import { useStatsData } from "./useStatsData";

describe("useStatsData()", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("returns month data when mode is month", () => {
    const mockData = [{ date: "2025-10-01", value: 2 }];
    const mockFiltered = [{ date: "2025-10-01", value: 2 }];
    const canNavigateMock = vi.fn(() => true);

    vi.mocked(useUserData).mockReturnValue(mockData);
    vi.mocked(getMonthData).mockReturnValue(mockFiltered);
    vi.mocked(useStatsNavigation).mockReturnValue({
      changeDate: vi.fn(),
      canNavigate: canNavigateMock,
    });

    const { result } = renderHook(() => useStatsData("month"));

    expect(getMonthData).toHaveBeenCalled();
    expect(getYearData).not.toHaveBeenCalled();

    expect(result.current.data).toEqual(mockData);
    expect(result.current.filteredData).toEqual(mockFiltered);
    expect(result.current.canNavigate).toBe(canNavigateMock);
  });

  test("returns year data when mode is year", () => {
    const mockData = [{ date: "2025-10-01", value: 2 }];
    const mockFiltered = [{ date: "2025-10-01", value: 2 }];
    const canNavigateMock = vi.fn(() => true);

    vi.mocked(useUserData).mockReturnValue(mockData);
    vi.mocked(getYearData).mockReturnValue(mockFiltered);
    vi.mocked(useStatsNavigation).mockReturnValue({
      changeDate: vi.fn(),
      canNavigate: canNavigateMock,
    });

    const { result } = renderHook(() => useStatsData("year"));

    expect(getYearData).toHaveBeenCalled();
    expect(getMonthData).not.toHaveBeenCalled();

    expect(result.current.data).toEqual(mockData);
    expect(result.current.filteredData).toEqual(mockFiltered);
    expect(result.current.canNavigate).toBe(canNavigateMock);
  });
});
