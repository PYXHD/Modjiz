import { getAvailableYears } from "./getAvailableYears";

import type { Entry } from "@/types/Entry";

describe("getAvailableYears()", () => {
  describe("normal cases", () => {
    test("returns unique years from data", () => {
      const data: Entry[] = [
        { date: "2025-12-27", value: 3 },
        { date: "2025-12-29", value: 4 },
        { date: "2026-01-01", value: 5 },
        { date: "2026-01-02", value: 5 },
      ];

      const result = getAvailableYears(data);

      expect(result).toEqual([2025, 2026]);
    });
  });

  describe("edge cases", () => {
    test("returns empty array if no data", () => {
      expect(getAvailableYears([])).toEqual([]);
    });

    test("returns unique years from unique data", () => {
      const data: Entry[] = [
        { date: "2026-01-01", value: 5 },
        { date: "2026-01-02", value: 5 },
      ];

      const result = getAvailableYears(data);

      expect(result).toEqual([2026]);
    });

    test("returns unique years from unsorted data", () => {
      const data: Entry[] = [
        { date: "2026-01-01", value: 5 },
        { date: "2025-11-22", value: 3 },
      ];

      const result = getAvailableYears(data);

      expect(result).toEqual(expect.arrayContaining([2025, 2026]));
      expect(result).toHaveLength(2);
    });
  });
});
