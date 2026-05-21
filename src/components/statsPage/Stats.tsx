"use client";

import styles from "./Stats.module.scss";
import { useState, useEffect } from "react";

import { toDayKey } from "@/lib/time/toDayKey";
import { useAppData } from "@/lib/context/AppDataContext";

import Button from "../ui/button/Button";

import MonthView from "./monthView/MonthView";
import YearView from "./yearView/YearView";
import { saveHistoryView } from "@/data/history/saveHistoryDay";

function Stats() {
  const [mode, setMode] = useState<"month" | "year">("month");
  const { currentDate } = useAppData();

  useEffect(() => {
    saveHistoryView(toDayKey(currentDate));
  }, [currentDate]);

  return (
    <div className={styles.stats}>
      <h1 className="text-center">Mon historique</h1>

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
