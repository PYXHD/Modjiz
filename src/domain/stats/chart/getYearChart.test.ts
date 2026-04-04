import { getYearChart } from "./getYearChart";

import type { Entry } from "@/types/Entry";

describe("getYearChart()", () => {
  describe("normal cases", () => {
    test("returns month averages", () => {
      const yearChartMock: Entry[] = [
        { date: "2025-12-01", value: 3 },
        { date: "2025-12-02", value: 3 },
        { date: "2025-12-04", value: 4 },
        { date: "2025-12-05", value: 2 },
        { date: "2026-01-03", value: 3 },
        { date: "2026-01-06", value: 3 },
        { date: "2026-01-09", value: 1 },
        { date: "2026-02-05", value: 2 },
        { date: "2026-02-01", value: 3 },
      ];

      const input = getYearChart(yearChartMock, "2026");

      expect(input).toHaveLength(12);

      // january
      const jan = input.find((m) => m.month === 0);
      expect(jan?.value).toBeCloseTo(2.3, 1);

      // february
      const feb = input.find((m) => m.month === 1);
      expect(feb?.value).toBeCloseTo(2.5, 1);

      // march
      const mar = input.find((m) => m.month === 2);
      expect(mar?.value).toBeNull();
    });
  });

  describe("edge cases", () => {
    test("returns month average for one entry", () => {
      const yearChartMock: Entry[] = [{ date: "2026-01-06", value: 3 }];

      const input = getYearChart(yearChartMock, "2026");

      const jan = input.find((m) => m.month === 0);
      expect(jan).toBeDefined();
      expect(jan!.value).toBe(3);
    });

    test("returns null for empty array", () => {
      const input = getYearChart([], "2026");

      const jan = input.find((m) => m.month === 0);
      expect(jan?.value).toBeNull();
    });
  });
});
