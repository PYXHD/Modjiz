import type { ISODate } from "@/types/Time";

import { getAppMode } from "@/lib/init/getAppMode";
import { demoHistoryViews } from "./sources/mock/demoHistoryViews";
import { sortHistoryData } from "./sortHistoryData";
import { supabase } from "@/lib/supabase";

type HistoryViewsDB = {
  user_id: string;
  date: ISODate;
};

export async function getHistoryData(userId: string) {
  const mode = await getAppMode();

  if (mode === "mock") {
    const result = await supabase
      .from("mock_history_views")
      .select("*")
      .eq("user_id", userId)
      .order("date", { ascending: true });

    const existing: HistoryViewsDB[] = result.data ?? [];

    const history: ISODate[] = existing.map((item) => item.date);

    if (existing.length === 0) {
      const rows: HistoryViewsDB[] = demoHistoryViews.map((date) => ({
        user_id: userId,
        date,
      }));

      await supabase.from("mock_history_views").insert(rows);

      return sortHistoryData(demoHistoryViews);
    }

    return sortHistoryData(history);
  }

  return [];

  // API structure
}
