"use client";

import Logo from "@/assets/img/logo_app.svg";

import { toDayKey } from "@/lib/time/toDayKey";

import styles from "./Header.module.scss";
import { useAppData } from "@/lib/context/AppDataContext";

function Header() {
  const { userData, currentDate } = useAppData();
  const isDemo = document.cookie.includes("app-mode=mock");

  const today = toDayKey(currentDate);
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
      {isDemo && (
        <span className="text-lead text-uppercase text-inverse">Démo</span>
      )}
      <Logo alt="App title" className={styles.logo} />
    </div>
  );
}

export default Header;
