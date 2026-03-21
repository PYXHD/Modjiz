"use client";

import styles from "./Stats.module.scss";
import { useState } from "react";

import Button from "../ui/button/Button";

import MonthView from "./monthView/MonthView";
import YearView from "./yearView/YearView";

function Stats() {
  const [mode, setMode] = useState<"month" | "year">("month");

  return (
    <div className={styles.stats}>
      <h1>Mon historique</h1>
      <div className={styles.buttonContainer}>
        <Button
          variant={mode === "month" ? "primary" : "outline"}
          onClick={() => setMode("month")}
        >
          Mois
        </Button>

        <Button
          variant={mode === "year" ? "primary" : "outline"}
          onClick={() => setMode("year")}
        >
          Année
        </Button>
      </div>
      {mode === "month" ? <MonthView /> : <YearView />}
    </div>
  );
}

export default Stats;
