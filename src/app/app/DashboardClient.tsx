"use client";

import { useState } from "react";

import styles from "./page.module.scss";

import { getLastDaysLabels } from "@/lib/time/getLastDaysLabel";
import { getLastDaysMood } from "@/domain/mood/getLastDaysMood";

import type { Entry } from "@/types/Entry";

import Button from "@/components/ui/button/Button";
import DaysChart from "@/components/ui/daysChart/DaysChart";
import TodayMood from "@/components/dashboard/TodayMood";

type Props = {
  userData: Entry[];
  today: Date;
};

function DashboardClient({ userData, today }: Props) {
  const [data, setData] = useState(userData);

  const dataLastDays = getLastDaysMood(data, today);
  const labels = getLastDaysLabels(today, 5);

  return (
    <div className={styles.dashboard}>
      <TodayMood today={today} setData={setData} />

      <div className={styles.separator}></div>

      <section className={styles.recentMoods}>
        <h2 className={styles.titleCentered}>Et récemment ?</h2>

        <DaysChart data={dataLastDays} labels={labels} />

        <div className={styles.buttonContainer}>
          <Button>Mon historique</Button>
          <p className={styles.textMeta}>Statistiques et tendances</p>
        </div>
      </section>
    </div>
  );
}

export default DashboardClient;
