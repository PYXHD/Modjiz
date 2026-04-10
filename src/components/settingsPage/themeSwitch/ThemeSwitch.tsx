"use client";

import { useEffect, useState } from "react";

import styles from "./ThemeSwitch.module.scss";

export default function ThemeSwitch() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");

    if (theme === "light" || theme === "dark") {
      setMode(theme);
    }
  }, []);

  const toggle = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    document.documentElement.setAttribute("data-theme", newMode);
  };

  return (
    <div className={styles.switch}>
      <div
        className={`${styles.slider} ${mode === "dark" ? styles.right : ""}`}
      />

      <button
        className={`${mode === "light" ? styles.active : ""} text-primary text-body`}
        onClick={toggle}
      >
        Clair
      </button>

      <button
        className={`${mode === "dark" ? styles.active : ""} text-primary text-body`}
        onClick={toggle}
      >
        Sombre
      </button>
    </div>
  );
}
