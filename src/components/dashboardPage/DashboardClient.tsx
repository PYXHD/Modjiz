"use client";

import { useAppData } from "@/lib/context/AppDataContext";

import TodayMood from "@/components/dashboardPage/TodayMood";
import RecentMoods from "@/components/dashboardPage/RecentMoods";
import { signInAnonymously } from "@/data/id/signInAnonymously";
import { useEffect, useMemo } from "react";
import { createClient } from "@/lib/supabase/browser";

function DashboardClient() {
  const { userData, currentDate } = useAppData();
  const supabase = useMemo(() => createClient(), []);

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
