import { getAppMode } from "@/lib/init/getAppMode";
import { demoUserData } from "./sources/mock/demoUserData";
import { sortUserData } from "./sortUserData";
import { supabase } from "@/lib/supabase";

const USER_ID = "test_user";

export async function getUserData() {
  const mode = getAppMode();

  if (mode === "mock") {
    const { data: existing } = await supabase
      .from("mock_entries")
      .select("*")
      .eq("user_id", USER_ID);

    if (!existing || existing.length === 0) {
      const rows = demoUserData.map((entry) => ({
        user_id: USER_ID,
        date: entry.date,
        value: entry.value,
      }));

      await supabase.from("mock_entries").insert(rows);

      return sortUserData(rows);
    }

    return sortUserData(existing);
  }

  return [];

  // API structure
}
