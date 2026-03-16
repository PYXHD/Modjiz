"use client";

import { useState } from "react";

import type { Entry } from "@/types/Entry";
import type { EmotionLevel } from "@/types/EmotionLevel";

import { saveEntry } from "@/data/sources/saveEntry";
import { addTodayEntry } from "@/domain/mood/addTodayEntry";

import Scene from "@/components/three/Canvas";
import Button from "@/components/ui/button/Button";

import styles from "@/app/app/page.module.scss";

type Props = {
  today: Date;
  setData: React.Dispatch<React.SetStateAction<Entry[]>>;
};

function TodayMood({ today, setData }: Props) {
  const [mood, setMood] = useState<EmotionLevel>(0);

  const moods: { value: EmotionLevel; color: string }[] = [
    { value: 0, color: "var(--color-emotion-bad)" },
    { value: 1, color: "var(--color-emotion-bad)" },
    { value: 2, color: "var(--color-emotion-meh)" },
    { value: 3, color: "var(--color-emotion-ok)" },
    { value: 4, color: "var(--color-emotion-good)" },
    { value: 5, color: "var(--color-emotion-great)" },
  ];

  async function handleSave() {
    const entry: Entry = {
      date: today.toLocaleDateString("en-CA"),
      value: mood,
    };

    await saveEntry(entry);

    setData((prev) => addTodayEntry(prev, entry));
  }

  return (
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
  );
}

export default TodayMood;
