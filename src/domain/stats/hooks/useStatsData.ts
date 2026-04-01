import { useState, useEffect } from "react";
import { getUserData } from "@/data/getUserData";
import { getMonthData } from "@/domain/stats/queries/getMonthData";
import { getYearData } from "@/domain/stats/queries/getYearData";
import { getToday } from "@/lib/time/getToday";

import type { Entry } from "@/types/Entry";
import type { Month, Year } from "@/types/DateTypes";

import { getAvailableMonths } from "../aggregation/getAvailableMonths";
import { getAvailableYears } from "../aggregation/getAvailableYears";

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

  // ✅ 🔥 NORMALISATION de la date (clé du fix)
  const normalizedDate = (() => {
    const today = getToday();

    if (mode === "month") {
      if (isMonthAvailable(date)) return date;

      if (isMonthAvailable(today)) return today;

      const first = availableMonths[0];
      return first ? new Date(first.year, first.month) : date;
    } else {
      if (isYearAvailable(date)) return date;

      if (isYearAvailable(today)) return today;

      const first = availableYears[0];
      return first ? new Date(first, 0) : date;
    }
  })();

  const changeDate = (amount: number) => {
    const d = new Date(normalizedDate);

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
    const d = new Date(normalizedDate);

    if (mode === "month") {
      d.setMonth(d.getMonth() + amount);
      return isMonthAvailable(d);
    } else {
      d.setFullYear(d.getFullYear() + amount);
      return isYearAvailable(d);
    }
  };

  useEffect(() => {
    getUserData().then(setUserData);
  }, []);

  useEffect(() => {
    const today = getToday();

    if (mode === "month") {
      const isAvailable = availableMonths.some(
        (m) => m.year === today.getFullYear() && m.month === today.getMonth(),
      );

      if (isAvailable) {
        setDate(today);
      } else {
        const first = availableMonths[0];
        if (first) {
          setDate(new Date(first.year, first.month));
        }
      }
    } else {
      const isAvailable = availableYears.includes(today.getFullYear());

      if (isAvailable) {
        setDate(today);
      } else {
        const first = availableYears[0];
        if (first) {
          setDate(new Date(first, 0));
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const month = String(normalizedDate.getMonth() + 1).padStart(2, "0") as Month;
  const year = String(normalizedDate.getFullYear()) as Year;

  const filteredData =
    mode === "month"
      ? getMonthData(userData, month, year)
      : getYearData(userData, year);

  return {
    data: userData,
    filteredData,
    date: normalizedDate,
    changeDate,
    canNavigate,
  };
}
