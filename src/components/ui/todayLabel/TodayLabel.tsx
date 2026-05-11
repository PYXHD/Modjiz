"use client";

import { useAppData } from "@/lib/context/AppDataContext";

function TodayLabel() {
  const { currentDate } = useAppData();

  const today = currentDate
    .toLocaleDateString("fr-FR", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "Europe/Paris",
    })
    .replace(/^\w/, (c) => c.toUpperCase());

  return <div className="text-body text-center">{today}</div>;
}

export default TodayLabel;
