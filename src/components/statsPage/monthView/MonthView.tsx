import styles from "../Stats.module.scss";

import { useMemo } from "react";

import { useStatsData } from "@/domain/stats/hooks/useStatsData";
import { getMonthChart } from "@/domain/stats/getMonthChart";
import { average } from "@/domain/stats/average";

import TimeSwitcher from "@/components/statsPage/timeSwitcher/TimeSwitcher";
import MonthGraph from "@/components/statsPage/monthView/monthGraph/MonthGraph";

function MonthView() {
  const { filteredData, date, changeDate, canNavigate } = useStatsData("month");

  const month = date.getMonth();
  const year = date.getFullYear();

  const chartData = getMonthChart(filteredData, month, year);

  const avg = useMemo(() => average(filteredData), [filteredData]);

  const monthLabel = useMemo(
    () => date.toLocaleString("fr-FR", { month: "long" }),
    [date],
  );

  return (
    <div className={styles.subContainer}>
      <TimeSwitcher
        label={monthLabel}
        subLabel={year.toString()}
        onPrev={() => changeDate(-1)}
        onNext={() => changeDate(1)}
        canGoPrev={canNavigate(-1)}
        canGoNext={canNavigate(1)}
      />
      <MonthGraph chartData={chartData} average={avg} />
    </div>
  );
}

export default MonthView;
