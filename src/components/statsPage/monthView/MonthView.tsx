import styles from "../Stats.module.scss";

import { useStatsData } from "@/domain/stats/hooks/useStatsData";
import { getMonthChart } from "@/domain/stats/getMonthChart";

import TimeSwitcher from "@/components/statsPage/timeSwitcher/TimeSwitcher";
import MonthGraph from "./monthGraph/MonthGraph";
import { ChartPoint } from "../../../domain/stats/getMonthChart";

function MonthView() {
  const { filteredData, date, changeDate, canNavigate } = useStatsData("month");
  const chartData: ChartPoint[] = getMonthChart(filteredData);

  return (
    <div className={styles.subContainer}>
      <TimeSwitcher
        label={date.toLocaleString("fr-FR", { month: "long" })}
        subLabel={date.getFullYear().toString()}
        onPrev={() => changeDate(-1)}
        onNext={() => changeDate(1)}
        canGoPrev={canNavigate(-1)}
        canGoNext={canNavigate(1)}
      />
      <MonthGraph chartData={chartData} />
    </div>
  );
}

export default MonthView;
