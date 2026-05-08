import type { Entry } from "@/types/Entry";

import { getAppMode } from "@/lib/init/getAppMode";
import { demoUserData } from "./sources/mock/demoUserData";
import { sortUserData } from "./sortUserData";
import { supabase } from "@/lib/supabase";

export async function getUserData(userId: string) {
  const mode = getAppMode();

  if (mode === "mock") {
    const result = await supabase
      .from("mock_entries")
      .select("*")
      .eq("user_id", userId)
      .order("date", { ascending: true });

    const existing: Entry[] = result.data ?? [];

    if (existing.length === 0) {
      const rows = demoUserData.map((entry) => ({
        user_id: userId,
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
