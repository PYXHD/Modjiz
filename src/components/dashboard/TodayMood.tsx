"use client";

import { useState } from "react";

import type { Entry } from "@/types/Entry";
import type { EmotionLevel } from "@/types/EmotionLevel";

import { saveEntry } from "@/data/sources/saveEntry";
import { addTodayEntry } from "@/domain/mood/addTodayEntry";
import { MOODS } from "@/domain/mood/moods";

import Scene from "@/components/three/Canvas";
import Button from "@/components/ui/button/Button";

import styles from "./DashboardClient.module.scss";

type Props = {
  today: Date;
  setData: React.Dispatch<React.SetStateAction<Entry[] | null>>;
};

function TodayMood({ today, setData }: Props) {
  const [mood, setMood] = useState<EmotionLevel>(0);
  const [locked, setLocked] = useState(false);
  const selectedMood = MOODS.find((m) => m.value === mood);

  async function handleSave() {
    if (locked) {
      setLocked(false);
      return;
    }

    if (mood === 0) return;

    const entry: Entry = {
      date: today.toLocaleDateString("en-CA"),
      value: mood,
    };

    await saveEntry(entry);

    setData((prev) => {
      if (!prev) return [entry];

      const exists = prev.some((e) => e.date === entry.date);

      if (exists) {
        return prev.map((e) => (e.date === entry.date ? entry : e));
      }

      return [...prev, entry];
    });

    setLocked(true);
  }

  return (
    <section className={styles.todayMood}>
      <div className={styles.titleWrapper}>
        <h1
          className={`${styles.mainTitle} ${styles.titleCentered} ${mood === 0 ? styles.visible : styles.hidden}`}
        >
          Comment ça va aujourd'hui ?
        </h1>

        <h1
          className={`${styles.mainTitle} ${styles.titleCentered} ${mood !== 0 ? styles.visible : styles.hidden}`}
        >
          Aujourd'hui je me sens : <br />
          {selectedMood?.label}
        </h1>
      </div>

      <div className={styles.modjiContainer}>
        <Scene mood={mood} />
      </div>

      <div className={styles.moodSelector}>
        <div className={styles.moodList}>
          {MOODS.filter((m) => m.value !== 0).map((m) => (
            <input
              key={m.value}
              type="radio"
              name="mood"
              value={m.value}
              checked={mood === m.value}
              onChange={() => {
                if (locked) return;
                setMood(m.value);
              }}
              disabled={locked}
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

      <Button onClick={handleSave} disabled={mood === 0 && !locked}>
        {locked ? "Modifier" : "Enregistrer"}
      </Button>
    </section>
  );
}

export default TodayMood;
