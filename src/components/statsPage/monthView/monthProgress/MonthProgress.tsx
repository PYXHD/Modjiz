import Average from "@/components/ui/average/Average";
import TimeSwitcher from "@/components/statsPage/timeSwitcher/TimeSwitcher";

import styles from "@/components/statsPage/Stats.module.scss";

type Props = {
  label: string;
  avgCurrent: number;
  avgPrev: number;
  labelPrev: string;
  changeDate: (direction: number) => void;
  canNavigate: (direction: number) => boolean;
};

function MonthProgress({
  label,
  labelPrev,
  avgCurrent,
  avgPrev,
  changeDate,
  canNavigate,
}: Props) {
  const hasData = avgCurrent !== 0 && avgPrev !== 0;

  const icon = !hasData
    ? null
    : avgCurrent > avgPrev
      ? "/icons/icon_arrow_up.svg"
      : avgCurrent < avgPrev
        ? "/icons/icon_arrow_down.svg"
        : "/icons/icon_arrow_flat.svg";

  const avgGap = hasData ? avgCurrent - avgPrev : null;

  const formattedGap =
    avgGap == null ? "-" : `${avgGap > 0 ? "+" : ""}${avgGap.toFixed(1)}`;

  return (
    <div className={styles.progress}>
      <h2>Progression</h2>

      <TimeSwitcher
        label="Comparer"
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
            <img
              src={icon}
              alt="Évolution par rapport au mois précédent"
              className={styles.icon}
            />
          )}

          <div className="text-primary text-display">
            <span className="text-primary text-highlight">{formattedGap}</span>{" "}
            /5
          </div>
        </div>

        <p className="text-primary text-caption">
          par rapport au mois précédent
        </p>
      </div>
    </div>
  );
}

export default MonthProgress;
