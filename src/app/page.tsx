import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import LandingContent from "@/components/landingPage/LandingContent";

async function Page() {
  const cookieStore = await cookies();

  if (cookieStore.get("has-onboarded")) {
    redirect("/app");
  }

  return <LandingContent />;
}

export default Page;
