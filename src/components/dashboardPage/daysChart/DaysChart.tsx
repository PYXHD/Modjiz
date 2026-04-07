import styles from "./DaysChart.module.scss";

import type { EmotionLevel } from "@/domain/mood/config/moods";
import { emotionColorsByValue } from "@/domain/mood/config/moods";

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
                "--color": emotionColorsByValue[value],
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
