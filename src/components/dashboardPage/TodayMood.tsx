"use client";

import { useState } from "react";

import { upsertEntry } from "@/domain/mood/upsertEntry";
import { MOODS } from "@/domain/mood/config/moods";
import type { EmotionLevel } from "@/domain/mood/config/moods";

import { saveEntry } from "@/data/sources/saveEntry";

import Scene from "@/components/three/Canvas";
import Button from "@/components/ui/button/Button";

import type { Entry } from "@/types/Entry";

type Props = {
  today: Date;
  data: Entry[];
  setData: React.Dispatch<React.SetStateAction<Entry[]>>;
};

function TodayMood({ today, data, setData }: Props) {
  const todayStr = today.toLocaleDateString("en-CA");

  const existingEntry = data.find((e) => e.date === todayStr);

  const [isEditing, setIsEditing] = useState(() => !existingEntry);

  const [mood, setMood] = useState<EmotionLevel>(() =>
    existingEntry ? (existingEntry.value as EmotionLevel) : 0,
  );

  const selectedMood = MOODS.find((m) => m.value === mood);

  async function handleSave() {
    if (!isEditing) {
      setIsEditing(true);
      return;
    }

    const entry: Entry = {
      date: todayStr,
      value: mood,
    };

    await saveEntry(entry);
    setData((prev) => upsertEntry(prev, entry));

    setIsEditing(false);
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
                if (!isEditing) return;
                setMood(m.value);
              }}
              disabled={!isEditing}
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

      <Button onClick={handleSave} disabled={mood === 0 && isEditing}>
        {isEditing ? "Enregistrer" : "Modifier"}
      </Button>
    </section>
  );
}

export default TodayMood;
