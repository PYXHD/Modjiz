vi.mock("@/lib/time/getToday", () => ({
  getToday: () => new Date(2024, 5, 15),
}));

import { useStatsNavigation } from "./useStatsNavigation";

describe("useStatsNavigation()", () => {
  describe("month mode", () => {
    test("goes to next month when allowed", () => {
      const setDate = vi.fn();

      const { changeDate, canNavigate } = useStatsNavigation({
        mode: "month",
        date: new Date(2024, 4, 1),
        setDate,
        availableMonths: [],
        availableYears: [],
      });

      expect(canNavigate(1)).toBe(true);

      changeDate(1);

      expect(setDate).toHaveBeenCalled();

      const [calledDate] = setDate.mock.calls[0];

      expect(calledDate.getFullYear()).toBe(2024);
      expect(calledDate.getMonth()).toBe(5);
    });

    test("does not go to previous month if out of bounds", () => {
      const setDate = vi.fn();

      const { changeDate, canNavigate } = useStatsNavigation({
        mode: "month",
        date: new Date(2024, 4, 1),
        setDate,
        availableMonths: [{ year: 2024, month: 4 }],
        availableYears: [],
      });

      expect(canNavigate(-1)).toBe(false);

      changeDate(-1);

      expect(setDate).not.toHaveBeenCalled();
    });
  });

  describe("year mode", () => {
    test("goes to next year when allowed", () => {
      const setDate = vi.fn();

      const { changeDate, canNavigate } = useStatsNavigation({
        mode: "year",
        date: new Date(2023, 4, 1),
        setDate,
        availableMonths: [],
        availableYears: [],
      });

      expect(canNavigate(1)).toBe(true);

      changeDate(1);

      expect(setDate).toHaveBeenCalled();

      const [calledDate] = setDate.mock.calls[0];

      expect(calledDate.getFullYear()).toBe(2024);
    });

    test("does not go to previous month if out of bounds", () => {
      const setDate = vi.fn();

      const { changeDate, canNavigate } = useStatsNavigation({
        mode: "year",
        date: new Date(2024, 4, 1),
        setDate,
        availableMonths: [],
        availableYears: [2024],
      });

      expect(canNavigate(-1)).toBe(false);

      changeDate(-1);

      expect(setDate).not.toHaveBeenCalled();
    });
  });
});
