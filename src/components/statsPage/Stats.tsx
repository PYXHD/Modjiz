"use client";

import styles from "./Stats.module.scss";
import { useEffect, useState } from "react";

import { getToday } from "@/lib/time/getToday";
import { toDayKey } from "@/lib/time/toDayKey";

import Button from "../ui/button/Button";

import MonthView from "./monthView/MonthView";
import YearView from "./yearView/YearView";
import { upsertHistoryDay } from "@/domain/mood/upsertHistoryDay";
import { getHistoryData } from "@/data/getHistoryData";

function Stats() {
  const [mode, setMode] = useState<"month" | "year">("month");

  useEffect(() => {
    async function init() {
      const stored = await getHistoryData();

      const today = toDayKey(getToday());
      const updated = upsertHistoryDay(stored, today);

      sessionStorage.setItem("history-data", JSON.stringify(updated));
    }

    init();
  }, []);

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
