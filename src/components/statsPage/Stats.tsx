"use client";

import styles from "./Stats.module.scss";
import { useState } from "react";

import Button from "../ui/button/Button";
import TimeSwitcher from "./timeSwitcher/TimeSwitcher";
import { useStatsData } from "@/domain/stats/hooks/useStatsData";

function Stats() {
  const [mode, setMode] = useState<"month" | "year">("month");

  const { filteredData, date, setDate, isMonthAvailable } = useStatsData(mode);

  const changeDate = (amount: number) => {
    const d = new Date(date);

    if (mode === "month") {
      d.setMonth(d.getMonth() + amount);
    } else {
      d.setFullYear(d.getFullYear() + amount);
    }

    if (mode === "month" && !isMonthAvailable(d)) {
      return;
    }

    setDate(d);
  };

  return (
    <div className={styles.stats}>
      <section className={styles.topSection}>
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
        {/* REFACTOR */}
        <TimeSwitcher
          label={
            mode === "month"
              ? date.toLocaleString("fr-FR", { month: "long" })
              : date.getFullYear().toString()
          }
          subLabel={
            mode === "month" ? date.getFullYear().toString() : undefined
          }
          onPrev={() => changeDate(-1)}
          onNext={() => changeDate(1)}
        />
        {/* REFACTOR */}
      </section>

      <div className={styles.separator}></div>

      <section className="bottomSection"></section>
    </div>
  );
}

export default Stats;
