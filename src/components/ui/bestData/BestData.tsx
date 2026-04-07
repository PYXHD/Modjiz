import styles from "./BestData.module.scss";

import Scene from "@/components/three/Canvas";
import { MOODS } from "@/domain/mood/config/moods";
import type { EmotionLevel } from "@/domain/mood/config/moods";

type Props = {
  mostValue: EmotionLevel | null;
  count: number;
  chartDataLength: number;
};

function BestData({ mostValue, count, chartDataLength }: Props) {
  const mood = MOODS.find((m) => m.value === mostValue);

  const moodClass = mood ? styles[mood.emotion] : styles.noData;
  const moodDisplay = mood?.label ?? "";

  return (
    <div className={styles.bestData}>
      <h2>Le plus souvent</h2>
      <div className={`${styles.container} ${moodClass}`}>
        {mostValue === null ? (
          <div>-</div>
        ) : (
          <>
            <div className={styles.texts}>
              <div className="text-lead">{moodDisplay}</div>
              <p className=" text-body-italic">
                {count} jours sur {chartDataLength}
              </p>
            </div>
            <div className={styles.modji}>
              <Scene mood={mostValue} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BestData;
