import { upsertEntry } from "./upsertEntry";
import type { Entry } from "@/types/Entry";

describe("upsertEntry()", () => {
  // Helpers
  function run(entries: Entry[] | null, entry: Entry) {
    return upsertEntry(entries, entry);
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

    test("updates entry if date exists", () => {
      const entries = [
        { date: "2026-03-01", value: 3 },
        { date: "2026-03-02", value: 3 },
        { date: "2026-03-03", value: 2 },
      ];
      const newEntry = { date: "2026-03-03", value: 4 };
      const expected = [
        { date: "2026-03-01", value: 3 },
        { date: "2026-03-02", value: 3 },
        { date: "2026-03-03", value: 4 },
      ];

      expect(run(entries, newEntry)).toEqual(expected);
    });

    test("only updates the matching entry", () => {
      const entries = [
        { date: "2026-03-01", value: 1 },
        { date: "2026-03-02", value: 2 },
        { date: "2026-03-03", value: 3 },
      ];
      const newEntry = { date: "2026-03-02", value: 9 };

      const result = run(entries, newEntry);

      expect(result).toEqual([
        { date: "2026-03-01", value: 1 },
        { date: "2026-03-02", value: 9 },
        { date: "2026-03-03", value: 3 },
      ]);
    });
  });

  describe("edge cases", () => {
    test("adds entry when entries is null", () => {
      const newEntry = { date: "2026-03-02", value: 4 };

      expect(run(null, newEntry)).toEqual([newEntry]);
    });

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

    test("does not mutate existing entries", () => {
      const entries = [{ date: "2026-03-01", value: 3 }];
      const newEntry = { date: "2026-03-02", value: 4 };

      const result = run(entries, newEntry);

      expect(result[0]).toBe(entries[0]);
    });
  });
});
