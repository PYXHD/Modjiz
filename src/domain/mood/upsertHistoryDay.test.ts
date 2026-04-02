import { upsertHistoryDay } from "./upsertHistoryDay";

describe("upsertHistoryDay()", () => {
  function run(history: string[] | null, date: string) {
    return upsertHistoryDay(history, date);
  }

  describe("normal cases", () => {
    test("adds entry if date does not exist", () => {
      const history = ["2026-03-01", "2026-03-02"];
      const newEntry = "2026-03-03";
      const expected = ["2026-03-01", "2026-03-02", "2026-03-03"];

      expect(run(history, newEntry)).toEqual(expected);
    });

    test("return original array if date exists", () => {
      const history = ["2026-03-01", "2026-03-02", "2026-03-03"];
      const newEntry = "2026-03-03";

      expect(run(history, newEntry)).toBe(history);
    });
  });

  describe("edge cases", () => {
    test("adds date when history is empty", () => {
      const history: string[] = [];
      const newEntry = "2026-03-02";
      const expected = ["2026-03-02"];

      expect(run(history, newEntry)).toEqual(expected);
    });

    test("returns new array with date when history is null", () => {
      const history = null;
      const newEntry = "2026-03-02";
      const expected = ["2026-03-02"];

      expect(run(history, newEntry)).toEqual(expected);
    });

    test("does not mutate original array", () => {
      const history = ["2026-03-01"];
      const newEntry = "2026-03-02";

      const result = run(history, newEntry);

      expect(result).not.toBe(history);
    });

    test("does not mutate existing entries", () => {
      const history = ["2026-03-01"];
      const newEntry = "2026-03-02";

      const result = run(history, newEntry);

      expect(result[0]).toBe(history[0]);
    });
  });
});
