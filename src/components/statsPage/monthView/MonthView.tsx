import styles from "../Stats.module.scss";

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

function MonthView() {
  const { data, filteredData, date, changeDate, canNavigate } =
    useStatsData("month");

  const month = date.getMonth();
  const year = date.getFullYear();

  const chartData = getMonthChart(filteredData, month, year);

  const prevDate = useMemo(() => {
    const d = new Date(date);
    d.setMonth(d.getMonth() - 1);
    return d;
  }, [date]);

  const prevMonthData = useMemo(() => {
    const month = String(prevDate.getMonth() + 1).padStart(2, "0");
    const year = prevDate.getFullYear().toString();

    return getMonthData(data, month, year);
  }, [data, prevDate]);

  const avg = useMemo(() => average(filteredData), [filteredData]);

  const avgPrev = useMemo(() => average(prevMonthData), [prevMonthData]);

  const chartDataLength = filteredData.filter(
    (item) => item.value !== null,
  ).length;

  const mostValue = getDominantEmotion(filteredData);

  const monthLabel = useMemo(
    () => date.toLocaleString("fr-FR", { month: "long" }),
    [date],
  );
  const prevMonthLabel = useMemo(() => {
    return prevDate.toLocaleString("fr-FR", { month: "long" });
  }, [prevDate]);

  return (
    <div className={styles.subContainer}>
      <div className={styles.graphContainer}>
        <MonthGraph chartData={chartData} average={avg} />
        <div className={styles.avgContainer}>
          <div className={styles.avgLine}></div>
          <div>moyenne: {avg.toFixed(1)}</div>
        </div>
      </div>

      <TimeSwitcher
        label={monthLabel}
        subLabel={year.toString()}
        onPrev={() => changeDate(-1)}
        onNext={() => changeDate(1)}
        canGoPrev={canNavigate(-1)}
        canGoNext={canNavigate(1)}
      />
      <BestData
        mostValue={mostValue?.value ?? null}
        count={mostValue?.count ?? 0}
        chartDataLength={chartDataLength}
      />
      <div className={styles.separator}></div>
      <MonthProgress
        label={monthLabel}
        labelPrev={prevMonthLabel}
        avgCurrent={avg.toFixed(1)}
        avgPrev={avgPrev.toFixed(1)}
        year={year}
        changeDate={changeDate}
        canNavigate={canNavigate}
      />
    </div>
  );
}

export default MonthView;
