"use client";

import { useAppData } from "@/lib/context/AppDataContext";

import TodayMood from "@/components/dashboardPage/TodayMood";
import RecentMoods from "@/components/dashboardPage/RecentMoods";

type Props = {
  today: Date;
};

function DashboardClient({ today }: Props) {
  const { userData } = useAppData();

  return (
    <div className="dashboard">
      <TodayMood today={today} data={userData} />

      <div className="separator"></div>

      <RecentMoods data={userData} today={today} />
    </div>
  );
}

export default DashboardClient;
