"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./NavBar.module.scss";

const links = [
  {
    href: "/app",
    icon: "/icons/menu_home.svg",
    label: "Accueil",
  },
  {
    href: "/app/stats",
    icon: "/icons/menu_stats.svg",
    label: "Stats",
  },
  {
    href: "/app/trophies",
    icon: "/icons/menu_trophy.svg",
    label: "Trophées",
  },
  {
    href: "/app/settings",
    icon: "/icons/menu_settings.svg",
    label: "Réglages",
  },
];

function NavBar() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      {links.map((link) => {
        const isActive =
          link.href === "/app"
            ? pathname === "/app"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-label={link.label}
            aria-current={isActive ? "page" : undefined}
            className={`${styles.iconButton} ${isActive ? styles.active : ""}`}
          >
            <img src={link.icon} alt="" />
          </Link>
        );
      })}
    </div>
  );
}

export default NavBar;
