"use client";

import { useAppData } from "@/lib/context/AppDataContext";
import { TROPHIES } from "@/data/trophies/trophies";

import styles from "./Trophies.module.scss";

function Trophies() {
  const { userData, historyData } = useAppData();

  const trophyGroups = [
    {
      type: "stars",
      data: userData,
    },
    {
      type: "history",
      data: historyData,
    },
  ];

  return (
    <div className={styles.trophies}>
      <h1 className="text-center">Trophées</h1>
      <div className={styles.container}>
        {trophyGroups.map((group) => (
          <div key={group.type} className={styles.subContainer}>
            {TROPHIES.filter((t) => t.type === group.type).map((trophy) => {
              const isUnlocked = group.data.length >= trophy.target;

              return (
                <div key={trophy.id}>
                  <div className={styles.titleContainer}>
                    <img
                      src={
                        isUnlocked
                          ? "/icons/icon_trophy.svg"
                          : "/icons/icon_trophy_unactive.svg"
                      }
                      alt=""
                    />
                    <div className="text-title-medium">"{trophy.title}"</div>
                  </div>
                  <p className="text-primary text-small">
                    - {trophy.description}
                  </p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trophies;
