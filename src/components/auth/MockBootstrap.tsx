"use client";
import { Turnstile } from "@marsidev/react-turnstile";
import { createClient } from "@/lib/supabase/browser";
import { useRouter } from "next/navigation";
import LoadingScreen from "../ui/loadingScreen/LoadingScreen";

export default function MockBootstrap() {
  const supabase = createClient();
  const router = useRouter();

  return (
    <LoadingScreen message="Préparation de votre espace...">
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
    </LoadingScreen>
  );
}
