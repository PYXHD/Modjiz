import { createClient } from "../supabase/browser";

export async function login(
  email: string,
  password: string,
  captchaToken: string,
) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
    options: {
      captchaToken,
    },
  });

  return { data, error };
}
