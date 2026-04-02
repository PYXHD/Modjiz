import styles from "./YearGraph.module.scss";

import type { YearChart } from "@/domain/stats/chart/getYearChart";

type Props = {
  chartData: YearChart[];
};

function YearGraph({ chartData }: Props) {
  const getMood = (value: number | null) => {
    if (value === null) return styles.neutral;
    if (value < 3) return styles.medium;
    if (value < 4) return styles.good;
    return styles.great;
  };

  return (
    <div className={styles.yearAvgs}>
      {chartData.map((item) => {
        const moodClass = getMood(item.value);
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
