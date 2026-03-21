"use client";
import styles from "./Trophies.module.scss";

import { useState, useEffect } from "react";

import { TROPHIES } from "@/data/trophies/trophies";
import { getUserData } from "@/data/getUserData";
import { getHistoryData } from "@/data/getHistoryData";

import type { Entry } from "@/types/Entry";
import type { HistoryStats } from "@/types/HistoryStats";

function Trophies() {
  const [userData, setUserData] = useState<Entry[]>([]);
  const [historyData, setHistoryData] = useState<HistoryStats>([]);

  useEffect(() => {
    async function loadData() {
      const [user, history] = await Promise.all([
        getUserData(),
        getHistoryData(),
      ]);

      setUserData(user);
      setHistoryData(history);
    }

    loadData();
  }, []);

  console.log(historyData);
  return (
    <div className={styles.trophies}>
      <h1>Trophées</h1>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          {TROPHIES.filter((t) => t.type === "stars").map((trophy) => {
            const isUnlocked = userData.length >= trophy.target;
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
                  <div className={styles.title}>"{trophy.title}"</div>
                </div>
                <p className={styles.description}>- {trophy.description}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.subContainer}>
          {TROPHIES.filter((t) => t.type === "history").map((trophy) => {
            const isUnlocked = historyData.length >= trophy.target;
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
                  <div className={styles.title}>"{trophy.title}"</div>
                </div>
                <p className={styles.description}>- {trophy.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Trophies;
