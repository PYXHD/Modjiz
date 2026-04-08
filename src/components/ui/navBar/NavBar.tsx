"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.scss";

function NavBar() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <Link
        href="/app"
        className={`${styles.iconButton} ${pathname === "/app" ? styles.active : ""}`}
      >
        <img src="/icons/menu_home.svg" alt="Home icon" />
      </Link>
      <Link
        href="/app/stats"
        className={`${styles.iconButton} ${pathname === "/app/stats" ? styles.active : ""}`}
      >
        <img src="/icons/menu_stats.svg" alt="Stats icon" />
      </Link>
      <Link
        href="/app/trophies"
        className={`${styles.iconButton} ${pathname === "/app/trophies" ? styles.active : ""}`}
      >
        <img src="/icons/menu_trophy.svg" alt="Stats trophies" />
      </Link>
      <Link
        href="/app/settings"
        className={`${styles.iconButton} ${pathname === "/app/settings" ? styles.active : ""}`}
      >
        <img src="/icons/menu_settings.svg" alt="Settings icon" />
      </Link>
    </div>
  );
}

export default NavBar;
