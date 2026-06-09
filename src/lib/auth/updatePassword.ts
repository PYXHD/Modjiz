import { createClient } from "../supabase/browser";

export async function updatePassword(password: string) {
  const supabase = createClient();

  return supabase.auth.updateUser({
    password,
  });
}
