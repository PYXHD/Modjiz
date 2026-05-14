import { sortUserData } from "./sortUserData";

describe("sortUserData()", () => {
  test("returns sorted data", () => {
    const data = [
      { date: "2025-06-07", value: 4 },
      { date: "2025-06-08", value: 3 },
      { date: "2025-06-04", value: 1 },
    ];
    const expected = [
      { date: "2025-06-04", value: 1 },
      { date: "2025-06-07", value: 4 },
      { date: "2025-06-08", value: 3 },
    ];

    const result = sortUserData(data);
    expect(result).toEqual(expected);
  });

  test("does not mutate original array", () => {
    const data = [
      { date: "2025-09-20", value: 5 },
      { date: "2024-01-01", value: 1 },
    ];

    const original = structuredClone(data);

    sortUserData(data);

    expect(data).toEqual(original);
  });
});
