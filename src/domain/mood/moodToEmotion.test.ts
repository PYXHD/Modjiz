import { moodToEmotion } from "./moodToEmotion";
import type { EmotionLevel } from "@/domain/mood/config/moods";
import type { Emotion } from "@/domain/mood/config/moods";

describe("moodToEmotion()", () => {
  const cases: { input: EmotionLevel; expected: Emotion }[] = [
    { input: 0, expected: "pensive" },
    { input: 1, expected: "sad" },
    { input: 2, expected: "meh" },
    { input: 3, expected: "ok" },
    { input: 4, expected: "good" },
    { input: 5, expected: "great" },
  ];

  describe("valid case", () => {
    test.each(cases)(
      "moodToEmotion($input) -> $expected",
      ({ input, expected }) => {
        expect(moodToEmotion(input)).toBe(expected);
      },
    );
  });

  describe("error case", () => {
    test("throws if invalid entry", () => {
      expect(() => moodToEmotion(8 as EmotionLevel)).toThrow(Error);
    });
  });
});
