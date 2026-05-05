"use client";

import Logo from "@/assets/img/logo_app.svg";

import { getToday } from "@/lib/time/getToday";
import { toDayKey } from "@/lib/time/toDayKey";

import styles from "./Header.module.scss";
import { useAppData } from "@/lib/context/AppDataContext";

function Header() {
  const { userData } = useAppData();

  const today = toDayKey(getToday());
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
