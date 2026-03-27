import styles from "@/components/statsPage/Stats.module.scss";

import Average from "@/components/ui/average/Average";
import TimeSwitcher from "@/components/statsPage/timeSwitcher/TimeSwitcher";

type Props = {
  label: string;
  avgCurrent: string;
  avgPrev: string;
  labelPrev: string;
  changeDate: (direction: number) => void;
  canNavigate: (direction: number) => boolean;
};

function YearProgress({
  label,
  labelPrev,
  avgCurrent,
  avgPrev,
  changeDate,
  canNavigate,
}: Props) {
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
      <TimeSwitcher
        label="Comparer"
        subLabel=""
        onPrev={() => changeDate(-1)}
        onNext={() => changeDate(1)}
        canGoPrev={canNavigate(-1)}
        canGoNext={canNavigate(1)}
      />
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
          <div className="text-primary text-display">
            <span className="text-primary text-highlight">{formattedGap}</span>{" "}
            /5
          </div>
        </div>
        <p className="text-primary text-caption">
          par rapport à l'année précédente
        </p>
      </div>
    </div>
  );
}

export default YearProgress;
