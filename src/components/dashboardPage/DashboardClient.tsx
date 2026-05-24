"use client";

import { useAppData } from "@/lib/context/AppDataContext";

import TodayMood from "@/components/dashboardPage/TodayMood";
import RecentMoods from "@/components/dashboardPage/RecentMoods";

function DashboardClient() {
  const { userData, currentDate } = useAppData();

  return (
    <div className="dashboard">
      <TodayMood today={currentDate} data={userData} />

      <div className="separator"></div>

      <RecentMoods data={userData} today={currentDate} />
    </div>
  );
}

export default DashboardClient;
