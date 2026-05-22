"use client";

import { useAppData } from "@/lib/context/AppDataContext";

import TodayMood from "@/components/dashboardPage/TodayMood";
import RecentMoods from "@/components/dashboardPage/RecentMoods";
import { signInAnonymously } from "@/data/id/signInAnonymously";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

function DashboardClient() {
  const { userData, currentDate } = useAppData();

  useEffect(() => {
    async function run() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        await signInAnonymously();

        const {
          data: { user: newUser },
        } = await supabase.auth.getUser();

        console.log(newUser);
      } else {
        console.log(user);
      }
    }

    run();
  }, []);

  return (
    <div className="dashboard">
      <TodayMood today={currentDate} data={userData} />

      <div className="separator"></div>

      <RecentMoods data={userData} today={currentDate} />
    </div>
  );
}

export default DashboardClient;
