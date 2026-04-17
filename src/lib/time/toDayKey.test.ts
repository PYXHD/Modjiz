import { toDayKey } from "./toDayKey";

describe("toDayKey()", () => {
  describe("normal cases", () => {
    test("formats a standard date correctly", () => {
      const date = new Date(2026, 2, 5);
      expect(toDayKey(date)).toBe("2026-03-05");
    });
  });

  describe("edge cases", () => {
    test("pads month and day with leading zeros", () => {
      const date = new Date(2026, 0, 1);
      expect(toDayKey(date)).toBe("2026-01-01");
    });

    test("handles double digit month and day", () => {
      const date = new Date(2026, 10, 15);
      expect(toDayKey(date)).toBe("2026-11-15");
    });

    test("handles end of month correctly", () => {
      const date = new Date(2026, 1, 28);
      expect(toDayKey(date)).toBe("2026-02-28");
    });
  });
});
