"use client";
import { useState } from "react";
import styles from "./page.module.scss";

import { getToday } from "@/lib/time/getToday";

import Button from "@/components/ui/button/Button";
import DaysChart from "@/components/ui/daysChart/DaysChart";

export default function Page() {
  const [mood, setMood] = useState("pensive");
  const moods = [
    { value: "sad", color: "var(--color-emotion-bad)" },
    { value: "meh", color: "var(--color-emotion-meh)" },
    { value: "ok", color: "var(--color-emotion-ok)" },
    { value: "good", color: "var(--color-emotion-good)" },
    { value: "great", color: "var(--color-emotion-great)" },
  ];

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
        </div>
      </section>
      <div className={styles.separator}></div>
      <section className={styles.recentMoods}>
        <h2 className={styles.titleCentered}>Et récemment ?</h2>
        <DaysChart />
        <div className={styles.buttonContainer}>
          <Button>Mon historique</Button>
          <p className={styles.textMeta}>Statistiques et tendances</p>
        </div>
      </section>
    </div>
  );
}
