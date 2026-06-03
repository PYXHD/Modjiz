import { createClient } from "../supabase/browser";

export async function signup(
  email: string,
  password: string,
  captchaToken: string,
) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      captchaToken,
    },
  });

  console.log("data", data);
  console.log("error", error);

  return { data, error };
}
