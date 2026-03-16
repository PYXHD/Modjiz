"use client";

import { useState } from "react";

import styles from "./page.module.scss";

import { getLastDaysLabels } from "@/lib/time/getLastDaysLabel";
import { getLastDaysMood } from "@/domain/mood/getLastDaysMood";

import type { Entry } from "@/types/Entry";
import type { EmotionLevel } from "@/types/EmotionLevel";

import Button from "@/components/ui/button/Button";
import DaysChart from "@/components/ui/daysChart/DaysChart";
import { saveEntry } from "@/data/sources/saveEntry";
import { addTodayEntry } from "@/domain/mood/addTodayEntry";
import Scene from "@/components/three/Canvas";

type Props = {
  userData: Entry[];
  today: Date;
};

function DashboardClient({ userData, today }: Props) {
  const [data, setData] = useState(userData);
  const [mood, setMood] = useState<EmotionLevel>(0);

  const moods: { value: EmotionLevel; color: string }[] = [
    { value: 0, color: "var(--color-emotion-bad)" },
    { value: 1, color: "var(--color-emotion-bad)" },
    { value: 2, color: "var(--color-emotion-meh)" },
    { value: 3, color: "var(--color-emotion-ok)" },
    { value: 4, color: "var(--color-emotion-good)" },
    { value: 5, color: "var(--color-emotion-great)" },
  ];

  const dataLastDays = getLastDaysMood(data, today);
  const labels = getLastDaysLabels(today, 5);

  async function handleSave() {
    const entry: Entry = {
      date: today.toLocaleDateString("en-CA"),
      value: mood,
    };

    await saveEntry(entry);

    setData((prev) => addTodayEntry(prev, entry));
  }

  return (
    <div className={styles.dashboard}>
      <section className={styles.todayMood}>
        <h1 className={styles.titleCentered}>Comment ça va aujourd'hui ?</h1>

        <div className={styles.modjiContainer}>
          <Scene mood={mood} />
        </div>

        <div className={styles.moodSelector}>
          <div className={styles.moodList}>
            {moods
              .filter((m) => m.value !== 0)
              .map((m) => (
                <input
                  key={m.value}
                  type="radio"
                  name="mood"
                  value={m.value}
                  checked={mood === m.value}
                  onChange={() => setMood(m.value)}
                  style={{
                    backgroundColor: m.color,
                    color: m.color,
                  }}
                  className={styles.mood}
                />
              ))}
          </div>

          <div className={styles.moodRange}>
            <div className={styles.textMeta}>pas ouf</div>
            <div className={styles.moodShow}></div>
            <div className={styles.textMeta}>au top</div>
          </div>
        </div>

        <Button onClick={handleSave}>Enregistrer</Button>
      </section>

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
