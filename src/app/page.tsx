import type { Metadata } from "next";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import LandingContent from "@/components/landingPage/LandingContent";

export const metadata: Metadata = {
  title: "Modjiz - Journal d'humeur",
  description:
    "Enregistrez vos émotions, consultez vos statistiques et améliorez votre bien-être avec Modjiz.",
};

async function Page() {
  const cookieStore = await cookies();

  const hasOnboarded = cookieStore.get("has-onboarded");
  const appMode = cookieStore.get("app-mode");

  if (hasOnboarded && appMode) {
    redirect("/app");
  }

  return <LandingContent />;
}

export default Page;
