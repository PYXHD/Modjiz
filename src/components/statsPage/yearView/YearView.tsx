import { useMemo } from "react";

import { useStatsData } from "@/domain/stats/hooks/useStatsData";
import { getYearChart } from "@/domain/stats/chart/getYearChart";
import { getDominantEmotion } from "@/domain/stats/aggregation/getDominantEmotion";
import { getYearData } from "@/domain/stats/queries/getYearData";
import { average } from "@/domain/stats/core/average";

import TimeSwitcher from "@/components/statsPage/timeSwitcher/TimeSwitcher";
import YearGraph from "./yearGraph/YearGraph";
import YearProgress from "./yearProgress/YearProgress";
import BestData from "@/components/ui/bestData/BestData";

import styles from "@/components/statsPage/Stats.module.scss";

function YearView() {
  const { data, filteredData, date, changeDate, canNavigate } =
    useStatsData("year");

  const year = date.getFullYear();
  const yearLabel = year.toString();

  const chartData = useMemo(
    () => getYearChart(filteredData, yearLabel),
    [filteredData, yearLabel],
  );

  const chartDataLength = useMemo(
    () =>
      filteredData.reduce(
        (acc, item) => acc + (item.value !== null ? 1 : 0),
        0,
      ),
    [filteredData],
  );

  const prevYear = year - 1;
  const prevYearLabel = prevYear.toString();

  const prevYearData = useMemo(
    () => getYearData(data, prevYearLabel),
    [data, prevYearLabel],
  );

  const avg = useMemo(() => average(filteredData), [filteredData]);
  const avgPrev = useMemo(() => average(prevYearData), [prevYearData]);

  const dominantEmotion = useMemo(
    () => getDominantEmotion(filteredData),
    [filteredData],
  );

  return (
    <div className={styles.subContainer}>
      <TimeSwitcher
        label={yearLabel}
        onPrev={() => changeDate(-1)}
        onNext={() => changeDate(1)}
        canGoPrev={canNavigate(-1)}
        canGoNext={canNavigate(1)}
      />
      <YearGraph chartData={chartData} />

      <BestData
        mostValue={dominantEmotion?.value ?? null}
        count={dominantEmotion?.count ?? 0}
        chartDataLength={chartDataLength}
      />

      <div className={styles.separator} />

      <YearProgress
        label={yearLabel}
        labelPrev={prevYearLabel}
        avgCurrent={avg}
        avgPrev={avgPrev}
        changeDate={changeDate}
        canNavigate={canNavigate}
      />
    </div>
  );
}

export default YearView;
