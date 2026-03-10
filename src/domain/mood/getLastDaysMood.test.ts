import { getLastDaysMood } from "./getLastDaysMood";

import type { Entry } from "@/types/Entry";

describe("getLastDaysMood()", () => {
  // Helpers
  const today = new Date("2026-03-02");

  function run(entries: Entry[]) {
    return getLastDaysMood(entries, today);
  }

  // Tests
  describe("normal cases", () => {
    test("returns last days without today", () => {
      const entries: Entry[] = [
        { date: "2026-02-26", value: 3 },
        { date: "2026-02-27", value: 2 },
        { date: "2026-02-28", value: 2 },
        { date: "2026-03-01", value: 4 },
      ];

      expect(run(entries)).toEqual([3, 2, 2, 4, 0]);
    });

    test("returns last days with today", () => {
      const entries: Entry[] = [
        { date: "2026-02-26", value: 3 },
        { date: "2026-02-27", value: 2 },
        { date: "2026-02-28", value: 2 },
        { date: "2026-03-01", value: 4 },
        { date: "2026-03-02", value: 4 },
      ];

      expect(run(entries)).toEqual([3, 2, 2, 4, 4]);
    });

    test("returns last days with a 0 if absent", () => {
      const entries: Entry[] = [
        { date: "2026-02-26", value: 3 },
        { date: "2026-02-28", value: 2 },
        { date: "2026-03-01", value: 4 },
        { date: "2026-03-02", value: 4 },
      ];

      expect(run(entries)).toEqual([3, 0, 2, 4, 4]);
    });

    test("returns last days with missing days", () => {
      const entries: Entry[] = [
        { date: "2026-03-01", value: 4 },
        { date: "2026-03-02", value: 4 },
      ];

      expect(run(entries)).toEqual([0, 0, 0, 4, 4]);
    });
  });

  describe("edge cases", () => {
    test("works with unsorted entries", () => {
      const entries: Entry[] = [
        { date: "2026-03-01", value: 4 },
        { date: "2026-02-26", value: 3 },
        { date: "2026-03-02", value: 5 },
        { date: "2026-02-27", value: 2 },
      ];

      expect(run(entries)).toEqual([3, 2, 0, 4, 5]);
    });

    test("returns 0 if no recent entries", () => {
      const entries: Entry[] = [
        { date: "2026-02-12", value: 3 },
        { date: "2026-02-14", value: 2 },
        { date: "2026-03-15", value: 4 },
        { date: "2026-03-16", value: 4 },
        { date: "2026-03-19", value: 4 },
      ];

      expect(run(entries)).toEqual([0, 0, 0, 0, 0]);
    });

    test("returns 0 if no entries", () => {
      const entries: Entry[] = [];

      expect(run(entries)).toEqual([0, 0, 0, 0, 0]);
    });
  });
});
