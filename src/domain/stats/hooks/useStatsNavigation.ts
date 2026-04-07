import { Mode, AvailableMonth } from "../types/stats.types";

import { isWithinBounds } from "../core/isWithinBounds";

type UseStatsNavigationParams = {
  mode: Mode;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  availableMonths: AvailableMonth[];
  availableYears: number[];
};

export function useStatsNavigation({
  mode,
  date,
  setDate,
  availableMonths,
  availableYears,
}: UseStatsNavigationParams) {
  const changeDate = (amount: number) => {
    const d = new Date(date);

    if (mode === "month") {
      d.setMonth(d.getMonth() + amount);
    } else {
      d.setFullYear(d.getFullYear() + amount);
    }

    if (
      !isWithinBounds({
        date: d,
        mode,
        availableMonths,
        availableYears,
      })
    )
      return;

    setDate(d);
  };

  const canNavigate = (amount: number) => {
    const d = new Date(date);

    if (mode === "month") {
      d.setMonth(d.getMonth() + amount);
    } else {
      d.setFullYear(d.getFullYear() + amount);
    }

    return isWithinBounds({
      date: d,
      mode,
      availableMonths,
      availableYears,
    });
  };

  return { changeDate, canNavigate };
}
