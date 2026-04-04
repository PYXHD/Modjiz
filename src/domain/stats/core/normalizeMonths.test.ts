import { normalizeMonth } from "./normalizeMonths";

describe("normalizeMonth()", () => {
  describe("normal cases", () => {
    test("returns normalize month", () => {
      const result = normalizeMonth(new Date(2026, 2, 15));

      expect(result.getFullYear()).toBe(2026);
      expect(result.getMonth()).toBe(2);
      expect(result.getDate()).toBe(1);
    });

    test("resets time to midnight", () => {
      const result = normalizeMonth(new Date(2026, 2, 15, 18, 45));

      expect(result.getHours()).toBe(0);
      expect(result.getMinutes()).toBe(0);
    });

    test("does not mutate original date", () => {
      const original = new Date(2026, 2, 15);

      normalizeMonth(original);

      expect(original.getDate()).toBe(15);
    });
  });
});
