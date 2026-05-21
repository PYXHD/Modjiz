import { sortHistoryData } from "./sortHistoryData";

describe("sortHistoryData()", () => {
  test("returns sorted data", () => {
    const data = ["2025-06-07", "2025-06-08", "2025-06-04"];
    const expected = ["2025-06-04", "2025-06-07", "2025-06-08"];

    const result = sortHistoryData(data);
    expect(result).toEqual(expected);
  });

  test("does not mutate original array", () => {
    const data = ["2025-09-20", "2024-01-01"];

    const original = structuredClone(data);

    sortHistoryData(data);

    expect(data).toEqual(original);
  });
});
