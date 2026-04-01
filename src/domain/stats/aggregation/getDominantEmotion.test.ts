import { getDominantEmotion } from "./getDominantEmotion";

import type { Entry } from "@/types/Entry";

describe("getDominantEmotion()", () => {
  describe("normal cases", () => {
    test("returns returns most frequent emotion", () => {
      const array: Entry[] = [
        { date: "2025-10-02", value: 2 },
        { date: "2025-10-03", value: 3 },
        { date: "2025-10-04", value: 3 },
        { date: "2025-10-05", value: 1 },
        { date: "2025-10-06", value: 2 },
        { date: "2025-10-07", value: 2 },
      ];

      const expected = { value: 2, count: 3 };

      expect(getDominantEmotion(array)).toEqual(expected);
    });

    test("returns highest value when multiple emotions share max count", () => {
      const array: Entry[] = [
        { date: "2025-10-02", value: 2 },
        { date: "2025-10-03", value: 3 },
        { date: "2025-10-04", value: 3 },
        { date: "2025-10-05", value: 3 },
        { date: "2025-10-06", value: 2 },
        { date: "2025-10-07", value: 2 },
      ];

      const expected = { value: 3, count: 3 };

      expect(getDominantEmotion(array)).toEqual(expected);
    });
  });

  describe("edge cases", () => {
    test("returns null if empty array", () => {
      expect(getDominantEmotion([])).toBeNull();
    });

    test("returns most frequent emotion if one element only", () => {
      const array: Entry[] = [{ date: "2025-10-02", value: 2 }];

      const expected = { value: 2, count: 1 };

      expect(getDominantEmotion(array)).toEqual(expected);
    });

    test("returns highest value when all values are unique", () => {
      const array: Entry[] = [
        { date: "2025-10-02", value: 1 },
        { date: "2025-10-03", value: 2 },
        { date: "2025-10-04", value: 3 },
      ];

      expect(getDominantEmotion(array)).toEqual({ value: 3, count: 1 });
    });
  });
});
