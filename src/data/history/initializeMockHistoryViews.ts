import type { HistoryViewsDB } from "./types/HistoryViewsDB";

import { demoHistoryViews } from "../sources/mock/demoHistoryViews";
import { createClient } from "@/lib/supabase/server";

export async function initializeMockHistoryViews(userId: string) {
  const rows: HistoryViewsDB[] = demoHistoryViews.map((date) => ({
    user_id: userId,
    date,
  }));
  const supabase = await createClient();

  await supabase.from("mock_history_views").insert(rows);

  return rows;
}
