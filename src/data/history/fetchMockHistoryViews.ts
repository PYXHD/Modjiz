import { HistoryViewsDB } from "./types/HistoryViewsDB";

import { createClient } from "@/lib/supabase/server";

export async function fetchMockHistoryViews(userId: string) {
  const supabase = await createClient();

  const result = await supabase
    .from("mock_history_views")
    .select("*")
    .eq("user_id", userId)
    .order("date", { ascending: true });

  const existing: HistoryViewsDB[] = result.data ?? [];

  return existing;
}
