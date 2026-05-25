import { createClient } from "@/lib/supabase/browser";

export function signInAnonymously() {
  const supabase = createClient();

  return supabase.auth.signInAnonymously();
}
