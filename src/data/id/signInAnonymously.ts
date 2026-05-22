import { supabase } from "@/lib/supabase";

export function signInAnonymously() {
  return supabase.auth.signInAnonymously();
}
