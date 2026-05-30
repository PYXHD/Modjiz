"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { createClient } from "@/lib/supabase/browser";

export default function TurnstileTest() {
  const supabase = createClient();

  return (
    <Turnstile
      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
      onSuccess={async (captchaToken) => {
        const { data, error } = await supabase.auth.signInAnonymously({
          options: {
            captchaToken,
          },
        });

        console.log("DATA", data);
        console.log("ERROR", error);

        const {
          data: { user },
        } = await supabase.auth.getUser();

        console.log("CURRENT USER", user);
      }}
    />
  );
}
