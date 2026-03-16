"use client";
import styles from "./Trophies.module.scss";

import { TROPHIES } from "@/data/trophies/trophies";

function Trophies() {
  return (
    <div className={styles.trophies}>
      <h1>Trophées</h1>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          {TROPHIES.filter((t) => t.type === "stars").map((trophy) => (
            <div key={trophy.id}>
              <div className={styles.titleContainer}>
                <img src="/icons/icon_trophy.svg" alt="" />
                <div className={styles.title}>"{trophy.title}"</div>
              </div>
              <p className={styles.description}>- {trophy.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.subContainer}>
          {TROPHIES.filter((t) => t.type === "history").map((trophy) => (
            <div key={trophy.id}>
              <div>
                <div className={styles.titleContainer}>
                  <img src="/icons/icon_trophy.svg" alt="" />
                  <div className={styles.title}>"{trophy.title}"</div>
                </div>
                <p className={styles.description}>- {trophy.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.subContainer}>
          {TROPHIES.filter((t) => t.type === "month").map((trophy) => (
            <div key={trophy.id}>
              <div>
                <div className={styles.titleContainer}>
                  <img src="/icons/icon_trophy.svg" alt="" />
                  <div className={styles.title}>"{trophy.title}"</div>
                </div>
                <p className={styles.description}>- {trophy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trophies;
