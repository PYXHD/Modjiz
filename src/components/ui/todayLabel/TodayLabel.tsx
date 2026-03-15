"use client";
import styles from "./TodayLabel.module.scss";
import { getToday } from "@/lib/time/getToday";

function todayLabel() {
  const todayDate = getToday();
  const today = todayDate
    .toLocaleDateString("fr-FR", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "Europe/Paris",
    })
    .replace(/^\w/, (c) => c.toUpperCase());

  return <div className={styles.today}>{today}</div>;
}

export default todayLabel;
