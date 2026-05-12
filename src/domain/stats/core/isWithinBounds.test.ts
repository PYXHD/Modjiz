import { isWithinBounds } from "./isWithinBounds";

describe("isWithinBounds()", () => {
  describe("mode = month", () => {
    test("returns true when date is within bounds", () => {
      const result = isWithinBounds({
        date: new Date(2026, 2),
        today: new Date(2026, 4),
        mode: "month",
        availableMonths: [{ year: 2026, month: 0 }],
        availableYears: [],
      });

      expect(result).toBe(true);
    });

    test("returns false when date is after today", () => {
      const result = isWithinBounds({
        date: new Date(2026, 6),
        today: new Date(2026, 4),
        mode: "month",
        availableMonths: [{ year: 2026, month: 0 }],
        availableYears: [],
      });

      expect(result).toBe(false);
    });

    test("returns false when date is before minimum available month", () => {
      const result = isWithinBounds({
        date: new Date(2025, 11),
        today: new Date(2026, 4),
        mode: "month",
        availableMonths: [{ year: 2026, month: 0 }],
        availableYears: [],
      });

      expect(result).toBe(false);
    });

    test("returns true when availableMonths is empty and date <= today", () => {
      const result = isWithinBounds({
        date: new Date(2026, 2),
        today: new Date(2026, 4),
        mode: "month",
        availableMonths: [],
        availableYears: [],
      });

      expect(result).toBe(true);
    });
  });

  describe("mode = year", () => {
    test("returns true when year is within bounds", () => {
      const result = isWithinBounds({
        date: new Date(2025, 0),
        today: new Date(2026, 0),
        mode: "year",
        availableMonths: [],
        availableYears: [2024],
      });

      expect(result).toBe(true);
    });

    test("returns false when year is after today", () => {
      const result = isWithinBounds({
        date: new Date(2027, 0),
        today: new Date(2026, 0),
        mode: "year",
        availableMonths: [],
        availableYears: [2024],
      });

      expect(result).toBe(false);
    });

    test("returns false when year is before minimum available year", () => {
      const result = isWithinBounds({
        date: new Date(2023, 0),
        today: new Date(2026, 0),
        mode: "year",
        availableMonths: [],
        availableYears: [2024],
      });

      expect(result).toBe(false);
    });

    test("returns true when availableYears is empty and year <= today", () => {
      const result = isWithinBounds({
        date: new Date(2025, 0),
        today: new Date(2026, 0),
        mode: "year",
        availableMonths: [],
        availableYears: [],
      });

      expect(result).toBe(true);
    });
  });
});
