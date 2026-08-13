import { getAppMode } from "@/lib/init/getAppMode";
import MockBootstrap from "./MockBootstrap";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function IdentityBootstrap() {
  const appMode = await getAppMode();

  if (!appMode) {
    redirect("/");
  }

  if (appMode === "mock") {
    return <MockBootstrap />;
  }
  if (appMode === "real") {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      redirect("/auth/signup");
    }

    redirect("/app");
  }
}
