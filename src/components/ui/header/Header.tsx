"use client";
import styles from "./Header.module.scss";

import Logo from "@/assets/img/logo_app.svg";

// type StarProps = {
//   validated: boolean;
// };

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
