import styles from "@/components/statsPage/Stats.module.scss";

import { useStatsData } from "@/domain/stats/hooks/useStatsData";

import TimeSwitcher from "@/components/statsPage/timeSwitcher/TimeSwitcher";
import { Year } from "@/types/DateTypes";
import { getYearChart } from "@/domain/stats/getYearChart";
import { getBestMonth } from "@/domain/stats/getBestMonth";

import YearGraph from "./yearGraph/YearGraph";
import { getDominantEmotion } from "@/domain/stats/getDominantEmotion";
import BestData from "@/components/ui/bestData/BestData";

function YearView() {
  const { filteredData, date, changeDate, canNavigate } = useStatsData("year");

  const year = date.getFullYear().toString() as Year;
  const chartData = getYearChart(filteredData, year);

  const chartDataLength = filteredData.filter(
    (item) => item.value !== null,
  ).length;

  const mostValue = getDominantEmotion(filteredData);

  const bestMonth = getBestMonth(chartData);

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
    </div>
  );
}

export default YearView;
