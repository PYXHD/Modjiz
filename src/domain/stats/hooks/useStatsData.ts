import { useState, useMemo } from "react";

import { useUserData } from "./useUserData";
import { useStatsNavigation } from "./useStatsNavigation";

import { getToday } from "@/lib/time/getToday";

import { getAvailableMonths } from "../aggregation/getAvailableMonths";
import { getAvailableYears } from "../aggregation/getAvailableYears";
import { getMonthData } from "../queries/getMonthData";
import { getYearData } from "../queries/getYearData";

export function useStatsData(mode: "month" | "year") {
  const data = useUserData();
  const [date, setDate] = useState(getToday());

  const availableMonths = useMemo(() => getAvailableMonths(data), [data]);
  const availableYears = useMemo(() => getAvailableYears(data), [data]);

  const { changeDate, canNavigate } = useStatsNavigation({
    mode,
    date,
    setDate,
    availableMonths,
    availableYears,
  });

  const month = date.getMonth();
  const year = date.getFullYear();

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
