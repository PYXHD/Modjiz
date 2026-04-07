import styles from "./TimeSwitcher.module.scss";

type Props = {
  label: string;
  subLabel?: string;
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
};

function TimeSwitcher({
  label,
  subLabel,
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
}: Props) {
  return (
    <div className={styles.timeSwitcher}>
      <button
        className={styles.prev}
        onClick={onPrev}
        disabled={!canGoPrev}
      ></button>

      <div className={styles.label}>
        <div className="main">{label}</div>
        {subLabel && <div className="sub">{subLabel}</div>}
      </div>

      <button
        className={styles.next}
        onClick={onNext}
        disabled={!canGoNext}
      ></button>
    </div>
  );
}

export default TimeSwitcher;
