import { Mode, AvailableMonth } from "../types/stats.types";

import { normalizeMonth } from "./normalizeMonths";

type IsWithinBoundsParams = {
  date: Date;
  today: Date;
  mode: Mode;
  availableMonths: AvailableMonth[];
  availableYears: number[];
};

export function isWithinBounds({
  date,
  today,
  mode,
  availableMonths,
  availableYears,
}: IsWithinBoundsParams) {
  if (mode === "month") {
    const current = normalizeMonth(date);
    const max = normalizeMonth(today);

    if (!availableMonths.length) {
      return current <= max;
    }

    const min = new Date(availableMonths[0].year, availableMonths[0].month);

    return current >= min && current <= max;
  } else {
    const current = new Date(date.getFullYear(), 0);
    const max = new Date(today.getFullYear(), 0);

    if (!availableYears.length) {
      return current <= max;
    }

    const min = new Date(availableYears[0], 0);

    return current >= min && current <= max;
  }
}
