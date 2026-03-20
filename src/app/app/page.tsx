import { getToday } from "@/lib/time/getToday";

import DashboardClient from "@/components/dashboardPage/DashboardClient";

async function Page() {
  const today = getToday();

  return <DashboardClient today={today} />;
}

export default Page;
