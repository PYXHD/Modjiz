import styles from "./Average.module.scss";

type Props = {
  label: string;
  avgCurrent: string;
  avgPrev: string;
  labelPrev: string;
};

function Average({ label, avgCurrent, avgPrev, labelPrev }: Props) {
  const getMood = (value: number) => {
    if (value < 3) return styles.medium;
    if (value < 4) return styles.good;
    return styles.great;
  };
  const currentMood = getMood(Number(avgCurrent));
  const prevMood = getMood(Number(avgPrev));

  return (
    <div className={styles.container}>
      <div className={styles.currentMonth}>
        <div className={styles.month}>{label}</div>
        <div className={`${styles.texts} ${currentMood}`}>
          <div>moyenne</div>
          <div>{avgCurrent}</div>
        </div>
      </div>
      <div className={styles.currentMonth}>
        <div className={styles.month}>{labelPrev}</div>
        <div className={`${styles.texts} ${prevMood}`}>
          <div>moyenne</div>
          <div>{avgPrev}</div>
        </div>
      </div>
    </div>
  );
}

export default Average;
