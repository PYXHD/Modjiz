// import { getToday } from "./getToday";
// import * as appMode from "../init/getAppMode";

// describe("getToday()", () => {
//   afterEach(() => {
//     vi.restoreAllMocks();
//     vi.useRealTimers();
//   });
//   test("mode = mock", () => {
//     // Arrange
//     vi.spyOn(appMode, "getAppMode").mockReturnValue("mock");

//     const expected = new Date("2026-03-05");
//     expected.setHours(0, 0, 0, 0);

//     //Act
//     const result = getToday();

//     // Assert
//     expect(result.getTime()).toBe(expected.getTime());
//   });

//   test("mode = real", () => {
//     // Arrange
//     vi.spyOn(appMode, "getAppMode").mockReturnValue("real");

//     const NOW = new Date("2026-03-10T15:30:00");
//     vi.useFakeTimers();
//     vi.setSystemTime(NOW);

//     const expected = new Date("2026-03-10");
//     expected.setHours(0, 0, 0, 0);

//     //Act
//     const result = getToday();

//     // Assert
//     expect(result.getTime()).toBe(expected.getTime());
//   });
// });
