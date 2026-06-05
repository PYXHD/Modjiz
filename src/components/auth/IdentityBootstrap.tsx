import { getAppMode } from "@/lib/init/getAppMode";
import MockBootstrap from "./MockBootstrap";
import RealBoostrap from "./RealBootstrap";
import { redirect } from "next/navigation";

export default async function IdentityBootstrap() {
  const appMode = await getAppMode();

  if (!appMode) {
    redirect("/");
  }

  if (appMode === "mock") {
    return <MockBootstrap />;
  }
  if (appMode === "real") {
    return <RealBoostrap />;
  }
}
