"use client";

import { useState, useEffect } from "react";
import { getUserData } from "@/data/getUserData";

import styles from "./DashboardClient.module.scss";

import type { Entry } from "@/types/Entry";

import TodayMood from "@/components/dashboardPage/TodayMood";
import RecentMoods from "@/components/dashboardPage/RecentMoods";

type Props = {
  today: Date;
};

function DashboardClient({ today }: Props) {
  const [data, setData] = useState<Entry[] | null>(null);
  useEffect(() => {
    getUserData().then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className={styles.dashboard}>
      <TodayMood today={today} data={data} setData={setData} />

      <div className={styles.separator}></div>

      <RecentMoods data={data} today={today} />
    </div>
  );
}

export default DashboardClient;
