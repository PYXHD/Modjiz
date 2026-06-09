import { createClient } from "../supabase/browser";

export async function resetPassword(email: string, captchaToken: string) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    captchaToken,
    redirectTo: `${window.location.origin}/auth/password-new`,
  });

  return { data, error };
}
