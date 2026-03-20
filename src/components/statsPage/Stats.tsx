"use client";

import styles from "./Stats.module.scss";
import { useState } from "react";

import Button from "../ui/button/Button";
import TimeSwitcher from "./timeSwitcher/TimeSwitcher";
import { useStatsData } from "@/domain/stats/hooks/useStatsData";

function Stats() {
  const [mode, setMode] = useState<"month" | "year">("month");

  const { filteredData, date, changeDate, canNavigate } = useStatsData(mode);

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
          canGoPrev={canNavigate(-1)}
          canGoNext={canNavigate(1)}
        />
        {/* REFACTOR */}
      </section>

      <div className={styles.separator}></div>

      <section className="bottomSection"></section>
    </div>
  );
}

export default Stats;
