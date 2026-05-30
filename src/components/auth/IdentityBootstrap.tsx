import { getAppMode } from "@/lib/init/getAppMode";
import MockBootstrap from "./MockBootstrap";

export default async function IdentityBootstrap() {
  const appMode = await getAppMode();

  if (appMode === "mock") {
    return <MockBootstrap />;
  }
}
