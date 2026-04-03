import { isWithinBounds } from "./isWithinBounds";

vi.mock("@/lib/time/getToday.ts", () => ({
  getToday: () => new Date(2024, 5, 15),
}));

describe("isWithinBounds()", () => {
  describe("normal cases", () => {
    test("accepts date", () => {
      const result = isWithinBounds({
        date: new Date(2024, 4, 1),
        mode: "month",
        availableMonths: [{ year: 2024, month: 3 }],
        availableYears: [],
      });

      expect(result).toBe(true);
    });

    test("accepts year", () => {
      const result = isWithinBounds({
        date: new Date(2023, 0, 1),
        mode: "year",
        availableMonths: [],
        availableYears: [2022],
      });

      expect(result).toBe(true);
    });
  });

  describe("edge cases", () => {
    test("bug if non sorted", () => {
      const result = isWithinBounds({
        date: new Date(2024, 4, 1),
        mode: "month",
        availableMonths: [
          { year: 2024, month: 5 },
          { year: 2024, month: 3 },
        ],
        availableYears: [],
      });

      expect(result).toBe(false);
    });
  });
});
