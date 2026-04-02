import { getDaysInMonth } from "./getDaysInMonth";

describe("getDaysInMonth()", () => {
  describe("normal cases", () => {
    test("returns 31 days for January", () => {
      expect(getDaysInMonth(2024, 0)).toBe(31);
    });

    test("returns 30 days for April", () => {
      expect(getDaysInMonth(2024, 3)).toBe(30);
    });
  });

  test("returns 28 days for February in non-leap year", () => {
    expect(getDaysInMonth(2023, 1)).toBe(28);
  });

  test("returns 29 days for February in leap year", () => {
    expect(getDaysInMonth(2024, 1)).toBe(29);
  });
});
