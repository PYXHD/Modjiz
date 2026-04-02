import { getMonthChart } from "./getMonthChart";

import type { ChartPoint } from "./getMonthChart";
import type { Entry } from "@/types/Entry";

describe("getMonthChart()", () => {
  describe("normal cases", () => {
    const monthChartMock: Entry[] = [
      { date: "2025-12-01", value: 3 },
      { date: "2025-12-02", value: 3 },
      { date: "2025-12-04", value: 4 },
      { date: "2025-12-05", value: 3 },
      { date: "2025-12-06", value: 2 },
      { date: "2025-12-09", value: 2 },
      { date: "2025-12-10", value: 4 },
      { date: "2025-12-12", value: 3 },
      { date: "2025-12-14", value: 4 },
      { date: "2025-12-15", value: 3 },
      { date: "2025-12-16", value: 2 },
      { date: "2025-12-18", value: 2 },
      { date: "2025-12-20", value: 4 },
      { date: "2025-12-22", value: 3 },
      { date: "2025-12-24", value: 5 },
      { date: "2025-12-25", value: 4 },
      { date: "2025-12-27", value: 3 },
      { date: "2025-12-29", value: 4 },
    ];

    test("returns full month with values mapped by day", () => {
      const input = getMonthChart(monthChartMock, 11, 2025);

      const expected: ChartPoint[] = [
        { day: 1, value: 3 },
        { day: 2, value: 3 },
        { day: 3, value: null },
        { day: 4, value: 4 },
        { day: 5, value: 3 },
        { day: 6, value: 2 },
        { day: 7, value: null },
        { day: 8, value: null },
        { day: 9, value: 2 },
        { day: 10, value: 4 },
        { day: 11, value: null },
        { day: 12, value: 3 },
        { day: 13, value: null },
        { day: 14, value: 4 },
        { day: 15, value: 3 },
        { day: 16, value: 2 },
        { day: 17, value: null },
        { day: 18, value: 2 },
        { day: 19, value: null },
        { day: 20, value: 4 },
        { day: 21, value: null },
        { day: 22, value: 3 },
        { day: 23, value: null },
        { day: 24, value: 5 },
        { day: 25, value: 4 },
        { day: 26, value: null },
        { day: 27, value: 3 },
        { day: 28, value: null },
        { day: 29, value: 4 },
        { day: 30, value: null },
        { day: 31, value: null },
      ];

      expect(input).toEqual(expected);
    });
  });

  describe("edge cases", () => {
    // Helpers
    function buildEmptyMonth(days: number): ChartPoint[] {
      const result: ChartPoint[] = [];

      for (let day = 1; day <= days; day++) {
        result.push({ day, value: null });
      }
      return result;
    }
    test("returns full month with null values when entries is empty", () => {
      const result = getMonthChart([], 1, 2025);

      expect(result).toEqual(buildEmptyMonth(28));
      // February 2025 (28 days)
    });
  });
});
