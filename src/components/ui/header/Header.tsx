"use client";
import styles from "./Header.module.scss";

import { useState, useEffect } from "react";
import Logo from "@/assets/img/logo_app.svg";
import { Entry } from "@/types/Entry";
import { getUserData } from "@/data/getUserData";

{
  /* DEV ONLY */
}
function resetDemo(): void {
  localStorage.removeItem("app-mode");
  location.reload();
}
{
  /* DEV ONLY */
}

function Header() {
  // REFACTOR ///////////////////////////
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
  // REFACTOR ///////////////////////////

  return (
    <div className={styles.container}>
      <div className={styles.counter}>
        <img
          src="/icons/icon_star_unactive.svg"
          alt="Star icon"
          className={styles.iconMd}
        />
        <p className={styles.countTypo}>{userData.length}</p>
      </div>

      {/* DEV ONLY */}
      <button
        onClick={resetDemo}
        style={{
          width: "80px",
          height: "30px",
          backgroundColor: "red",
          cursor: "pointer",
        }}
      >
        {" "}
        RESET
      </button>
      {/* DEV ONLY */}
      <Logo alt="App title" className={styles.title} />
    </div>
  );
}

export default Header;
