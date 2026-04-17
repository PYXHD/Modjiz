import { getYearData } from "./getYearData";
import type { Entry } from "@/types/Entry";

describe("getYearData()", () => {
  const entries: Entry[] = [
    { date: "2024-12-01", value: 3 },
    { date: "2026-01-01", value: 4 },
    { date: "2026-11-15", value: 2 },
    { date: "2026-11-26", value: 3 },
  ];

  describe("normal cases", () => {
    test("returns correct year's entries", () => {
      const expected: Entry[] = [
        { date: "2026-01-01", value: 4 },
        { date: "2026-11-15", value: 2 },
        { date: "2026-11-26", value: 3 },
      ];
      const result = getYearData(entries, 2026);
      expect(result).toEqual(expected);
    });
  });

  describe("edge cases", () => {
    test("returns single entry if only one matches", () => {
      const expected = [{ date: "2024-12-01", value: 3 }];
      const result = getYearData(entries, 2024);
      expect(result).toEqual(expected);
    });

    test("returns empty array if no data", () => {
      const result = getYearData(entries, 2025);
      expect(result).toEqual([]);
    });

    test("returns empty array if entries array is empty", () => {
      const result = getYearData([], 2025);
      expect(result).toEqual([]);
    });
  });
});
