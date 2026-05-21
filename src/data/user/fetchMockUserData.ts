import type { Entry } from "@/types/Entry";

import { supabase } from "@/lib/supabase";

export async function fetchMockUserData(userId: string) {
  const result = await supabase
    .from("mock_entries")
    .select("*")
    .eq("user_id", userId)
    .order("date", { ascending: true });

  const existing: Entry[] = result.data ?? [];

  return existing;
}
