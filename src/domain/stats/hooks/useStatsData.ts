import { useState, useEffect } from "react";
import { getUserData } from "@/data/getUserData";
import { getMonthData } from "@/domain/stats/getMonthData";

import type { Entry } from "@/types/Entry";

import type { Month, Year } from "@/types/DateTypes";
import { getAvailableMonths } from "../getAvailableMonth";

export function useStatsData(mode: "month" | "year") {
  const [data, setData] = useState<Entry[]>([]);
  const [date, setDate] = useState(new Date());

  const availableMonths = getAvailableMonths(data);
  const isMonthAvailable = (d: Date) => {
    return availableMonths.some(
      (m) => m.year === d.getFullYear() && m.month === d.getMonth(),
    );
  };

  useEffect(() => {
    getUserData().then(setData);
  }, []);

  const month = String(date.getMonth() + 1).padStart(2, "0") as Month;
  const year = String(date.getFullYear()) as Year;

  let filteredData = [];

  if (mode === "month") {
    filteredData = getMonthData(data, month, year);
  } else {
    filteredData = data.filter((entry) => entry.date.slice(0, 4) === year);
  }

  return {
    data,
    filteredData,
    date,
    setDate,
    isMonthAvailable,
  };
}
