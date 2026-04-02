import { getBestMonth } from "./getBestMonth";

import type { YearChart } from "../chart/getYearChart";

describe("getBestMonth()", () => {
  describe("normal cases", () => {
    test("returns the month with the highest value", () => {
      const yearChartMock: YearChart[] = [
        { month: 0, label: "janv.", value: 2.1333 },
        { month: 1, label: "févr.", value: 3.42 },
        { month: 2, label: "mars", value: 4.25555 },
        { month: 3, label: "avr.", value: 3.88 },
        { month: 4, label: "mai", value: 2.71111111 },
        { month: 5, label: "juin", value: 3.145 },
        { month: 6, label: "juil.", value: 4.42 },
        { month: 7, label: "août", value: 4.0 },
        { month: 8, label: "sept.", value: 3.336 },
        { month: 9, label: "oct.", value: 2.64 },
        { month: 10, label: "nov.", value: 2.15 },
        { month: 11, label: "déc.", value: 1.83333 },
      ];
      const input = getBestMonth(yearChartMock);

      expect(input?.month).toBe(6);
      expect(input?.value).toBeCloseTo(4.42, 2);
    });

    test("keeps first month in case of equality", () => {
      const data: YearChart[] = [
        { month: 0, label: "janv.", value: 4 },
        { month: 1, label: "févr.", value: 4 },
      ];

      const result = getBestMonth(data);

      expect(result?.month).toBe(0);
    });
  });

  describe("edge cases", () => {
    test("ignores null values", () => {
      const yearChartMock: YearChart[] = [
        { month: 0, label: "janv.", value: null },
        { month: 1, label: "févr.", value: 3 },
        { month: 2, label: "mars", value: null },
      ];

      const result = getBestMonth(yearChartMock);

      expect(result?.month).toBe(1);
    });

    test("returns null if all values are null", () => {
      const data: YearChart[] = [
        { month: 0, label: "janv.", value: null },
        { month: 1, label: "févr.", value: null },
      ];

      const result = getBestMonth(data);

      expect(result).toBeNull();
    });

    test("returns null for empty array", () => {
      const result = getBestMonth([]);

      expect(result).toBeNull();
    });
  });
});
