import { addTodayEntry } from "./addTodayEntry";
import type { Entry } from "@/types/Entry";

describe("addTodayEntry()", () => {
  // Helpers
  function run(entries: Entry[], entry: Entry) {
    return addTodayEntry(entries, entry);
  }
  describe("normal cases", () => {
    test("adds entry if date does not exist", () => {
      const entries = [
        { date: "2026-03-01", value: 3 },
        { date: "2026-03-02", value: 3 },
      ];
      const newEntry = { date: "2026-03-03", value: 4 };
      const expected = [
        { date: "2026-03-01", value: 3 },
        { date: "2026-03-02", value: 3 },
        { date: "2026-03-03", value: 4 },
      ];

      expect(run(entries, newEntry)).toEqual(expected);
    });

    test("does not add entry if date exists", () => {
      const entries = [
        { date: "2026-03-01", value: 3 },
        { date: "2026-03-02", value: 3 },
        { date: "2026-03-03", value: 2 },
      ];
      const newEntry = { date: "2026-03-03", value: 4 };
      const expected = [
        { date: "2026-03-01", value: 3 },
        { date: "2026-03-02", value: 3 },
        { date: "2026-03-03", value: 2 },
      ];

      expect(run(entries, newEntry)).toEqual(expected);
    });
  });

  describe("edge cases", () => {
    test("adds entry when entries list is empty", () => {
      const entries: Entry[] = [];
      const newEntry = { date: "2026-03-02", value: 4 };
      const expected = [{ date: "2026-03-02", value: 4 }];

      expect(run(entries, newEntry)).toEqual(expected);
    });

    test("does not mutate original array", () => {
      const entries = [{ date: "2026-03-01", value: 3 }];
      const newEntry = { date: "2026-03-02", value: 4 };

      const result = run(entries, newEntry);
      expect(result).not.toBe(entries);
    });
  });
});
