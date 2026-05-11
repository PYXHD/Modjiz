import { useState, useMemo } from "react";

import { useAppData } from "@/lib/context/AppDataContext";
import { useStatsNavigation } from "./useStatsNavigation";

import { getAvailableMonths } from "../aggregation/getAvailableMonths";
import { getAvailableYears } from "../aggregation/getAvailableYears";
import { getMonthData } from "../queries/getMonthData";
import { getYearData } from "../queries/getYearData";

export function useStatsData(mode: "month" | "year") {
  const { userData, currentDate } = useAppData();
  const data = userData;
  const [date, setDate] = useState(currentDate);

  const availableMonths = useMemo(() => getAvailableMonths(data), [data]);
  const availableYears = useMemo(() => getAvailableYears(data), [data]);

  const { changeDate, canNavigate } = useStatsNavigation({
    mode,
    date,
    today: currentDate,
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
