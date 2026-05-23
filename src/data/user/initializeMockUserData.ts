import type { Entry } from "@/types/Entry";

import { demoUserData } from "../sources/mock/demoUserData";
import { createClient } from "@/lib/supabase/server";

export async function initializeMockUserData(userId: string) {
  const supabase = await createClient();

  const rows: Entry[] = demoUserData.map((entry) => ({
    user_id: userId,
    date: entry.date,
    value: entry.value,
  }));

  await supabase.from("mock_entries").insert(rows);

  return rows;
}
