import { useMemo } from "react";

import { useStatsData } from "@/domain/stats/hooks/useStatsData";
import { getMonthData } from "@/domain/stats/queries/getMonthData";
import { getMonthChart } from "@/domain/stats/chart/getMonthChart";
import { average } from "@/domain/stats/core/average";

import TimeSwitcher from "@/components/statsPage/timeSwitcher/TimeSwitcher";
import MonthGraph from "@/components/statsPage/monthView/monthGraph/MonthGraph";
import MonthProgress from "./monthProgress/MonthProgress";
import BestData from "@/components/ui/bestData/BestData";
import { getDominantEmotion } from "@/domain/stats/aggregation/getDominantEmotion";

import styles from "../Stats.module.scss";

function MonthView() {
  const { data, filteredData, date, changeDate, canNavigate } =
    useStatsData("month");

  const month = date.getMonth();
  const year = date.getFullYear();

  const chartData = useMemo(
    () => getMonthChart(filteredData, month, year),
    [filteredData, month, year],
  );

  const avg = useMemo(() => average(filteredData), [filteredData]);

  const chartDataLength = useMemo(
    () =>
      filteredData.reduce(
        (acc, item) => acc + (item.value !== null ? 1 : 0),
        0,
      ),
    [filteredData],
  );

  const dominantEmotion = useMemo(
    () => getDominantEmotion(filteredData),
    [filteredData],
  );

  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;

  const prevMonthData = useMemo(() => {
    const monthStr = String(prevMonth + 1).padStart(2, "0");
    const yearStr = prevYear.toString();
    return getMonthData(data, monthStr, yearStr);
  }, [data, prevMonth, prevYear]);

  const avgPrev = useMemo(() => average(prevMonthData), [prevMonthData]);

  const monthLabel = date.toLocaleString("fr-FR", { month: "long" });
  const prevMonthLabel = new Date(prevYear, prevMonth).toLocaleString("fr-FR", {
    month: "long",
  });

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
        <MonthGraph chartData={chartData} average={avg} />
        <div className={styles.avgContainer}>
          <div className={styles.avgLine}></div>
          <div>moyenne: {avg.toFixed(1)}</div>
        </div>
      </div>

      <BestData
        mostValue={dominantEmotion?.value ?? null}
        count={dominantEmotion?.count ?? 0}
        chartDataLength={chartDataLength}
      />

      <div className={styles.separator}></div>

      <MonthProgress
        label={monthLabel}
        labelPrev={prevMonthLabel}
        avgCurrent={avg}
        avgPrev={avgPrev}
        changeDate={changeDate}
        canNavigate={canNavigate}
      />
    </div>
  );
}

export default MonthView;
