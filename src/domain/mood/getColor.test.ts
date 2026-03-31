import { getColor } from "./getColor";

describe("getColor()", () => {
  describe("normal cases", () => {
    test.each([
      [1, "var(--color-emotion-sad)"],
      [2, "var(--color-emotion-meh)"],
      [3, "var(--color-emotion-ok)"],
      [4, "var(--color-emotion-good)"],
      [5, "var(--color-emotion-great)"],
    ])("getColor(%i) => %s", (input, expected) => {
      expect(getColor(input)).toBe(expected);
    });

    test("returns default color when value is unknown", () => {
      expect(getColor(8)).toBe("#ccc");
    });
  });
});
