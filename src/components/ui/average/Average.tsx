import styles from "./Average.module.scss";

type Props = {
  label: string;
  avgCurrent: string;
  avgPrev: string;
  labelPrev: string;
};

function Average({ label, avgCurrent, avgPrev, labelPrev }: Props) {
  const getMood = (value: number) => {
    if (value === 0) return styles.neutral;
    if (value < 3) return styles.medium;
    if (value < 4) return styles.good;
    return styles.great;
  };
  const currentMood = getMood(Number(avgCurrent));
  const prevMood = getMood(Number(avgPrev));
  const displayValue = (value: string) => (Number(value) === 0 ? "-" : value);

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
