import { getToday } from "./getToday";
import * as appMode from "../init/getAppMode";

describe("getToday()", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });
  test("mode = mock", async () => {
    // Arrange
    vi.spyOn(appMode, "getAppMode").mockResolvedValue("mock");

    const expected = new Date("2026-03-05");
    expected.setHours(0, 0, 0, 0);

    //Act
    const result = await getToday();

    // Assert
    expect(result.getTime()).toBe(expected.getTime());
  });

  test("mode = real", async () => {
    // Arrange
    vi.spyOn(appMode, "getAppMode").mockResolvedValue("real");

    const NOW = new Date("2026-03-10T15:30:00");
    vi.useFakeTimers();
    vi.setSystemTime(NOW);

    const expected = new Date("2026-03-10");
    expected.setHours(0, 0, 0, 0);

    //Act
    const result = await getToday();

    // Assert
    expect(result.getTime()).toBe(expected.getTime());
  });
});
