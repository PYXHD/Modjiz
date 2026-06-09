import type { Entry } from "@/types/Entry";

import { createClient } from "@/lib/supabase/server";

export async function fetchRealUserData(userId: string) {
  const supabase = await createClient();

  const result = await supabase
    .from("entries")
    .select("*")
    .eq("user_id", userId)
    .order("date", { ascending: true });

  const existing: Entry[] = result.data ?? [];

  return existing;
}
