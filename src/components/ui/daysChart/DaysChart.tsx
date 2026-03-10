import styles from "./DaysChart.module.scss";

import type { EmotionLevel } from "@/types/EmotionLevel";

const emotionColors = {
  1: "var(--color-emotion-bad)",
  2: "var(--color-emotion-meh)",
  3: "var(--color-emotion-ok)",
  4: "var(--color-emotion-good)",
  5: "var(--color-emotion-great)",
} as const;

type DaysChartProps = {
  data: EmotionLevel[];
  labels: (string | number)[];
};

function DaysChart({ data, labels }: DaysChartProps) {
  return (
    <div className={styles.chart}>
      {data.map((value, i) => (
        <div className={styles.item} key={i}>
          <div
            className={`${styles.bar} ${
              i === data.length - 1 ? styles.today : ""
            }`}
            style={
              {
                "--value": value,
                "--color": emotionColors[value],
              } as React.CSSProperties
            }
          />
          <span
            className={`${styles.label} ${
              i === data.length - 1 ? styles.today : ""
            }`}
          >
            {labels[i]}
          </span>
        </div>
      ))}
    </div>
  );
}

export default DaysChart;
