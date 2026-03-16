"use client";

import { useState } from "react";

import styles from "./DashboardClient.module.scss";

import type { Entry } from "@/types/Entry";

import TodayMood from "@/components/dashboard/TodayMood";
import RecentMoods from "@/components/dashboard/RecentMoods";

type Props = {
  userData: Entry[];
  today: Date;
};

function DashboardClient({ userData, today }: Props) {
  const [data, setData] = useState(userData);

  return (
    <div className={styles.dashboard}>
      <TodayMood today={today} setData={setData} />

      <div className={styles.separator}></div>

      <RecentMoods data={data} today={today} />
    </div>
  );
}

export default DashboardClient;
