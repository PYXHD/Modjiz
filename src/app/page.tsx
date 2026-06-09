import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import LandingContent from "@/components/landingPage/LandingContent";

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
