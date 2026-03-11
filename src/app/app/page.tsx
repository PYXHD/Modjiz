"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

import { getToday } from "@/lib/time/getToday";
import { getLastDaysLabels } from "@/lib/time/getLastDaysLabel";

import type { Entry } from "@/types/Entry";

import Button from "@/components/ui/button/Button";
import DaysChart from "@/components/ui/daysChart/DaysChart";
import { getLastDaysMood } from "@/domain/mood/getLastDaysMood";
import { getUserData } from "@/data/getUserData";
import { saveEntry } from "@/data/sources/saveEntry";
import { addTodayEntry } from "@/domain/mood/addTodayEntry";

export default function Page() {
  // REFACTOR ///////////////////////////
  const [userData, setUserData] = useState<Entry[]>([]);
  useEffect(() => {
    async function loadData() {
      const data = await getUserData();
      setUserData(data);
    }

    loadData();
  }, []);
  // REFACTOR ///////////////////////////

  const [mood, setMood] = useState<number>(0);
  // REFACTOR ///////////////////////////
  const moods = [
    { value: 1, color: "var(--color-emotion-bad)" },
    { value: 2, color: "var(--color-emotion-meh)" },
    { value: 3, color: "var(--color-emotion-ok)" },
    { value: 4, color: "var(--color-emotion-good)" },
    { value: 5, color: "var(--color-emotion-great)" },
  ];
  // REFACTOR ///////////////////////////

  const todayDate = getToday();
  const todayLabel = todayDate
    .toLocaleDateString("fr-FR", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "Europe/Paris",
    })
    .replace(/^\w/, (c) => c.toUpperCase());

  const data = getLastDaysMood(userData, todayDate);
  const labels = getLastDaysLabels(todayDate, 5);

  async function handleSave() {
    const entry: Entry = {
      date: todayDate.toLocaleDateString("en-CA"),
      value: mood,
    };

    await saveEntry(entry);

    setUserData((prev) => addTodayEntry(prev, entry));
  }

  return (
    <div className={styles.dashboard}>
      <section className={styles.todayMood}>
        <div className={`${styles.today} ${styles.textBody}`}>{todayLabel}</div>
        <h1 className={styles.titleCentered}>Comment ça va aujourd'hui ?</h1>
        <div className={styles.modji}></div>
        <div className={styles.moodSelector}>
          <div className={styles.moodList}>
            {moods.map((m) => (
              <input
                key={m.value}
                type="radio"
                name="mood"
                value={m.value}
                checked={mood === m.value}
                onChange={() => setMood(m.value)}
                style={{ backgroundColor: m.color, color: m.color }}
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
        <DaysChart data={data} labels={labels} />
        <div className={styles.buttonContainer}>
          <Button>Mon historique</Button>
          <p className={styles.textMeta}>Statistiques et tendances</p>
        </div>
      </section>
    </div>
  );
}
