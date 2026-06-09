import { HistoryViewsDB } from "./types/HistoryViewsDB";

import { createClient } from "@/lib/supabase/server";

export async function fetchRealHistoryViews(userId: string) {
  const supabase = await createClient();

  const result = await supabase
    .from("history_views")
    .select("*")
    .eq("user_id", userId)
    .order("date", { ascending: true });

  const existing: HistoryViewsDB[] = result.data ?? [];

  return existing;
}
