"use client";
import { useState } from "react";

import Button from "@/components/ui/button/Button";

export default function Page() {
  const [mood, setMood] = useState("pensive");
  const moods = [
    { value: "sad", color: "var(--color-emotion-bad)" },
    { value: "meh", color: "var(--color-emotion-meh)" },
    { value: "ok", color: "var(--color-emotion-ok)" },
    { value: "good", color: "var(--color-emotion-good)" },
    { value: "great", color: "var(--color-emotion-great)" },
  ];
  const today = new Date()
    .toLocaleDateString("fr-FR", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "Europe/Paris",
    })
    .replace(/^\w/, (c) => c.toUpperCase());

  return (
    <main className="dashboard">
      <div className="date">{today}</div>
      <section>
        <h1>Comment ça va aujourd'hui</h1>
        <div className="modji"></div>
        <div className="mood-selector">
          <div className="moods-inputs">
            {moods.map((m) => (
              <input
                key={m.value}
                type="radio"
                name="mood"
                value={m.value}
                checked={mood === m.value}
                onChange={() => setMood(m.value)}
                style={{ backgroundColor: m.color }}
                className="mood"
              />
            ))}
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="recents-moods">
        <h2>Et récemment ?</h2>
        <div className="graph"></div>
        <div className="button">
          <Button>Mon historique</Button>
          <p>Statistiques et tendances</p>
        </div>
      </section>
    </main>
  );
}
