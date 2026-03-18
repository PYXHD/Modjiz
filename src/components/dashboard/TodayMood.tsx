"use client";

import { useEffect, useState } from "react";

import type { Entry } from "@/types/Entry";
import type { EmotionLevel } from "@/types/EmotionLevel";

import { saveEntry } from "@/data/sources/saveEntry";
import { upsertEntry } from "@/domain/mood/upsertEntry";
import { MOODS } from "@/domain/mood/moods";

import Scene from "@/components/three/Canvas";
import Button from "@/components/ui/button/Button";

import styles from "./DashboardClient.module.scss";

type Props = {
  today: Date;
  data: Entry[] | null;
  setData: React.Dispatch<React.SetStateAction<Entry[] | null>>;
};

function TodayMood({ today, data, setData }: Props) {
  const [mood, setMood] = useState<EmotionLevel>(0);
  const [isEditing, setIsEditing] = useState(true);

  const todayStr = today.toLocaleDateString("en-CA");
  const existingEntry = data?.find((e) => e.date === todayStr);
  const selectedMood = MOODS.find((m) => m.value === mood);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    if (existingEntry) {
      setMood(existingEntry.value as EmotionLevel);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }, [existingEntry]);

  async function handleSave() {
    if (!isEditing) {
      setIsEditing(true);
      return;
    }

    if (mood === 0) return;

    const entry: Entry = {
      date: todayStr,
      value: mood,
    };

    await saveEntry(entry);
    setData((prev) => upsertEntry(prev, entry));

    setIsEditing(false);
  }

  return (
    <section className={styles.todayMood}>
      <div className={styles.titleWrapper}>
        <h1
          className={`${styles.mainTitle} ${styles.titleCentered} ${
            mood === 0 ? styles.visible : styles.hidden
          }`}
        >
          Comment ça va aujourd'hui ?
        </h1>

        <h1
          className={`${styles.mainTitle} ${styles.titleCentered} ${
            mood !== 0 ? styles.visible : styles.hidden
          }`}
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
                if (!isEditing) return;
                setMood(m.value);
              }}
              disabled={!isEditing}
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

      <Button onClick={handleSave} disabled={mood === 0 && isEditing}>
        {isEditing ? "Enregistrer" : "Modifier"}
      </Button>
    </section>
  );
}

export default TodayMood;
