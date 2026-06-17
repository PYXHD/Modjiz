import { createClient } from "@/lib/supabase/browser";

import { clearMode } from "./clearMode";

export async function resetToLanding() {
  const supabase = createClient();

  await supabase.auth.signOut();

  clearMode();

  window.location.href = "/";
}
