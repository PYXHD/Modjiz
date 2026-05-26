vi.mock("../../lib/supabase/server", () => ({
  createClient: vi.fn(),
}));

vi.mock("../../lib/init/getAppMode.ts", () => ({
  getAppMode: vi.fn(),
}));

import { createClient } from "@/lib/supabase/server";
import { supabase } from "@/lib/supabase/supabase-test";
import { getUserData } from "./getUserData";
import { initializeMockUserData } from "./initializeMockUserData";
import { getAppMode } from "@/lib/init/getAppMode";

let userId = "";

describe("getUserData()", () => {
  describe("mock mode", () => {
    beforeEach(() => {
      userId = `test-user-${crypto.randomUUID()}`;
      vi.mocked(getAppMode).mockResolvedValue("mock");
      vi.mocked(createClient).mockResolvedValue(supabase);
    });

    afterEach(async () => {
      await supabase.from("mock_entries").delete().eq("user_id", userId);
    });

    describe("when no entries exists", () => {
      test("initializes and returns mock data", async () => {
        const result = await getUserData(userId);

        expect(result.length).toBeGreaterThan(0);

        const dbResult = await supabase
          .from("mock_entries")
          .select("*")
          .eq("user_id", userId);

        const dbResultReshaped = (dbResult.data ?? []).map((item) => ({
          date: item.date,
          value: item.value,
        }));

        expect(result).toEqual(dbResultReshaped);
      });
    });

    describe("when entries exists", () => {
      test("returns existing entries without reinitializing", async () => {
        await initializeMockUserData(userId);

        const before = await supabase
          .from("mock_entries")
          .select("*")
          .eq("user_id", userId);

        const result = await getUserData(userId);

        const after = await supabase
          .from("mock_entries")
          .select("*")
          .eq("user_id", userId);

        expect(result.length).toBeGreaterThan(0);
        expect(after.data?.length).toBe(before.data?.length);
      });
    });
  });
});
