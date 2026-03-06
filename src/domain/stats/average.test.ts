import { describe, test, expect } from "vitest";
import average from "./average";

import type { Entry } from "@/types/Entry";

describe("average()", () => {
  describe("normal cases", () => {
    test("returns an integer average for multiple entries", () => {
      const entries: Entry[] = [
        { date: "2025-11-05", value: 2 },
        { date: "2025-11-06", value: 3 },
        { date: "2025-11-07", value: 2 },
        { date: "2025-11-08", value: 5 },
        { date: "2025-11-09", value: 3 },
      ];
      const result = average(entries);
      expect(result).toBe(3);
    });

    test("returns a decimal average for multiple entries", () => {
      const entries: Entry[] = [
        { date: "2025-11-05", value: 1 },
        { date: "2025-11-06", value: 3 },
        { date: "2025-11-07", value: 2 },
        { date: "2025-11-08", value: 4 },
        { date: "2025-11-09", value: 4 },
        { date: "2025-11-10", value: 3 },
      ];
      const result = average(entries);
      expect(result).toBeCloseTo(2.83, 2);
    });
  });

  describe("edge cases", () => {
    test("returns the average for only one element", () => {
      const entries: Entry[] = [{ date: "2025-11-06", value: 3 }];
      const result = average(entries);
      expect(result).toBe(3);
    });

    test("returns 0 if entries is empty", () => {
      const entries: Entry[] = [];
      const result = average(entries);
      expect(result).toBe(0);
    });
  });
});
