import { getMoodLevel } from "@/domain/mood/getMoodLevel";

import styles from "./Average.module.scss";

type Props = {
  label: string;
  avgCurrent: number;
  avgPrev: number;
  labelPrev: string;
};

function Average({ label, avgCurrent, avgPrev, labelPrev }: Props) {
  const currentMood = styles[getMoodLevel(avgCurrent)];
  const prevMood = styles[getMoodLevel(avgPrev)];
  const displayValue = (value: number) =>
    value === 0 ? "-" : value.toFixed(1);

  return (
    <div className={styles.container}>
      <div className={styles.currentMonth}>
        <div className={`${styles.month} text-primary text-body-medium`}>
          {label}
        </div>
        <div className={`${styles.data} ${styles.avgTypo} ${currentMood}`}>
          <div>moyenne</div>
          <div>{displayValue(avgCurrent)}</div>
        </div>
      </div>
      <div className={styles.currentMonth}>
        <div className={`${styles.month} text-primary text-body-medium`}>
          {labelPrev}
        </div>
        <div className={`${styles.data} ${styles.avgTypo} ${prevMood}`}>
          <div>moyenne</div>
          <div>{displayValue(avgPrev)}</div>
        </div>
      </div>
    </div>
  );
}

export default Average;
