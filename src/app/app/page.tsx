import { getUserData } from "@/data/getUserData";
import { getToday } from "@/lib/time/getToday";

import DashboardClient from "./DashboardClient";

async function Page() {
  const userData = await getUserData();
  const today = getToday();

  return <DashboardClient userData={userData} today={today} />;
}

export default Page;
