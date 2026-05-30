"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { createClient } from "@/lib/supabase/browser";
import { useRouter } from "next/navigation";

export default function MockBootstrap() {
  const supabase = createClient();
  const router = useRouter();

  return (
    <div>
      <p>Préparation de votre espace...</p>

      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onSuccess={async (captchaToken) => {
          const { error } = await supabase.auth.signInAnonymously({
            options: {
              captchaToken,
            },
          });

          if (!error) {
            router.refresh();
          }
        }}
      />
    </div>
  );
}
