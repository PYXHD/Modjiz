vi.mock("../../lib/supabase/server", () => ({
  createClient: vi.fn(),
}));

vi.mock("../../lib/init/getAppMode.ts", () => ({
  getAppMode: vi.fn(),
}));

import { createClient } from "@/lib/supabase/server";
import { supabase } from "@/lib/supabase/supabase-test";
import { getHistoryData } from "./getHistoryData";
import { initializeMockHistoryViews } from "./initializeMockHistoryViews";
import { getAppMode } from "@/lib/init/getAppMode";

let userId = "";

describe("getHistoryData()", () => {
  describe("mock mode", () => {
    beforeEach(() => {
      userId = crypto.randomUUID();
      vi.mocked(getAppMode).mockResolvedValue("mock");
      vi.mocked(createClient).mockResolvedValue(supabase);
    });

    afterEach(async () => {
      await supabase.from("mock_history_views").delete().eq("user_id", userId);
    });

    describe("when no history exists", () => {
      test("initializes and returns mock data", async () => {
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
      test("returns existing history without reinitializing", async () => {
        await initializeMockHistoryViews(userId);

        const before = await supabase
          .from("mock_history_views")
          .select("*")
          .eq("user_id", userId);

        const result = await getHistoryData(userId);

        const after = await supabase
          .from("mock_history_views")
          .select("*")
          .eq("user_id", userId);

        expect(result.length).toBeGreaterThan(0);
        expect(after.data?.length).toBe(before.data?.length);
      });
    });
  });
});
