import { Metadata } from "next";

import DashboardClient from "@/components/dashboardPage/DashboardClient";

export const metadata: Metadata = {
  title: "Tableau de bord",
};

function Page() {
  return <DashboardClient />;
}

export default Page;
