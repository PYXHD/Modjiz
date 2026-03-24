import styles from "@/components/statsPage/Stats.module.scss";

import Average from "@/components/ui/average/Average";

type Props = {
  label: string;
  avgCurrent: string;
  avgPrev: string;
  labelPrev: string;
};

function Progress({ label, labelPrev, avgCurrent, avgPrev }: Props) {
  const current = Number(avgCurrent);
  const prev = Number(avgPrev);

  const compareIcon = () => {
    if (current === 0 || prev === 0) return null;

    if (current > prev) return "/icons/icon_arrow_up.svg";
    if (current < prev) return "/icons/icon_arrow_down.svg";
    return "/icons/icon_arrow_flat.svg";
  };
  const hasData = current !== 0 && prev !== 0;
  const icon = compareIcon();
  const avgGap = hasData ? current - prev : null;

  const formattedGap =
    avgGap == null
      ? "-"
      : avgGap > 0
        ? `+${avgGap.toFixed(1)}`
        : avgGap.toFixed(1);

  return (
    <div className={styles.progress}>
      <h2>Progression</h2>
      <Average
        label={label}
        labelPrev={labelPrev}
        avgCurrent={avgCurrent}
        avgPrev={avgPrev}
      />
      <div className={styles.compare}>
        <div className={styles.comparedData}>
          {icon && (
            <img src={icon} alt="Comparison icon" className={styles.icon} />
          )}
          <div className={styles.comparedText}>
            <span className={styles.highlightText}>{formattedGap}</span> /5
          </div>
        </div>
        <p className={styles.textMeta}>par rapport au mois précédent</p>
      </div>
    </div>
  );
}

export default Progress;
