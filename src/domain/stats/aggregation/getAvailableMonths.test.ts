import { getAvailableMonths } from "./getAvailableMonths";

import type { Entry } from "@/types/Entry";

describe("getAvailableMonths()", () => {
  describe("normal cases", () => {
    test("returns unique months from data", () => {
      const data: Entry[] = [
        { date: "2025-11-27", value: 3 },
        { date: "2025-12-29", value: 4 },
        { date: "2026-01-01", value: 5 },
        { date: "2026-01-02", value: 5 },
      ];

      const result = getAvailableMonths(data);
      const expected = [
        { year: 2025, month: 10 },
        { year: 2025, month: 11 },
        { year: 2026, month: 0 },
      ];

      expect(result).toEqual(expected);
    });
  });

  describe("edge cases", () => {
    test("returns empty array if no data", () => {
      expect(getAvailableMonths([])).toEqual([]);
    });

    test("returns unique months from unique data", () => {
      const data: Entry[] = [
        { date: "2026-01-01", value: 5 },
        { date: "2026-01-02", value: 5 },
      ];

      const result = getAvailableMonths(data);
      const expected = [{ year: 2026, month: 0 }];

      expect(result).toEqual(expected);
    });

    test("returns unique months from unsorted data", () => {
      const data: Entry[] = [
        { date: "2026-01-01", value: 5 },
        { date: "2025-11-22", value: 3 },
      ];

      const result = getAvailableMonths(data);

      expect(result).toEqual(
        expect.arrayContaining([
          { year: 2026, month: 0 },
          { year: 2025, month: 10 },
        ]),
      );

      expect(result).toHaveLength(2);
    });
  });
});
