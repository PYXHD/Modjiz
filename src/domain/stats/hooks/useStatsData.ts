import { useState } from "react";

import { useUserData } from "./useUserData";
import { useStatsNavigation } from "./useStatsNavigation";

import { getToday } from "@/lib/time/getToday";

import { getAvailableMonths } from "../aggregation/getAvailableMonths";
import { getAvailableYears } from "../aggregation/getAvailableYears";
import { getMonthData } from "../queries/getMonthData";
import { getYearData } from "../queries/getYearData";

import type { Month, Year } from "@/types/DateTypes";

export function useStatsData(mode: "month" | "year") {
  const data = useUserData();
  const [date, setDate] = useState(getToday());

  const availableMonths = getAvailableMonths(data);
  const availableYears = getAvailableYears(data);

  const { changeDate, canNavigate } = useStatsNavigation({
    mode,
    date,
    setDate,
    availableMonths,
    availableYears,
  });

  const month = String(date.getMonth() + 1).padStart(2, "0") as Month;
  const year = String(date.getFullYear()) as Year;

  const filteredData =
    mode === "month"
      ? getMonthData(data, month, year)
      : getYearData(data, year);

  return {
    data,
    filteredData,
    date,
    changeDate,
    canNavigate,
  };
}
