import { useState, useEffect } from "react";
import { getUserData } from "@/data/getUserData";
import { getMonthData } from "@/domain/stats/getMonthData";
import { getYearData } from "../getYearData";
import { getToday } from "@/lib/time/getToday";

import type { Entry } from "@/types/Entry";
import type { Month, Year } from "@/types/DateTypes";

import { getAvailableMonths } from "../getAvailableMonth";
import { getAvailableYears } from "../getAvailableYear";

export function useStatsData(mode: "month" | "year") {
  const [userData, setUserData] = useState<Entry[]>([]);
  const [date, setDate] = useState(getToday());

  const availableMonths = getAvailableMonths(userData);
  const availableYears = getAvailableYears(userData);

  const isMonthAvailable = (d: Date) => {
    return availableMonths.some(
      (m) => m.year === d.getFullYear() && m.month === d.getMonth(),
    );
  };
  const isYearAvailable = (d: Date) => {
    return availableYears.includes(d.getFullYear());
  };

  const changeDate = (amount: number) => {
    const d = new Date(date);

    if (mode === "month") {
      d.setMonth(d.getMonth() + amount);

      if (!isMonthAvailable(d)) return;
    } else {
      d.setFullYear(d.getFullYear() + amount);

      if (!isYearAvailable(d)) return;
    }

    setDate(d);
  };

  const canNavigate = (amount: number) => {
    const d = new Date(date);

    if (mode === "month") {
      d.setMonth(d.getMonth() + amount);
      return isMonthAvailable(d);
    } else {
      d.setFullYear(d.getFullYear() + amount);
      return isYearAvailable(d);
    }
  };

  useEffect(() => {
    const today = getToday();

    if (mode === "month") {
      if (!isMonthAvailable(today)) {
        const first = availableMonths[0];
        if (first) {
          setDate(new Date(first.year, first.month));
        }
      } else {
        setDate(today);
      }
    } else {
      if (!isYearAvailable(today)) {
        const first = availableYears[0];
        if (first) {
          setDate(new Date(first, 0));
        }
      } else {
        setDate(today);
      }
    }
  }, [mode, userData]);

  useEffect(() => {
    getUserData().then(setUserData);
  }, []);

  const month = String(date.getMonth() + 1).padStart(2, "0") as Month;
  const year = String(date.getFullYear()) as Year;

  let filteredData: Entry[] = [];

  if (mode === "month") {
    filteredData = getMonthData(userData, month, year);
  } else {
    filteredData = getYearData(userData, year);
  }

  return {
    filteredData,
    date,
    changeDate,
    canNavigate,
  };
}
