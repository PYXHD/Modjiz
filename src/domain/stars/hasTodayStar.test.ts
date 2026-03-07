import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import hasTodayStar from "./hasTodayStar";
import type { Entry } from "@/types/Entry";

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date("2026-03-07"));
});
afterEach(() => {
  vi.useRealTimers();
});

describe("hasTodayStar()", () => {
  describe("normal cases", () => {
    test("returns true if today exists", () => {
      const entries: Entry[] = [
        { date: "2026-03-01", value: 4 },
        { date: "2026-03-04", value: 2 },
        { date: "2026-03-05", value: 3 },
        { date: "2026-03-07", value: 4 },
      ];
      const result = hasTodayStar(entries);
      expect(result).toBe(true);
    });

    test("returns false if today does not exist", () => {
      const entries: Entry[] = [
        { date: "2026-03-01", value: 4 },
        { date: "2026-03-04", value: 2 },
        { date: "2026-03-05", value: 3 },
      ];
      const result = hasTodayStar(entries);
      expect(result).toBe(false);
    });
  });

  describe("edge cases", () => {
    test("returns false if empty array", () => {
      const entries: Entry[] = [];
      const result = hasTodayStar(entries);
      expect(result).toBe(false);
    });

    test("returns false if only one element is not today", () => {
      const entries: Entry[] = [{ date: "2026-03-05", value: 3 }];
      const result = hasTodayStar(entries);
      expect(result).toBe(false);
    });

    test("returns true if only one element is today", () => {
      const entries: Entry[] = [{ date: "2026-03-07", value: 3 }];
      const result = hasTodayStar(entries);
      expect(result).toBe(true);
    });
  });
});
