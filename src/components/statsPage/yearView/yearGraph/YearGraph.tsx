import { getMoodLevel } from "@/domain/mood/getMoodLevel";

import type { YearChart } from "@/domain/stats/chart/chart.types";

import styles from "./YearGraph.module.scss";

type Props = {
  chartData: YearChart[];
};

function YearGraph({ chartData }: Props) {
  return (
    <div className={styles.yearAvgs}>
      {chartData.map((item) => {
        const moodKey = getMoodLevel(item.value);
        const moodClass = styles[moodKey] ?? "";
        const width = item.value ?? 0;

        return (
          <div className={styles.row} key={item.month}>
            <span className={styles.label}>{item.label}</span>

            <div className={styles.barContainer}>
              <div
                className={`${styles.bar} ${moodClass}`}
                style={
                  {
                    "--value": width,
                  } as React.CSSProperties
                }
              >
                {item.value !== null ? item.value.toFixed(1) : "—"}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default YearGraph;
