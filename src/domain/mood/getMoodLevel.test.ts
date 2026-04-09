import { getMoodLevel } from "./getMoodLevel";

describe("getMoodLevel()", () => {
  test.each([
    { input: null, expected: "neutral" },
    { input: 0, expected: "neutral" },
    { input: 1.2, expected: "medium" },
    { input: 2.99, expected: "medium" },
    { input: 3, expected: "good" },
    { input: 3.4, expected: "good" },
    { input: 4, expected: "great" },
    { input: 4.5, expected: "great" },
  ])("getMoodLevel($input) => $expected", ({ input, expected }) => {
    expect(getMoodLevel(input)).toBe(expected);
  });
});
