vi.mock("../../../lib/init/getAppMode.ts", () => ({
  getAppMode: vi.fn(),
}));

import { supabase } from "@/lib/supabase";
import { getHistoryData } from "./getHistoryData";
import { getAppMode } from "@/lib/init/getAppMode";

let userId = "";

beforeEach(() => {
  userId = `test-user-${crypto.randomUUID()}`;
});

afterEach(async () => {
  await supabase.from("mock_history_views").delete().eq("user_id", userId);
});

describe("getHistoryData()", () => {
  describe("when no history exists", () => {
    test("initializes and returns mock data", async () => {
      vi.mocked(getAppMode).mockResolvedValue("mock");
      const result = await getHistoryData(userId);

      expect(result.length).toBeGreaterThan(0);

      const dbResult = await supabase
        .from("mock_history_views")
        .select("*")
        .eq("user_id", userId);

      const dbResultReshaped = (dbResult.data ?? []).map((item) => item.date);

      expect(result).toEqual(dbResultReshaped);
    });
  });

  describe("when history exists", () => {
    test("returns mock data", async () => {
      vi.mocked(getAppMode).mockResolvedValue("mock");
      const result = await getHistoryData(userId);

      expect(result.length).toBeGreaterThan(0);

      const dbResult = await supabase
        .from("mock_history_views")
        .select("*")
        .eq("user_id", userId);

      const dbResultReshaped = (dbResult.data ?? []).map((item) => item.date);

      expect(result).toEqual(dbResultReshaped);
    });
  });
});
