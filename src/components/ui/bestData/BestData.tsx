import styles from "./BestData.module.scss";

type Props = {
  mostValue: number | null;
  count: number;
  chartDataLength: number;
};

function BestData({ mostValue, count, chartDataLength }: Props) {
  const mood = (() => {
    switch (mostValue) {
      case 5:
        return { className: styles.great, label: "Au top" };
      case 4:
        return { className: styles.good, label: "Bien" };
      case 3:
        return { className: styles.ok, label: "Ça va" };
      case 2:
        return { className: styles.meh, label: "Bof" };
      case 1:
        return { className: styles.sad, label: "Pas ouf" };
      case null:
        return { className: styles.noData, label: "" };
      default:
        return { className: "", label: "" };
    }
  })();

  const moodClass = mood.className;
  const moodDisplay = mood.label;

  return (
    <div className={styles.bestData}>
      <h2 className={styles.modifiedH2}>Le plus souvent</h2>
      <div className={`${styles.container} ${moodClass}`}>
        {mostValue === null ? (
          <div>-</div>
        ) : (
          <>
            <div className={styles.texts}>
              <div className={styles.moodText}>{moodDisplay}</div>
              <p className={styles.dataText}>
                {count} jours sur {chartDataLength}
              </p>
            </div>
            <div className={styles.modji}>// THREE</div>
          </>
        )}
      </div>
    </div>
  );
}

export default BestData;
