import styles from "../Stats.module.scss";

import { useMemo } from "react";

import { useStatsData } from "@/domain/stats/hooks/useStatsData";
import { getMonthChart } from "@/domain/stats/getMonthChart";
import { average } from "@/domain/stats/average";

import TimeSwitcher from "@/components/statsPage/timeSwitcher/TimeSwitcher";
import MonthGraph from "@/components/statsPage/monthView/monthGraph/MonthGraph";
import BestData from "@/components/ui/bestData/BestData";
import { getMonthGroupBy } from "@/domain/stats/getMonthGroupBy";

function MonthView() {
  const { filteredData, date, changeDate, canNavigate } = useStatsData("month");

  const month = date.getMonth();
  const year = date.getFullYear();

  const chartData = getMonthChart(filteredData, month, year);

  const avg = useMemo(() => average(filteredData), [filteredData]);
  const chartDataLength = chartData.length;
  const mostValue = getMonthGroupBy(chartData);

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
      <div className={styles.graphContainer}>
        <div className={styles.avgContainer}>
          <div className={styles.avgLine}></div>
          <div>moyenne: {avg.toFixed(1)}</div>
        </div>
        <MonthGraph chartData={chartData} average={avg} />
      </div>
      <BestData
        mostValue={mostValue?.value ?? null}
        count={mostValue?.count ?? 0}
        chartDataLength={chartDataLength}
      />
    </div>
  );
}

export default MonthView;
