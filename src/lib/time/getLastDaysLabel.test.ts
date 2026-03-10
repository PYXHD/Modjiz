import { getLastDaysLabels } from "./getLastDaysLabel";

describe("getLastDaysLabels()", () => {
  // Helpers
  function run(today: Date, days: number) {
    return getLastDaysLabels(today, days);
  }

  describe("normal cases", () => {
    test("returns labels for last 5 days", () => {
      const today = new Date("2026-03-02");
      const expected = ["J", "V", "S", "D", "L"];

      expect(run(today, 5)).toEqual(expected);
    });

    test("works with different day", () => {
      const today = new Date("2026-03-05");
      const expected = ["D", "L", "Ma", "Me", "J"];

      expect(run(today, 5)).toEqual(expected);
    });
  });

  describe("edge cases", () => {
    test("spanning two years", () => {
      const today = new Date("2026-01-03");
      const expected = ["Ma", "Me", "J", "V", "S"];

      expect(run(today, 5)).toEqual(expected);
    });
  });
});
