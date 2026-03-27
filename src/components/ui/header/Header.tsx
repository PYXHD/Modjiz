"use client";
import styles from "./Header.module.scss";

import { useState, useEffect } from "react";
import Logo from "@/assets/img/logo_app.svg";
import { Entry } from "@/types/Entry";
import { getUserData } from "@/data/getUserData";
import { getToday } from "@/lib/time/getToday";

function Header() {
  const [userData, setUserData] = useState<Entry[]>([]);
  useEffect(() => {
    async function reload() {
      const data = await getUserData();
      setUserData(data);
    }

    reload();

    window.addEventListener("mood-updated", reload);

    return () => window.removeEventListener("mood-updated", reload);
  }, []);

  const today = getToday().toLocaleDateString("en-CA");
  const hasTodayEntry = userData.some((entry) => entry.date === today);

  return (
    <div className={styles.container}>
      <div className={styles.counter}>
        <img
          src={
            hasTodayEntry
              ? "/icons/icon_star.svg"
              : "/icons/icon_star_unactive.svg"
          }
          alt="Star icon"
          className={styles.iconMd}
        />
        <p className="text-inverse text-title-medium">{userData.length}</p>
      </div>
      <Logo alt="App title" className={styles.logo} />
    </div>
  );
}

export default Header;
