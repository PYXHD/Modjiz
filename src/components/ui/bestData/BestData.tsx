import Scene from "@/components/three/Canvas";

import { MOODS } from "@/domain/mood/config/moods";
import type { EmotionLevel } from "@/domain/mood/config/moods";

import styles from "./BestData.module.scss";

type Props = {
  mostValue: EmotionLevel | null;
  count: number;
  chartDataLength: number;
};

function BestData({ mostValue, count, chartDataLength }: Props) {
  const mood = MOODS.find((m) => m.value === mostValue);
  const hasData = mood !== undefined;

  const moodClass = mood ? styles[mood.emotion] : styles.noData;
  const moodDisplay = mood?.label ?? "";

  return (
    <div className={styles.bestData}>
      <h2>Le plus souvent</h2>
      <div className={`${styles.container} ${moodClass}`}>
        {!hasData ? (
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
              <Scene mood={mood.value} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BestData;
