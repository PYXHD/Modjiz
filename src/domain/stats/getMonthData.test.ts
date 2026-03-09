import { describe, test, expect } from "vitest";
import { getMonthData } from "./getMonthData";
import type { Entry } from "@/types/Entry";

describe("getMonthData()", () => {
  const entries: Entry[] = [
    { date: "2025-11-05", value: 2 },
    { date: "2025-11-06", value: 3 },
    { date: "2025-12-01", value: 3 },
    { date: "2025-12-02", value: 3 },
    { date: "2025-12-03", value: 2 },
    { date: "2026-01-01", value: 4 },
    { date: "2026-11-15", value: 2 },
    { date: "2026-11-26", value: 3 },
  ];

  describe("normal cases", () => {
    test("returns correct month's entries", () => {
      const expected: Entry[] = [
        { date: "2025-12-01", value: 3 },
        { date: "2025-12-02", value: 3 },
        { date: "2025-12-03", value: 2 },
      ];
      const result = getMonthData(entries, "12", "2025");
      expect(result).toEqual(expected);
    });
  });

  describe("edge cases", () => {
    test("filters by month AND year (ignores same month in other years)", () => {
      const expected: Entry[] = [
        { date: "2025-11-05", value: 2 },
        { date: "2025-11-06", value: 3 },
      ];
      const result = getMonthData(entries, "11", "2025");
      expect(result).toEqual(expected);
    });

    test("returns empty array if no data", () => {
      const result = getMonthData(entries, "09", "2025");
      expect(result).toEqual([]);
    });

    test("returns empty array if entries array is empty", () => {
      const result = getMonthData([], "12", "2025");
      expect(result).toEqual([]);
    });
  });
});
