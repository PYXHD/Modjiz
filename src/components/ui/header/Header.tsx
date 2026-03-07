"use client";
import styles from "./Header.module.scss";

import Logo from "@/assets/img/logo_app.svg";

type StarProps = {
  validated: boolean;
};

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.counter}>
        <img
          src="/icons/icon_star_unactive.svg"
          alt="Star icon"
          className={styles.iconMd}
        />
        <p className={styles.countTypo}>22</p>
      </div>
      <Logo alt="App title" className={styles.title} />
      <div className={styles.trophy}>
        <img
          src="/icons/icon_trophy.svg"
          alt="Trophy Icon"
          className={styles.iconMd}
        />
      </div>
    </div>
  );
}

export default Header;
