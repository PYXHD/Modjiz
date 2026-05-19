import type { HistoryViewsDB } from "../types/HistoryViewsDB";

import { demoHistoryViews } from "../../sources/mock/demoHistoryViews";
import { supabase } from "@/lib/supabase";

export async function initializeMockHistoryViews(userId: string) {
  const rows: HistoryViewsDB[] = demoHistoryViews.map((date) => ({
    user_id: userId,
    date,
  }));

  await supabase.from("mock_history_views").insert(rows);

  return rows;
}
