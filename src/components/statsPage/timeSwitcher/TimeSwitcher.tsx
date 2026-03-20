"use client";
import styles from "./TimeSwitcher.module.scss";

type Props = {
  label: string;
  subLabel?: string;
  onPrev: () => void;
  onNext: () => void;
};

function TimeSwitcher({ label, subLabel, onPrev, onNext }: Props) {
  return (
    <div className={styles.timeSwitcher}>
      <button className={styles.prev} onClick={onPrev}></button>

      <div className="label">
        <div className="main">{label}</div>
        {subLabel && <div className="sub">{subLabel}</div>}
      </div>

      <button className={styles.next} onClick={onNext}></button>
    </div>
  );
}

export default TimeSwitcher;
