"use client";

import { useState } from "react";

import { useAppData } from "@/lib/context/AppDataContext";
import { toDayKey } from "@/lib/time/toDayKey";

import { MOODS } from "@/domain/mood/config/moods";
import type { EmotionLevel } from "@/domain/mood/config/moods";

import { saveEntry } from "@/data/user/saveEntry";

import Scene from "@/components/three/Canvas";
import Button from "@/components/ui/button/Button";

import type { Entry } from "@/types/Entry";

type Props = {
  today: Date;
  data: Entry[];
};

function TodayMood({ today, data }: Props) {
  const { setUserData } = useAppData();

  const todayStr = toDayKey(today);

  const existingEntry = data.find((e) => e.date === todayStr);

  const [isEditing, setIsEditing] = useState(() => !existingEntry);
  const [isSaving, setIsSaving] = useState(false);

  const [mood, setMood] = useState<EmotionLevel>(() =>
    existingEntry ? (existingEntry.value as EmotionLevel) : 0,
  );

  const selectedMood = MOODS.find((m) => m.value === mood);

  async function handleSave() {
    if (isSaving) return;

    if (!isEditing) {
      setIsEditing(true);
      return;
    }

    setIsSaving(true);

    try {
      const entry: Entry = {
        date: todayStr,
        value: mood,
      };

      await saveEntry(entry);

      setUserData((prev) => {
        const exists = prev.some((e) => e.date === todayStr);

        if (exists) {
          return prev.map((e) =>
            e.date === todayStr ? { ...e, value: mood } : e,
          );
        }

        return [...prev, entry];
      });

      setIsEditing(false);
    } catch (error) {
      console.error(error);

      alert("Impossible d'enregistrer votre humeur.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <section className="todayMood">
      <div className="titleContainer">
        <h1
          className={`mainTitle ${
            mood === 0 ? "visible" : "hidden"
          } text-center`}
        >
          Comment ça va aujourd'hui ?
        </h1>

        <h1
          className={`mainTitle ${
            mood !== 0 ? "visible" : "hidden"
          } text-center`}
        >
          Aujourd'hui je me sens : <br />
          {selectedMood?.label}
        </h1>
      </div>

      <div className="modji">
        <Scene mood={mood} />
      </div>

      <div className="moodSelector">
        <div className="moodSelector_list">
          {MOODS.filter((m) => m.value !== 0).map((m) => (
            <input
              key={m.value}
              type="radio"
              name="mood"
              value={m.value}
              checked={mood === m.value}
              onChange={() => {
                if (!isEditing || isSaving) return;
                setMood(m.value);
              }}
              disabled={!isEditing || isSaving}
              style={{
                backgroundColor: m.color,
                color: m.color,
              }}
              className="mood"
            />
          ))}
        </div>

        <div className="moodRange">
          <div className="text-primary text-caption text-center">pas ouf</div>
          <div className="moodShow"></div>
          <div className="text-primary text-caption text-center">au top</div>
        </div>
      </div>

      <Button
        onClick={handleSave}
        disabled={(mood === 0 && isEditing) || isSaving}
      >
        {isSaving
          ? "Enregistrement..."
          : isEditing
            ? "Enregistrer"
            : "Modifier"}
      </Button>
    </section>
  );
}

export default TodayMood;
