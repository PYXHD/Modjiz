import styles from "@/components/statsPage/Stats.module.scss";

import { useMemo } from "react";

import { useStatsData } from "@/domain/stats/hooks/useStatsData";

import TimeSwitcher from "@/components/statsPage/timeSwitcher/TimeSwitcher";
import { getYearChart } from "@/domain/stats/chart/getYearChart";

import YearGraph from "./yearGraph/YearGraph";
import { getDominantEmotion } from "@/domain/stats/aggregation/getDominantEmotion";
import BestData from "@/components/ui/bestData/BestData";
import { getYearData } from "@/domain/stats/queries/getYearData";
import { average } from "@/domain/stats/core/average";
import YearProgress from "./progress/YearProgress";

function YearView() {
  const { data, filteredData, date, changeDate, canNavigate } =
    useStatsData("year");

  const year = date.getFullYear().toString();
  const chartData = getYearChart(filteredData, year);

  const chartDataLength = filteredData.filter(
    (item) => item.value !== null,
  ).length;

  const prevDate = useMemo(() => {
    const d = new Date(date);
    d.setFullYear(d.getFullYear() - 1);
    return d;
  }, [date]);

  const prevYearData = useMemo(() => {
    const year = prevDate.getFullYear().toString();
    return getYearData(data, year);
  }, [data, prevDate]);

  const avg = useMemo(() => average(filteredData), [filteredData]);
  const avgPrev = useMemo(() => average(prevYearData), [prevYearData]);

  const mostValue = getDominantEmotion(filteredData);

  const yearLabel = year;
  const prevYearLabel = prevDate.getFullYear().toString();

  return (
    <div className={styles.subContainer}>
      <YearGraph chartData={chartData} />
      <TimeSwitcher
        label={date.getFullYear().toString()}
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
      <YearProgress
        label={yearLabel}
        labelPrev={prevYearLabel}
        avgCurrent={avg.toFixed(1)}
        avgPrev={avgPrev.toFixed(1)}
        changeDate={changeDate}
        canNavigate={canNavigate}
      />
    </div>
  );
}

export default YearView;
